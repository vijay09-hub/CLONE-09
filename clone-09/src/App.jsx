import './App.css';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import Row from './Row.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';

function App() {
  const trendingNow = [
    { title: 'Extraction 2', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop' },
    { title: 'The Witcher', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop' },
    { title: 'Cyberpunk', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop' },
    { title: 'Dark Mystery', img: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=400&h=600&fit=crop' },
    { title: 'Lost in Space', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop' },
  ];

  const topRated = [
    { title: 'Inception Nights', img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=600&fit=crop' },
    { title: 'Final Mission', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop' },
    { title: 'Red Notice', img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop' },
    { title: 'Night Walker', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop' },
  ];

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="movies-section">
        <Row title="Trending Now" movies={trendingNow} />
        <Row title="Top Rated on Netflix" movies={topRated} />
      </div>
      <Footer />
    </div>
  );
}

export default App;