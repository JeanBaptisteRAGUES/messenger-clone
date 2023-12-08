import React, { useCallback, useEffect, useRef } from 'react';
/* import Engine from "./stockfish/engine"; */
//import Engine from "../../public/stockfish.ts/engine";

const Worker = () => {
    /* const engine = new Engine();
    engine.init(); */
    const workerRef = useRef<Worker>();

    useEffect(() => {
        console.log('Worker.tsx');
        /* workerRef.current = new window.Worker(new URL('./worker1.js', import.meta.url)); // Ne semble pas marcher (Worker.tsx et worker1.js dans components) */
        workerRef.current = new window.Worker('./worker1.js');  // Marche (Worker.tsx et worker1.js dans components)
        if(workerRef.current === undefined){
            console.log('workerRef.current: undefined');
            return;
        }
        console.log('ok');
        //console.log(workerRef.current);
        workerRef.current.postMessage('Salut');
        workerRef.current.onmessage = function(event) {
            console.log(event.data);
        }

        workerRef.current.postMessage("T'as pas une clope ?");
        workerRef.current.onmessage = function(event) {
            console.log(event.data);
        }

        /* workerRef.current?.terminate(); // Attention où le placer, risque de fermer le worker trop tôt et de ne pas recevoir les messages */
    }, []);

    return (
        <div>Worker</div>
    )
}

export default Worker;