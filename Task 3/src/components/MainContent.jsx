import React from "react";

function MainContent({ tasks }) {
  return (
    <main style={{ marginTop: "20px" }}>
      {tasks.length === 0 ? (
        <p>Your tasks will appear here...</p>
      ) : (
        <ul style={{ paddingLeft: "20px" }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{ margin: "10px 0", fontSize: "18px" }}
            >
              {task.title}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default MainContent;