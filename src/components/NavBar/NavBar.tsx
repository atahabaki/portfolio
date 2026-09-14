import "./NavBar.css";

const NavBar = () => {
  return (
    <nav id="navbar">
      <ul>
        {[
          { label: "About", to: "#about" },
          { label: "Projects", to: "#projects" },
          { label: "Experience", to: "#experience" },
          { label: "Art", to: "#art" },
          { label: "Blog", to: "" },
          { label: "Contact", to: "#contact" },
        ].map(({ label, to }) => (
          <li key={label}>
            <a href={to}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
