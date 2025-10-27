const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 5000;
const SECRET_KEY = "your_secret_key";

app.use(cors());
app.use(express.json());

let users = [];

app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  const passwordHash = bcrypt.hashSync(password, 8);
  users.push({ id: users.length + 1, username, passwordHash });
  res.json({ message: "User registered successfully" });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '24h' });
  res.json({ auth: true, token });
});

app.get('/api/news', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided.' });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token.' });
    const news = [
      { id: 1, title: "India wins Cricket World Cup!", content: "India beats Australia in a thrilling final." },
      { id: 2, title: "NASA launches new moon mission", content: "Artemis mission aims to return humans to the Moon." },
      { id: 3, title: "AI Technology is booming", content: "AI is transforming industries worldwide." },
    ];
    res.json(news);
  });
});

app.get('/api/profile', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided.' });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token.' });
    const user = users.find(u => u.id === decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found.' });
    res.json({ username: user.username });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
