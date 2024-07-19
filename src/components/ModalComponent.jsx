import React from "react";
import Modal from "react-modal";
import "../App.css";

const ModalComponent = ({ isOpen, onRequestClose, selectedPages }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Selected Pages"
      className={`modal ${isOpen ? "modal-open" : ""}`}
      overlayClassName={`modal-overlay ${isOpen ? "modal-overlay-open" : ""}`}
    >
      <h2>Selected Pages</h2>
      <ul>
        {selectedPages.length > 0 ? (
          selectedPages.map((page, index) => <li key={index}>{page}</li>)
        ) : (
          <li>No pages selected</li>
        )}
      </ul>
      <button onClick={onRequestClose} className="button">
        Close
      </button>
    </Modal>
  );
};

export default ModalComponent;
