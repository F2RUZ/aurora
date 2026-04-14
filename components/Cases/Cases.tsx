import styles from './Cases.module.css';
import { casesData } from './cases.data';

export default function Cases() {
  return (
    <section id="cases" className={styles.cases}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Кейсы</h2>
        <div className={styles.grid}>
          {casesData.map((item) => (
            <div
              key={item.id}
              className={`${styles.card} ${styles[item.colorClass as keyof typeof styles]}`}
            >
              <div className={styles.cardImageWrapper}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cardImage}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}