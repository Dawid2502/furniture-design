import './counter-up.scss'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function CounterUp({ startValue, endValue, duration, suffix, onCountingFinish }) {
	const [isVisible, setIsVisible] = useState(false);

	const [countingFinished, setCountingFinished] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.5, // Kiedy 50% komponentu jest widoczne
        triggerOnce: true, // Uruchom tylko raz
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    useEffect(() => {
        if (isVisible && !countingFinished) {
            setCountingFinished(true); // Ustawienie flagi, że odliczanie zostało zakończone
            onCountingFinish(); // Wywołanie funkcji przekazanej z komponentu nadrzędnego
        }
    }, [isVisible, countingFinished, onCountingFinish]);

    return (
        <div ref={ref} className='counter'>
            {isVisible && (
                <CountUp start={startValue} end={endValue} duration={duration} separator=" " suffix={suffix} />
            )}
        </div>
    );
}
