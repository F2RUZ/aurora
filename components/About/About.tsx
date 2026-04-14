'use client';
import { useState } from 'react';
import styles from './About.module.css';

export default function About() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Имя — только буквы и пробел
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Разрешаем только буквы (любые) и пробел
    const cleaned = val.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
    setName(cleaned);
    if (cleaned.trim().length < 2 && cleaned.length > 0) {
      setNameError('Минимум 2 буквы');
    } else {
      setNameError('');
    }
  };

  // Телефон — начинается с +998, только цифры после
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    // Нельзя удалить +998
    if (!val.startsWith('+998')) {
      setPhone('+998');
      return;
    }

    // После +998 только цифры
    const afterPrefix = val.slice(4).replace(/\D/g, '');

    // Максимум 9 цифр после +998 (узбекский формат: +998 XX XXX XX XX)
    const limited = afterPrefix.slice(0, 9);
    setPhone('+998' + limited);

    if (limited.length > 0 && limited.length < 9) {
      setPhoneError('Введите полный номер');
    } else {
      setPhoneError('');
    }
  };

  const handlePhoneFocus = () => {
    if (!phone.startsWith('+998')) setPhone('+998');
  };

  const handleSubmit = () => {
    let valid = true;

    if (name.trim().length < 2) {
      setNameError('Введите ваше имя');
      valid = false;
    }
    if (phone.length < 13) {
      setPhoneError('Введите полный номер');
      valid = false;
    }

    if (valid) {
      // Отправка формы
      alert(`Заявка отправлена!\nИмя: ${name}\nТелефон: ${phone}`);
    }
  };

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>

        {/* Заголовок */}
        <h2 className={styles.title}>О компании</h2>

        {/* Лого + описание */}
        <div className={styles.intro}>
          <img src="/aurora.png" alt="Aurora logo" className={styles.logo} />
          <p className={styles.desc}>
            «Aurora» — агентство, работающее с 2015 года и предоставляющее полный спектр услуг для
            развития бизнеса. Специализируемся на разработке маркетинговых стратегий, создании
            сайтов, ведении социальных сетей и разработке фирменного стиля.
          </p>
        </div>

        {/* ── DESKTOP: SVG timeline ── */}
        <div className={styles.timeline}>
          <svg viewBox="0 0 1100 1000" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
            <path
              d="M 550 20 C 550 100, 700 120, 700 260 C 700 400, 400 420, 400 540 C 400 660, 700 680, 700 820 C 700 910, 550 960, 550 960"
              stroke="#111111" strokeWidth="3" fill="none" strokeLinecap="round"
            />
            <circle cx="700" cy="260" r="7" fill="#111111" stroke="#EBEBEB" strokeWidth="4" />
            <text x="722" y="278" fontSize="100" fontWeight="900" fill="#72BFB0" letterSpacing="-4">10+</text>
            <text x="722" y="308" fontSize="14" fontWeight="700" fill="#111111" letterSpacing="0.5">компаний на рынке</text>

            <circle cx="400" cy="540" r="7" fill="#111111" stroke="#EBEBEB" strokeWidth="4" />
            <text x="378" y="558" fontSize="100" fontWeight="900" fill="#72BFB0" letterSpacing="-4" textAnchor="end">65+</text>
            <text x="378" y="588" fontSize="14" fontWeight="700" fill="#111111" letterSpacing="0.5" textAnchor="end">клиентов в работе</text>

            <circle cx="700" cy="820" r="7" fill="#111111" stroke="#EBEBEB" strokeWidth="4" />
            <text x="722" y="838" fontSize="100" fontWeight="900" fill="#72BFB0" letterSpacing="-4">150+</text>
            <text x="722" y="868" fontSize="14" fontWeight="700" fill="#111111" letterSpacing="0.5">всего проектов</text>

            <circle cx="430" cy="920" r="7" fill="#111111" stroke="#EBEBEB" strokeWidth="4" />
            <text x="408" y="938" fontSize="100" fontWeight="900" fill="#72BFB0" letterSpacing="-4" textAnchor="end">100+</text>
            <text x="408" y="968" fontSize="14" fontWeight="700" fill="#111111" letterSpacing="0.5" textAnchor="end">сотрудников в компании</text>
          </svg>
        </div>

        {/* ── MOBILE: карточки ── */}
        <div className={styles.statsGrid}>
          <div className={styles.statsColLeft}>
            <div className={styles.statCard}>
              <span className={styles.statNum}>100+</span>
              <span className={styles.statLabel}>сотрудников в компании</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>150+</span>
              <span className={styles.statLabel}>всего проектов</span>
            </div>
          </div>
          <div className={styles.statsColRight}>
            <div className={styles.statCardAlt}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>компания на рынке</span>
            </div>
            <div className={styles.statCardAlt}>
              <span className={styles.statNum}>65+</span>
              <span className={styles.statLabel}>клиентов в работе</span>
            </div>
          </div>
        </div>

        {/* ── КОНТАКТНЫЙ БЛОК ── */}
        <div className={styles.contact} id="contact">

          <div className={styles.contactLeft}>
            <h3>Давайте обсудим<br />ваш проект</h3>
            <p>Оставьте заявку и наш менеджер свяжется с вами для уточнения подробностей.</p>
            <div className={styles.socials}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
          </div>

          <div className={styles.contactCenter}>

            {/* Поле имени */}
            <div className={styles.fieldWrap}>
              <input
                type="text"
                placeholder="Ваше имя"
                className={`${styles.input} ${nameError ? styles.inputError : ''}`}
                value={name}
                onChange={handleName}
              />
              {nameError && <span className={styles.errorMsg}>{nameError}</span>}
            </div>

            {/* Поле телефона */}
            <div className={styles.fieldWrap}>
              <input
                type="tel"
                className={`${styles.input} ${phoneError ? styles.inputError : ''}`}
                value={phone}
                onChange={handlePhone}
                onFocus={handlePhoneFocus}
                inputMode="tel"
              />
              {phoneError && <span className={styles.errorMsg}>{phoneError}</span>}
            </div>

            <button className={styles.btn} onClick={handleSubmit}>
              Оставить заявку
            </button>
          </div>

          <div className={styles.contactRight}>
            <div>
              <h4>(812) 313 88 99</h4>
              <p>Dubai, 8-A street</p>
            </div>
            <div>
              <h4>(812) 313 88 99</h4>
              <p>Dubai, 8-A street</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}