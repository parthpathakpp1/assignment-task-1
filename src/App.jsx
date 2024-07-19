import React, { useState } from "react";
import ModalComponent from "./components/ModalComponent";
import "./App.css";

const AllPagesComponent = () => {
  const [isAllPagesChecked, setIsAllPagesChecked] = useState(false);
  const [pageChecks, setPageChecks] = useState({
    "Page 1": false,
    "Page 2": false,
    "Page 3": false,
    "Page 4": false,
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAllPagesChange = (event) => {
    const isChecked = event.target.checked;
    setIsAllPagesChecked(isChecked);
    setPageChecks({
      "Page 1": isChecked,
      "Page 2": isChecked,
      "Page 3": isChecked,
      "Page 4": isChecked,
    });
  };

  const handlePageChange = (page, event) => {
    const isChecked = event.target.checked;
    setPageChecks((prevChecks) => {
      const newChecks = { ...prevChecks, [page]: isChecked };
      const allChecked = Object.values(newChecks).every(Boolean);
      setIsAllPagesChecked(allChecked);
      return newChecks;
    });
  };

  const handleDoneClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const selectedPages = Object.keys(pageChecks).filter(
    (page) => pageChecks[page]
  );

  return (
    <div className="container">
      <div className="header">
        <span className="header-text">All Pages</span>
        <input
          type="checkbox"
          className="checkbox"
          checked={isAllPagesChecked}
          onChange={handleAllPagesChange}
        />
      </div>

      <hr className="underline" />

      {["Page 1", "Page 2", "Page 3", "Page 4"].map((page, index) => (
        <div key={index} className="item">
          <span>{page}</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={pageChecks[page]}
            onChange={(e) => handlePageChange(page, e)}
          />
        </div>
      ))}

      <hr className="underline" />

      <button className="button" onClick={handleDoneClick}>
        Done
      </button>

      <ModalComponent
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedPages={selectedPages}
      />
    </div>
  );
};

export default AllPagesComponent;
