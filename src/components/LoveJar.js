import { useState } from 'react';
import './LoveJar.css';

const LoveJar = () => {
    const [reason, setReason] = useState("Click button to see a reason!");
    const [lastIndex, setLastIndex] = useState(-1);

    const reasons = [
        "You're the best restaurant buddy",
        "Your work ethic inspires me",
        "I love watching kdramas with you",
        "Couple cosplaying with you is fun",
        "You pulled Celebi Ex for me",
        "You bake Tiramisu really well",
        "Your YouTube videos are entertaining",
        "Your feet are always cold",
        "You are a strong, dependable person",
        "You give the best hugs",
        "You make my heart full",
        "People mistake us for siblings xD",
        "We look alike",
        "You remind me of purple tulips",
        "You are passionate about Dental Hygiene",
        "You always comment on my TikToks and Instagram posts",
        "You have an eye for aesthetics",
        "We stayed up talking all night",
        "We reached 90% Spotify Music Taste",
        "I love your music taste",
        "We always have coincidences",
        "Your favorite Pokemon is Piplup",
        "Your editing skills are top-notch",
        "I love how passionate you are about tennis and piano",
        "Your smile is beautiful",
        "I admire your creativity",
        "I love playing Pokemon and Stardew Valley with you",
        "You always make me laugh"
    ];

    const showReason = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * reasons.length);
        } while (randomIndex === lastIndex);

        setReason(reasons[randomIndex]);
        setLastIndex(randomIndex);
    };

    return (
        <div className='jar-container'>
            <div class="jar">
                <div class="lid"></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <button
                    onClick={showReason}
                    style={{
                        background: 'linear-gradient(117.96deg, #5131e7, #6f58da)',
                        border: 'none',
                        color: 'white',
                        padding: '10px 20px',
                        marginTop: '20px',
                        fontSize: '16px',
                        borderRadius: '10px',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => e.target.style.background = 'linear-gradient(117.96deg, #6f58da, #5131e7)'}
                    onMouseOut={(e) => e.target.style.background = 'linear-gradient(117.96deg, #5131e7, #6f58da)'}
                >
                    Get a Reason
                </button>
                <div style={{ fontSize: '20px', color: 'white', marginTop: '20px' }}>{reason}</div>

            </div>

        </div>

    );
};

export default LoveJar;