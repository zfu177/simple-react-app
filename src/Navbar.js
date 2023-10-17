export default function Navbar({ color }) {
  const navClass = `nav-wrapper ${color}`;
  return (
    <nav>
      <div className={navClass}>
        <a href="index.html" className="brand-logo center">
          My Simple React App
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
