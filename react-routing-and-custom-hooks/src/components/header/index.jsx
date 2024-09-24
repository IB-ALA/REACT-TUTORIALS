function Header() {
  return (
    <header style={{ border: "2px solid black", marginTop: "15px" }}>
      <div>HomePage</div>
      <ul style={{ display: "flex", listStyle: "none", gap: "25px" }}>
        <li>Recipes</li>
        <li>Comments</li>
      </ul>
    </header>
  );
}

export default Header;
