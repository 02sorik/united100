import styles from '../styles/fridge.module.scss'
import {CallMaster} from "@/app/components/CallMaster";
import {RepairTypes} from "@/app/components/home/repairTypes";
import {HeaderBlock} from "@/app/components/headerBlock";
function Washing() {
    const data = [
        {
            "title": "Диагностика",
            "price": "бесплатно",
            "bonus": "+ скидка 20% на ремонт",
            "button": "Заказать"
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
            "price": "от 1190 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
    ]

    const header_data = [
        {
            "text1": "Ремонт стиральных машин",
            "text2": "в Томске",
            "text3": "на дому!",
            "text4": "Гарантия",
            "text5": "от 3 мес до 2-ух ЛЕТ!",
            "text6": "С частным мастером, вы экономите",
            "text7": "до 3500Р",
            "text8": "не переплачивая компаниям.",
        }
    ]

    return (
        <div className={styles.fridge}>
            <HeaderBlock header_data={header_data}/>
            <RepairTypes data={data}/>
            <CallMaster/>
        </div>
    )
}

export default Washing