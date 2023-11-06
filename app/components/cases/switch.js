"use client"
import {useState} from "react";
import styles from '../../styles/cases.module.scss'

export const Switch = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className={styles.switch__container}>
            <div
                className={`${styles.switch__item} ${activeIndex === 0 ? styles.active__switch : ''}`}
                onClick={() => handleItemClick(0)}
            >
                <div className={`${styles.switch__title} ${activeIndex === 0 ? styles.active__title: ''}`}>Обучение</div>
                {activeIndex === 0 && <div className={styles.switch__desc}>
                    Обучение и стажировка была в компании, как и работа. Около 3-х лет работал с ними, получал опыт и знания.
                    Став профессиональным мастером, не знающий задержек в ремонтах, решил работать на себя и вот, я здесь.
                </div>}
            </div>
            <div
                className={`${styles.switch__item} ${activeIndex === 1 ? styles.active__switch : ''}`}
                onClick={() => handleItemClick(1)}
            >
                <div className={`${styles.switch__title} ${activeIndex === 1 ? styles.active__title: ''}`}>Немного о себе</div>
                {activeIndex === 1 && <div className={styles.switch__desc}>
                    Обучение и стажировка была в компании, как и работа. Около 3-х лет работал с ними, получал опыт и знания.
                    Став профессиональным мастером, не знающий задержек в ремонтах, решил работать на себя и вот, я здесь.
                </div>}
            </div>
            <div
                className={`${styles.switch__item} ${activeIndex === 2 ? styles.active__switch : ''}`}
                onClick={() => handleItemClick(2)}
            >
                <div className={`${styles.switch__title} ${activeIndex === 2 ? styles.active__title: ''}`}>Работа и гарантия</div>
                {activeIndex === 2 && <div className={styles.switch__desc}>
                    Обучение и стажировка была в компании, как и работа. Около 3-х лет работал с ними, получал опыт и знания.
                    Став профессиональным мастером, не знающий задержек в ремонтах, решил работать на себя и вот, я здесь.
                </div>}
            </div>
        </div>
    );
}