import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const goToDetails = () => navigate(`/product/${product.id}`);

  const cardStyle = {
    width: "230px",
    backgroundColor: "#2c2a6d", // Deep purple background
    color: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    margin: "20px",
    fontFamily: "'Roboto', sans-serif",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const clickableStyle = {
    cursor: "pointer",
    padding: "15px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    transition: "transform 0.3s ease",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0",
    color: "#fff",
  };

  const priceStyle = {
    color: "#ff4d4d", // Neon red for price
    fontSize: "18px",
    marginBottom: "8px",
  };

  const detailsText = {
    color: "#bbb",
    fontSize: "14px",
    marginTop: "8px",
    fontWeight: "normal",
  };

  const buttonStyle = {
    backgroundColor: "#4d79ff", // Neon blue for button
    color: "#fff",
    border: "none",
    padding: "12px 0",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(77, 121, 255, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
      }}
    >
      <div style={clickableStyle} onClick={goToDetails}>
        <img src={product.image} alt={product.name} style={imageStyle} />
        <h3 style={titleStyle}>{product.name}</h3>
        <p style={priceStyle}>₹{product.price.toFixed(2)}</p>
        <p style={detailsText}>View Details</p>
      </div>
      <button
        style={buttonStyle}
        onClick={() => addToCart(product)}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#3385ff"; // Darker neon blue on hover
          e.target.style.boxShadow = "0 0 15px rgba(77, 121, 255, 0.7)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#4d79ff"; // Original neon blue
          e.target.style.boxShadow = "none";
        }}
      >
        🛒 Add to Cart
      </button>
    </div>
  );
}

