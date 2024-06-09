import React from 'react';
import Header from './components/Header';
import FowersDisplay from './components/FowersDisplay';
import BackgroundChanger from './components/BackgroundChanger';

const App = () => {
  return (
    <BackgroundChanger>
      <Header />
      <main className="flex justify-center items-center min-h-screen">
        <FowersDisplay />
      </main>
    </BackgroundChanger>
  );
};

export default App;
