'use client';

import styles from './Team.module.css';
import { useState, useEffect } from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Тимур',
    role: 'Директор',
    description: 'Главный двигатель и вдохновитель нашей команды. Тимур знает, как превратить идеи в реальные результаты и всегда ведет агентство к новым вершинам',
    image: '/images/team/Rectangle 18.png',
  },
  {
    id: 2,
    name: 'Дониёр Иззатов',
    role: 'Маркетолог',
    description: 'Эксперт по разработке маркетинговых стратегий. От анализа рынка до продвижения брендов — Дониёр всегда знает, как добиться максимального результата.',
    image: '/images/team/Rectangle 20.png',
  },
  {
    id: 3,
    name: 'Муниса',
    role: 'Веб-дизайнер',
    description: 'Создает современные и удобные сайты, которые сочетают эстетику и функциональность. Её работы помогают бизнесу выделяться в цифровом пространстве.',
    image: '/images/team/Rectangle 22.png',
  },
  {
    id: 4,
    name: 'Нурбек',
    role: 'SMM специалист',
    description: 'Ведет и продвигает проекты в социальных сетях. Зухра знает всё о трендах и алгоритмах, помогая брендам активно взаимодействовать со своей аудиторией.',
    image: '/images/team/Rectangle 22(1).png',
  },
  {
    id: 5,
    name: 'Доник',
    role: 'Аналитик',
    description: 'Отвечает за сбор и анализ данных, оценивает эффективность кампаний и помогает корректировать стратегии на основе цифр и фактов.',
    image: '/images/team/Rectangle 24.png',
  },
  {
    id: 6,
    name: 'Бехруз',
    role: 'Менеджер по работе с клиентами',
    description: 'Организует коммуникацию между клиентами и командой. Следит за соблюдением сроков и помогает решать все организационные вопросы',
    image: '/images/team/Rectangle 26.png',
  },
];

export default function Team() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const visible = isMobile ? 1 : 3;
  const gap = 24;
  const max = Math.max(0, teamMembers.length - visible);

  const next = () => setCurrent(prev => Math.min(max, prev + 1));
  const prev = () => setCurrent(prev => Math.max(0, prev - 1));

  // На мобайле смещаем на 100% + gap, на десктопе — на 1/3
  const translateX = isMobile
    ? `translateX(calc(-${current} * (100% + ${gap}px)))`
    : `translateX(calc(-${current} * (100% / 3 + ${gap}px / 3)))`;

  return (
    <section className={styles.teamSection}>
      <div className="container">
        <h2 className={styles.title}>Команда</h2>

        <div className={styles.sliderWrapper}>

          <button
            className={`${styles.navBtn} ${styles.prev}`}
            onClick={prev}
            disabled={current === 0}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <div className={styles.overflow}>
            <div
              className={styles.grid}
              style={{ transform: translateX }}
            >
              {teamMembers.map((member) => (
                <div key={member.id} className={styles.memberCard}>
                  <div className={member.id % 2 === 0 ? styles.imgBoxAlt : styles.imgBox}>
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className={styles.info}>
                    <h3>{member.name} — <span>{member.role}</span></h3>
                    <p>{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.navBtn} ${styles.next}`}
            onClick={next}
            disabled={current === max}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}