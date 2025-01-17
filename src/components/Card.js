import './Card.css';

const Card = ({ image, caption, description }) => (
    <div className="card">
        <img src={image} alt={caption} />
        <div className="card-caption">{caption}</div>
        <div className="card-description">{description}</div>
    </div>
);

export default Card;