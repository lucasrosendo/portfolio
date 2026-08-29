import Link from 'next/link';
import Menu from '../Menu';
import './styles.css';

// Site-wide fixed nav bar. Lives in the root layout so it's present on every
// route (home, /game-develop, /blog); the hero Banner stays home-page-only.
export default function Header() {
  return (
    <header className="glass-header">
      <div className="header-container">
        <div className="logo-container">
          <Link href="/" className="logo glow-text">&lt;LR/&gt;</Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}
