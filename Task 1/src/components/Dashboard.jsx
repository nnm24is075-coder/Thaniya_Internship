
function Dashboard() {
  return (
    <div className="dashboard">
      <h1>IssueFlow Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Total Issues</h3>
          <p>24</p>
        </div>

        <div className="card">
          <h3>Open Issues</h3>
          <p>10</p>
        </div>

        <div className="card">
          <h3>Resolved</h3>
          <p>14</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;