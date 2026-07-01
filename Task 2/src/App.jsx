import React from "react";

const issueData = [
  { id: 1, title: "Initial Vite App", priority: "High", status: "Done" },
  { id: 2, title: "Build Sidebar Component", priority: "Medium", status: "In Progress" },
  { id: 3, title: "Deploy to Vercel", priority: "Low", status: "Pending" }
];

function TaskCard({ title, priority, status }) {
  return (
    <div
      className="task-card"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>Priority: {priority}</p>
      <p>Status: {status}</p>
    </div>
  );
}

function App() {
  return (
    <div
      className="dashboard"
      style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      <h2>IssueFlow Dashboard</h2>

      {issueData.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          priority={task.priority}
          status={task.status}
        />
      ))}
    </div>
  );
}

export default App;