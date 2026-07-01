import React, { useState } from "react";

function Dashboard() {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store tasks
  const [tasks, setTasks] = useState([]);

  // State for input field
  const [taskTitle, setTaskTitle] = useState("");

  // Function to create a task
  const handleCreateTask = () => {
    if (!taskTitle.trim()) return; // Prevent empty tasks

    // Add new task
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: taskTitle,
      },
    ]);

    // Reset and close modal
    setTaskTitle("");
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>IssueFlow Dashboard</h1>

        <button
          onClick={() => setIsModalOpen(true)}
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

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              width: "300px",
            }}
          >
            <h2>Create New Task</h2>

            <input
              type="text"
              placeholder="Task title..."
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                margin: "15px 0",
                boxSizing: "border-box",
              }}
            />

            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setTaskTitle("");
                }}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>

              <button
                onClick={handleCreateTask}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  background: "blue",
                  color: "white",
                  border: "none",
                }}
              >
                Save Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;