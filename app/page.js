import styles from './styles/home.module.scss'
import {HeaderBlock} from "@/app/components/headerBlock";
import {RepairTypes} from "@/app/components/home/repairTypes";
import {CallMaster} from "@/app/components/CallMaster";
import Head from "next/head";
export default function Home() {
    const data = [
        {
            "title": "Диагностика",
            "price": "бесплатно",
            "bonus": "+ скидка 20% на ремонт",
            "button": "Заказать"
        },
        {
            "title": "Ремонт стиральных машин",
            "price": "от 990 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
        {
            "title": "Ремонт холодильников",
            "price": "от 350 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
        {
            "title": "Ремонт плит и духовок",
            "price": "от 450 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
        {
            "title": "Ремонт микроволновок",
            "price": "от 590 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
        {
            "title": "Ремонт кофемашин",
            "price": "от 790 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
        {
            "title": "Ремонт посудомойки",
            "price": "от 650 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
        {
            "title": "Ремонт пылесосов",
            "price": "от 450 ₽",
            "bonus": "+ скидка на ремонт",
            "button": "Рассчитать"
        },
    ]

    const header_data = [
        {
            "text1": "Ремонт бытовой техники",
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
      <>
          <HeaderBlock header_data={header_data}/>
          <RepairTypes data={data}/>
          <CallMaster/>
      </>
  )
}
