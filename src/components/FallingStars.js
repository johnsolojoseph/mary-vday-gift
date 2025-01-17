import { useEffect, useState } from "react";
import "./FallingStars.css";

const FallingStars = () => {
    const [stars, setStars] = useState([]);

    // Create a number of stars
    useEffect(() => {
        const createStars = () => {
            const newStars = [];
            for (let i = 0; i < 100; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    animationDuration: `${Math.random() * 2 + 3}s`,
                });
            }
            setStars(newStars);
        };
        createStars();
        const interval = setInterval(createStars, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="falling-stars-container">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        left: `${star.x}vw`,
                        top: `${star.y}vh`,
                        animationDuration: star.animationDuration,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default FallingStars;