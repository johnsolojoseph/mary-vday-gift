import './CardContainer.css';
import Card from './Card';

import minigolfPic from '../assets/cropped_minigolf.png'
import tahoePic from '../assets/cropped_tahoe.png'
import animePic from '../assets/cropped_cosplay.png'
import multnomahPic from '../assets/cropped_multnomah.png'

const CardContainer = () => {
    // 300x200
    const cards = [
        {
            image: minigolfPic,
            caption: 'Our First Date at Golfland',
            description: 'Do you remember how awkward we were when we first met? I\'m glad we\'ve gotten closer since then.'
        },
        {
            image: multnomahPic,
            caption: 'Hiking Multnomah Falls',
            description: 'I know you\'ve taken so many people here. But I\'ve always wanted to visit this place with you. Thank you for taking me.'
        },
        {
            image: animePic,
            caption: 'Cosplaying as Himmel and Frieren at Kumoricon',
            description: 'My first couple cosplay and so many people asked us for pics!'
        },
        {
            image: tahoePic,
            caption: 'Skiing and Snowboarding at Lake Tahoe',
            description: 'I don\'t know if I fell more during skiing or for you.'
        }
    ];



    return (<div className="card-container">
        {cards.map((card, index) => (
            <Card
                key={index}
                image={card.image}
                caption={card.caption}
                description={card.description}
            />
        ))}
    </div>);
}

export default CardContainer;