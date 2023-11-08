"use client"
import { usePathname } from "next/navigation";
import styles from "@/app/styles/header.module.scss";
import Link from "next/link";
import {useState} from "react";

export const Nav = () => {
    const router = usePathname()
    const [state, setState] = useState(false);
    return (
        <>
            <nav className={styles.nav}>
                <Link href="/" passHref className={`${styles.nav__link} ${router  === '/' ? styles.nav__active : ''}`}>Главная
                </Link>
                <Link href="/cases" passHref className={`${styles.nav__link} ${router  === '/cases' ? styles.nav__active : ''}`}>Примеры работ
                </Link>
                <Link href="/washing" passHref className={`${styles.nav__link} ${router  === '/washing' ? styles.nav__active : ''}`} style={{color: 'white', font: 7}}>Стиральные машины
                </Link>
                <Link href="/fridge" passHref className={`${styles.nav__link} ${router  === '/fridge' ? styles.nav__active : ''}`} style={{color: 'white'}}>Холодильники</Link>
            </nav>
            {
                state && (
                    <nav className={styles.navmobile}>
                        <Link href="/" onClick={()=>setState(!state)} passHref className={`${styles.nav__link} ${router  === '/' ? styles.nav__active : ''}`}>Главная
                        </Link>
                        <Link href="/cases" onClick={()=>setState(!state)} passHref className={`${styles.nav__link} ${router  === '/cases' ? styles.nav__active : ''}`}>Примеры работ
                        </Link>
                        <Link href="/fridge" onClick={()=>setState(!state)} passHref className={`${styles.nav__link} ${router  === '/fridge' ? styles.nav__active : ''}`}><font size="7" color="white">Холодильники</font>
                        </Link>
                        <Link href="/washing" onClick={()=>setState(!state)} passHref className={`${styles.nav__link} ${router  === '/washing' ? styles.nav__active : ''}`}><font size="7">Стиральные машины</font></Link>
                    </nav>
                )
            }
            <button className={styles.burger} onClick={()=>setState(!state)}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </button>
        </>
    );
};
