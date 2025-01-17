import './SubHeader.css';

const SubHeader = ({ color, text }) => {
    return (
        <div className="sub-header" style={{ color: color }}>
            <h2>{text}</h2>
        </div>
    );
};

export default SubHeader;