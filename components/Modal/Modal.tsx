'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.css';
import { useModal } from './ModalContext';

export default function Modal() {
  const { isOpen, closeModal } = useModal();

  // Состояния для полей формы
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998');

  // Сбрасываем поля при каждом открытии модалки
  useEffect(() => {
    if (isOpen) {
      setName('');
      setPhone('+998');
    }
  }, [isOpen]);

  // Обработка ввода имени (только буквы и пробелы)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Регулярное выражение: разрешаем только буквы (любых алфавитов) и пробелы
    const onlyLetters = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
    setName(onlyLetters);
  };

  // Обработка ввода телефона (+998 + 9 цифр)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Если пользователь пытается удалить код +998, не даем этого сделать
    if (!value.startsWith('+998')) {
      setPhone('+998');
      return;
    }

    // Берем только ту часть, которая идет после +998
    const digitsOnly = value.slice(4).replace(/\D/g, '');
    
    // Ограничиваем длину до 9 цифр после кода
    if (digitsOnly.length <= 9) {
      setPhone('+998' + digitsOnly);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div 
            className={styles.modal}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className={styles.closeBtn}>&times;</button>
            
            <div className={styles.content}>
              <h2 className={styles.title}>
                Оставьте заявку и получите предложение на лучших условиях
              </h2>

              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className={styles.input} 
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Ваш телефон" 
                  className={styles.input} 
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />

                <div className={styles.checkboxGrid}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" /> <span>Лидогенерация</span>
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" /> <span>Дизайн и разработка</span>
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" defaultChecked /> <span>Реклама</span>
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" /> <span>Все направления</span>
                  </label>
                </div>

                <label className={styles.policy}>
                  <input type="checkbox" required defaultChecked />
                  <span>Я даю согласие на обработку своих персональных данных в соответствии с политикой конфиденциальности</span>
                </label>

                <button type="submit" className={styles.submitBtn}>
                  Оставить заявку
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}