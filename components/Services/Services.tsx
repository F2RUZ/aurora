'use client';
import { useState, useEffect } from 'react';
import styles from './Services.module.css';
import { servicesData } from './services.data';
import { useModal } from '../Modal/ModalContext';

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // На мобайле — 1 карточка, на десктопе — 3
  const visible = isMobile ? 1 : 3;
  const max = Math.max(0, servicesData.length - visible);

  const handlePrev = () => setCurrent((p) => Math.max(0, p - 1));
  const handleNext = () => setCurrent((p) => Math.min(max, p + 1));

  // Смещение: на мобайле — 100% на карточку, на десктопе — 1/3 + gap
  const translateX = isMobile
    ? `translateX(calc(-${current} * (100% + 16px)))`
    : `translateX(calc(-${current} * (100% / 3 + 8px)))`;

  return (
    <section id="services" className={styles.services}>
      <div className="container">

        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Услуги + цены</h2>
        </div>

        <div className={styles.sliderWrapper}>

          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={handlePrev}
            disabled={current === 0}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className={styles.sliderContainer}>
            <div
              className={styles.grid}
              style={{ transform: translateX }}
            >
              {servicesData.map((service) => (
                <div key={service.id} className={styles.card}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                  <img src={service.image} alt={service.title} className={styles.cardImage} />
                  <button onClick={openModal} className={styles.btnSm}>
                    Оставить заявку
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={handleNext}
            disabled={current === max}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

        </div>

        {/* Баннер */}
        <div className={styles.banner}>
          <div className={styles.bannerLeftGroup}>
            <img src="/Vector 4.png" alt="icon" className={styles.bannerVectorIcon} />
            <div className={styles.bannerTextContent}>
              <h3 className={styles.bannerTitle}>
                Оставьте заявку на аудит вашего бизнеса
              </h3>
              <button onClick={openModal} className={styles.bannerBtn}>
                Оставить заявку
              </button>
            </div>
          </div>
          <div className={styles.bannerImageWrapper}>
            <img src="/images/services/zayavka.png" alt="Аудит бизнеса" className={styles.bannerImage} />
          </div>
        </div>

      </div>
    </section>
  );
}