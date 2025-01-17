import { useEffect, useState } from 'react';
import './FunFacts.css';

const FunFacts = () => {
    const [totalMessages, setTotalMessages] = useState(0);
    const [daysTogether, setDaysTogether] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const animateNumber = (setter, target, duration) => {
            let start = 0;
            const increment = Math.ceil(target / (duration / 16)); // Approximate frames per second

            const updateNumber = () => {
                start += increment;
                if (start >= target) {
                    setter(target); // Ensure it ends cleanly
                } else {
                    setter(start);
                    requestAnimationFrame(updateNumber);
                }
            };

            updateNumber();
        };

        const handleScroll = () => {
            const element = document.querySelector('.fact-container');
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (isVisible && !hasAnimated) {
                // Animate total messages
                animateNumber(setTotalMessages, 10106, 1000);

                // Calculate and animate days together
                const startDate = new Date('2024-05-17');
                const today = new Date();
                const differenceInTime = today - startDate;
                const daysTogetherCalculated = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
                animateNumber(setDaysTogether, daysTogetherCalculated, 1000);

                setHasAnimated(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasAnimated]);

    const firstMessageDate = new Date('2024-02-24T22:39:38Z'); // UTC date
    const firstMessageDatePST = firstMessageDate.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' });

    return (
        <div className="fact-container">
            <div className="fact">
                <h3>First Message Date</h3>
                <p>{firstMessageDatePST}</p>
            </div>
            <div className="fact">
                <h3>Total iMessages</h3>
                <p>{totalMessages}</p>
            </div>
            <div className="fact">
                <h3>Days Together</h3>
                <p>{daysTogether}</p>
            </div>
        </div>
    );
};

export default FunFacts;