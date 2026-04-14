'use client';

import { useModal } from '@/components/Modal/ModalContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className={styles.hero}>

      <div className={styles.decorTopLeft}>
        <img src="/arrows.png" alt="" />
      </div>

      {/* Десктоп: абсолютно позиционирована. Мобайл: скрыта (starMobile вместо неё) */}
      <div className={styles.decorTopRight}>
        <img src="/star.png" alt="" />
      </div>

      <div className={styles.decorBottomLeft}>
        <img src="/circle.png" alt="" />
      </div>

      <div className={styles.decorBottomRight}>
        <img src="/Union.png" alt="" />
      </div>

      <div className={styles.center}>

        <div className={styles.lionWrap}>
          <img src="/lion.png" alt="" className={styles.lionImg} />
        </div>

        <div className={styles.logoRow}>
          <img src="/Vector 4.png" alt="" className={styles.lightning} />
          <img src="/aurora.png" alt="aurora" className={styles.auroraImg} />
        </div>

        <p className={styles.tagline}>Озаряй свой бренд</p>
        <p className={styles.subtitle}>Маркетинговое агентство</p>

        <div className={styles.btnRow}>
          <button onClick={openModal} className={styles.btnPrimary}>
            Оставить заявку
          </button>
          {/* Только мобайл: звезда рядом с кнопкой, выходит за правый край */}
          <img src="/star.png" alt="" className={styles.starMobile} />
        </div>

      </div>
    </section>
  );
}