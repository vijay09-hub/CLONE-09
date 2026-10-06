import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`netflix-nav ${isScrolled ? 'nav-black' : ''}`}>
      <div className="nav-left">
        <img
          className="nav-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpnOZCT6EiyYGhkGTT7uLVfiH2MzKJd59SXp_C4FkpQ&s=10"
          alt="Netflix"
        />
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>

      <div className="nav-right">
        <span className="nav-icon">🔍</span>
        <span className="nav-icon">🔔</span>
        <img
          className="nav-avatar"
          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202003/disneyhotstar_660_110320034428.jpg?size=1280:720"
          alt="Profile"
        />
      </div>
    </nav>
  );
}

export default Navbar;