"use client"
import styles from '../../styles/repairtypes.module.scss';
import {useState} from "react";
import {Form} from "@/app/components/form";

export const RepairTypes = (props) => {

    const data = props.data

    const [state, setState] = useState(false);

    return (
            <div className={styles.repair}>
                <div className={styles.container}>
                    <h2 className={styles.repair__title}>Основные виды ремонта</h2>
                    <div className={styles.repair__list}>
                        {data.map((item) =>
                            <div className={styles.repair__item}>
                                <h3 className={styles.repair__text}>{item.title}</h3>
                                <h4 className={styles.repair__price}>{item.price}</h4>
                                <h5 className={styles.repair__bonus}>{item.bonus}</h5>
                                <button className={styles.repair__button} onClick={() => setState(!state)}>{item.button}</button>
                            </div>
                        )}
                    </div>
                </div>
                {
                    state && (
                        <>
                            <div style={{position: "fixed", top: "0", zIndex: "999", background: "#FF8209", cursor: "pointer", borderRadius: "20px", width: "100%", maxWidth: "500px", margin: "20px", padding: "10px", textAlign: "center"}} onClick={() => setState(!state)}>Закрыть</div>
                            <Form/>
                        </>
                    )
                }
            </div>

    )
}