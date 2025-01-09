import React, { useState, useEffect } from 'react';
import MainContent from './components/MainContent';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import RandomCard from './components/RandomCard';
import './App.css';

const cardData = [
  {
    createdAt: "3 months ago",
    createdBy: "Hrcx3e4",
    replies: "20",
    name: "Goku",
    description: "This is a description of the post. It explains the content briefly.",
    marketCap: "$1M"
  },
  {
    createdAt: "2 months ago",
    createdBy: "UserXYZ",
    replies: "50",
    name: "Vajeta",
    description: "This is another description of a post. Explains some different content.",
    marketCap: "$2M"
  },
  {
    createdAt: "1 month ago",
    createdBy: "User123",
    replies: "10",
    name: "Taklu",
    description: "Brief description of this post goes here.",
    marketCap: "$500K"
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(cardData);
  const [randomCard, setRandomCard] = useState(cardData[0]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === '') {
      setFilteredData(cardData);
    } else {
      const filtered = cardData.filter((card) =>
        card.createdBy.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * filteredData.length);
    setRandomCard(filteredData[randomIndex]);
  };

  useEffect(() => {
    if (filteredData.length > 0) {
      getRandomCard();
    }
  }, [filteredData]);

  return (
    <div className="app">
      <Header />
      <header className="top-coin">
        <img
          src={`${process.env.PUBLIC_URL}/king-of-the-hill.png`}
          className="king-hill-image"
          alt="King of the Hill"
        />
        {randomCard && <RandomCard {...randomCard} />}
      </header>
      <main className="main">
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <div className="main-content">
          {filteredData.map((card, index) => (
            <MainContent key={index} {...card} />
          ))}
        </div>
      </main>
      <footer className="footer">
        <p>© 2025 Pump Fun</p>
      </footer>
    </div>
  );
}

export default App;
