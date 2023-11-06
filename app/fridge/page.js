"use client"
import styles from '../styles/fridge.module.scss'
import {CallMaster} from "@/app/components/CallMaster";
import {RepairTypes} from "@/app/components/home/repairTypes";
import {HeaderBlock} from "@/app/components/headerBlock";
import {useEffect} from "react";
function Fridge() {
    const data = [
        {
            "title": "Диагностика",
            "price": "бесплатно",
            "bonus": "+ скидка 20% на ремонт",
            "button": "Заказать",
        },
        {
            "title": "Ремонт фильтра-осушителя",
            "price": "от 350 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
        {
            "title": "Замена пуско-защитного реле",
            "price": "от 790 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
        {
            "title": "Ремонт мотор-компрессора",
            "price": "от 1990 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
        {
            "title": "Замена конденсатора",
            "price": "от 1440 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
        {
            "title": "Устранение утечки хладагента",
            "price": "от 1300 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
        {
            "title": "Замена терморегулятора",
            "price": "от 900 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
        {
            "title": "Замена или ремонт модуля управления",
            "img": "",
            "price": "от 1190 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
    ]

    const header_data = [
        {
            "text1": "Ремонт холодильников",
            "text2": "в Томске",
            "text3": "на дому!",
            "text4": "Гарантия",
            "text5": "от 2 мес до 3-ёх ЛЕТ!",
            "text6": "С частным мастером, вы экономите",
            "text7": "до 3500Р",
            "text8": "не переплачивая компаниям.",
        }
    ]

    useEffect(() => {
        (function (t, p) {
            window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function () {
                Marquiz.add([t, p]);
            });
        })('Inline', {
            id: '64add4288eaa61002591a61d',
            buttonText: 'Пройти тест',
            bgColor: '#efb900',
            textColor: '#ffffff',
            rounded: true,
            shadow: 'rgba(239, 185, 0, 0.5)',
            blicked: true,
        });
    }, []);

    return (
        <div className={styles.fridge}>
            <HeaderBlock header_data={header_data}/>
            <RepairTypes data={data}/>
            <div data-marquiz-id="64add4288eaa61002591a61d" style={{maxWidth: "100%"}}></div>
            <CallMaster/>
        </div>
    )
}

export default Fridge