export default function Header() {
    return (
      <header>
        <nav className="nav">
          <img src="./react-logo.png" alt="react logo" className="logo" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }