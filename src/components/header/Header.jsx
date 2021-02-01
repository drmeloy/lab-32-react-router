import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/characters'>Rick and Morty Character List</Link></li>
    </ul>
  </header>
);

export default Header;
