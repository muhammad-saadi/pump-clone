import React, {useState} from 'react';
import MainContent from './components/MainContent';
import SearchBar from './components/SearchBar';
import './App.css';

const cardData = [
  {
    createdAt: "3 months ago",
    createdBy: "Hrcx3e4",
    replies: "20",
    name: "goku",
    description: "This is a description of the post. It explains the content briefly.",
    marketCap: "$1M"
  },
  {
    createdAt: "2 months ago",
    createdBy: "UserXYZ",
    replies: "50",
    name: "vejita",
    description: "This is another description of a post. Explains some different content.",
    marketCap: "$2M"
  },
  {
    createdAt: "1 month ago",
    createdBy: "User123",
    replies: "10",
    name: "taklu",
    description: "Brief description of this post goes here.",
    marketCap: "$500K"
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(cardData);

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

  return (
    <div className="app">
      <header className="header">
        <h1>Pump Board</h1>
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
