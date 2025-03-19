import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Players from './pages/Players';
import { Home as HomeIcon, Users as UsersIcon } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="bg-black text-gray-200 min-h-screen flex flex-col">
        <nav className="bg-gray-900 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
              <UsersIcon className="h-6 w-6" />
              <span className="text-xl font-bold">Nation Z Server</span>
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
                  <HomeIcon className='h-4 w-4'/>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/players" className="flex items-center gap-2 hover:text-white transition-colors">
                  <UsersIcon className='h-4 w-4' />
                  Players
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-center p-4">
          &copy; {new Date().getFullYear()} Nation Z Server. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
