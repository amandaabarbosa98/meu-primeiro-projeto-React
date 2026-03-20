// src/components/Header.jsx

import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span className='logo-daily'>📋</span>
        <h1><strong>My Daily Habits</strong></h1>
      </div>

      <nav className="header-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'nav-link ativo' : 'nav-link'}
        >
          Início
        </NavLink>

        <NavLink
          to="/habitos"
          className={({ isActive }) => isActive ? 'nav-link ativo' : 'nav-link'}
        >
          Hábitos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header