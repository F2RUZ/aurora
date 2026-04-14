'use client';

import { useState } from 'react';
import styles from './CTA.module.css';

export default function CTA() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(`Заявка отправлена! Мы свяжемся с вами по номеру ${phone}`);
    setName('');
    setPhone('');
  };

  return (
    <section id="contact" className={styles.cta}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.iconWrapper}>⚡</div>
            <h2 className={styles.title}>
              Оставьте заявку на аудит вашего бизнеса
            </h2>
            <p className={styles.subtitle}>
              Бесплатно проанализируем ваш маркетинг и предложим конкретный план роста.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.input}
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              className={styles.input}
              placeholder="Номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button type="submit" className={styles.btnSubmit}>
              Оставить заявку
            </button>
            <p className={styles.privacy}>
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}