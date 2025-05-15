import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#F9F1FF", // Light violet background
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif"
        },
        title: {
            fontSize: "2.5rem",
            color: "#9B4D96", // Violet color for the title
            marginBottom: "20px"
        },
        message: {
            fontSize: "1.2rem",
            color: "#D24D57", // Pinkish color for the message text
            marginBottom: "30px"
        },
        button: {
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#9B4D96", // Violet color for the button
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 0.3s ease",
            textDecoration: "none"
        },
        buttonHover: {
            backgroundColor: "#7B3071" // Darker violet shade for hover effect
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us.</p>
            <a
                href="/"
                style={styles.button}
                onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
                Go to Home
            </a>
        </div>
    );
}