import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3001;

// Placeholder data for now
const serverStatus = {
  uptime: '12 hours',
  status: 'online',
};

const playerStats = [
  { id: 1, name: 'Player 1', kills: 100 },
  { id: 2, name: 'Player 2', kills: 200 },
];

// API Endpoints
app.get('/api/server-status', (req, res) => {
  // In a real scenario, we would fetch this data from the game server.
  res.json(serverStatus);
});

app.get('/api/player-stats', (req, res) => {
  // In a real scenario, we would fetch this from the database.
  res.json(playerStats);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
