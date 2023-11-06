"use client"
import {useEffect} from "react";

export const Form = () => {
    useEffect(() => {
        (function (t, p) {
            window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function () {
                Marquiz.add([t, p]);
            });
        })('Inline', {
            id: '64addda3e3bc620025076831',
            buttonText: 'Вызвать мастера',
            autoOpen: false,
            autoOpenFreq: 'once',
            openOnExit: false,
            disableOnMobile: false,
            rounded: true,
            shadow: 'rgba(239, 185, 0, 0.5)',
            blicked: true,
        });
    }, []);
    return (
        <div style={{position: "fixed", zIndex: "9", top: "0", width: "100%", height: "100vh", background: "rgba(0, 0, 0, 0.49)"}}>
            <div data-marquiz-id="64addda3e3bc620025076831" style={{width: "100%", maxWidth: "500px", top: "10%", position: "relative"}}></div>
        </div>
    )
}