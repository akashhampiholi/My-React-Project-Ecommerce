import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#2c003e", // Dark Purple
        color: "#FFFFFF", // White
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
    };

    const logoStyle = {
        fontSize: "24px",
        textDecoration: "none",
        color: "#FFFFFF", // White
        fontWeight: "bold",
        letterSpacing: "1px",
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#FFFFFF", // White
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "#FFB3B3", // Light Red
        padding: "8px 16px",
        borderRadius: "25px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "background-color 0.3s ease",
    };

    const cartLinkHoverStyle = {
        ...cartLinkStyle,
        backgroundColor: "#FF9999", // Slightly darker Light Red
    };

    const cartCountStyle = {
        backgroundColor: "#DAB1DA", // Light Purple
        color: "#2c003e", // Dark Purple
        borderRadius: "12px",
        padding: "2px 8px",
        marginLeft: "4px",
        fontSize: "14px",
        fontWeight: "bold",
    };

    return (
        <header style={headerStyle}>
            <Link to="/" style={logoStyle}>My Shop</Link>
            <Link
                to="/cart"
                style={cartLinkStyle}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = cartLinkHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = cartLinkStyle.backgroundColor}
            >
                🛒 Cart
                {cart.length > 0 && <span style={cartCountStyle}>{cart.length}</span>}
            </Link>
        </header>
    );
}
