import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar" style={scrolled ? { background: "rgba(5,5,8,0.99)", boxShadow: "0 4px 30px rgba(155,54,234,0.15)" } : {}}>
        <div className="navbar-logo">SLAY シ DEVIL</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#videos">Gameplay</a></li>
          <li><a href="#setup">Setup</a></li>
          <li><a href="#tips">Tips</a></li>
          <li><a href="#instagram">Reels</a></li>
          <li><a href="#socials">Socials</a></li>
        </ul>
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home"      onClick={closeMenu}>🏠 Home</a>
        <a href="#videos"   onClick={closeMenu}>🎮 Gameplay</a>
        <a href="#setup"    onClick={closeMenu}>⚙️ Setup</a>
        <a href="#tips"     onClick={closeMenu}>💡 Tips</a>
        <a href="#instagram"onClick={closeMenu}>📸 Instagram</a>
        <a href="#socials"  onClick={closeMenu}>🔗 Socials</a>
      </div>
    </>
  );
};

export default Navbar;
