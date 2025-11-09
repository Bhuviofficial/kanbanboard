import React from "react";
import "../index.css";

const CardModal = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default CardModal;
