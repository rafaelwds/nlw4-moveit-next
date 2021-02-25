import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    
    const minutos = Math.floor(time / 60);
    const seconds = time % 60;

    const [minutLeft, minutRight] = String(minutos).padStart(2, '0').split('')
    const [secondstLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }else if (isActive && time == 0){
          setHasFinished(true);
          setIsActive(false);
        }
    }, [isActive, time])

  return (
    <div>  
    <div className={styles.countdownContainer}>
       <div>
           <span>{minutLeft}</span>
           <span>{minutRight}</span>
       </div>
       <span>:</span>
       <div>
           <span>{secondstLeft}</span>
           <span>{secondsRight}</span>
       </div>
    </div>
    { hasFinished ? (
        <button 
        disabled
        className={styles.countdownButton}
        >
        Ciclo encerrado
        </button>
    ) : (
        <>
            { isActive ? (
                <button 
                type="button" 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
                >
                Abandonar ciclo
                </button>
            ) : (
                <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}
                >
                    Iniciar um ciclo
                </button>
            ) }
        </>
    )}
    
   
    
    </div>
  );
}