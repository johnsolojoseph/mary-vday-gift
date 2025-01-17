import './Header.css';

const Header = ({ color, text }) => {
    return (
        <header className="header" style={{ color: color }}>
            <h1>{text}</h1>
        </header>
    );
};

export default Header;