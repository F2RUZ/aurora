import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg className={styles.logoIcon} viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#F5C518"/>
                <path d="M18 8 C22 12, 28 14, 28 20 C28 26, 22 30, 18 30 C14 30, 8 26, 8 20 C8 14, 14 12, 18 8Z" fill="#111111" opacity="0.85"/>
                <circle cx="18" cy="20" r="5" fill="#F5C518"/>
              </svg>
              <span className={styles.logoText}>aurora</span>
            </div>
            <p className={styles.brandDesc}>
              Маркетинговое агентство полного цикла. Озаряем ваш бренд.
            </p>
          </div>

          <div>
            <p className={styles.colTitle}>Навигация</p>
            <nav className={styles.links}>
              <a href="#cases" className={styles.link}>Кейсы</a>
              <a href="#services" className={styles.link}>Услуги + цены</a>
              <a href="#about" className={styles.link}>О компании</a>
              <a href="#team" className={styles.link}>Команда</a>
              <a href="#contact" className={styles.link}>Контакты</a>
            </nav>
          </div>

          <div>
            <p className={styles.colTitle}>Контакты</p>
            <div className={styles.contacts}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:+78123138899" className={styles.link}>(812) 313 88 99</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <a href="mailto:hello@aurora.agency" className={styles.link}>hello@aurora.agency</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Санкт-Петербург</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Aurora. Все права защищены.
          </p>

          <div className={styles.socials}>
            <a href="#" className={styles.social} aria-label="Telegram">✈️</a>
            <a href="#" className={styles.social} aria-label="VK">🔵</a>
            <a href="#" className={styles.social} aria-label="Instagram">📸</a>
          </div>
        </div>
      </div>
    </footer>
  );
}