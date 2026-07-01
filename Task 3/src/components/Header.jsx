import React from "react";

function Header({ openModal }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>IssueFlow Dashboard</h1>

      <button
        onClick={openModal}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        + New Task
      </button>
    </header>
  );
}

export default Header;