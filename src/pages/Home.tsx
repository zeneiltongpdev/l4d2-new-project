import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [serverStatus, setServerStatus] = useState({ uptime: '', status: '' });
  const [playerStats, setPlayerStats] = useState<{ id: number; name: string; kills: number }[]>([]);

  useEffect(() => {
    // Fetch server status
    fetch('/api/server-status')
      .then((res) => res.json())
      .then((data) => setServerStatus(data))
      .catch((err) => console.error('Error fetching server status:', err));

    // Fetch player statistics
    fetch('/api/player-stats')
      .then((res) => res.json())
      .then((data) => setPlayerStats(data))
      .catch((err) => console.error('Error fetching player stats:', err));
  }, []);

  return (
    <div className="space-y-8">
      <div className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: `url(https://images.unsplash.com/photo-1605629963557-45b5878c8792)` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Nation Z Server</h1>
          <p className="text-xl text-gray-300 mb-8">Welcome to the Apocalypse</p>
          <Link to="/players" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            View Players
          </Link>
        </div>
      </div>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center">About the Server</h2>
        <p className="text-gray-300 text-center">
          Nation Z is a dedicated Left 4 Dead 2 server focused on providing a challenging and fun cooperative experience. We have custom maps, active admins, and a friendly community. Join us and survive the zombie apocalypse!
        </p>
      </section>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Server Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-4 rounded-md text-center">
            <h3 className="text-lg font-medium text-gray-400">Server Status</h3>
            <p className="text-3xl font-bold text-green-400">{serverStatus.status}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-md text-center">
            <h3 className="text-lg font-medium text-gray-400">Uptime</h3>
            <p className="text-3xl font-bold text-yellow-400">{serverStatus.uptime}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-md text-center">
            <h3 className="text-lg font-medium text-gray-400">Total Players</h3>
            <p className="text-3xl font-bold text-green-400">{playerStats.length}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
