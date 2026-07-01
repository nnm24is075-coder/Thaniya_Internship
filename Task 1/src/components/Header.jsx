
function Header() {
  return (
    <header className="header">
      <div className="logo">IF</div>

      <div className="right-section">
        <input type="text" placeholder="Search..." />
        <div className="profile"></div>
      </div>
    </header>
  );
}

export default Header;