'use client';
import { useState } from 'react';
import styles from './Header.module.css';

const navItems = [
  { label: 'Главная',     href: '#hero' },
  { label: 'Кейсы',      href: '#cases' },
  { label: 'Услуги',     href: '#services' },
  { label: 'Команда',    href: '#team' },
  { label: 'О компании', href: '#about' },
  { label: 'Контакты',   href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <button
            className={styles.menuBtn}
            aria-label="Меню"
            onClick={() => setOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="#111111" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Клик → плавный скролл вниз к #contact */}
          <a href="#contact" className={styles.contactLink} onClick={handleContact}>
            Контакты
          </a>
        </div>
      </header>

      <div
        className={`${styles.overlay} ${open ? styles.overlayVisible : ''}`}
        onClick={() => setOpen(false)}
      />

      <nav className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Закрыть">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className={styles.drawerLogo}>
          <img src="/aurora.png" alt="Aurora" />
        </div>

        <ul className={styles.navList}>
          {navItems.map((item, i) => (
            <li key={item.href} className={styles.navItem} style={{ animationDelay: `${i * 0.06}s` }}>
              <button className={styles.navLink} onClick={() => handleNav(item.href)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.drawerFooter}>
          <p>(812) 313 88 99</p>
          <p>Dubai, 8-A street</p>
        </div>
      </nav>
    </>
  );
}