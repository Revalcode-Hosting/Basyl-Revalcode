import { HashLink } from "react-router-hash-link";
import Logo from "../resources/Basyl_logo.png";

function NavElement(props) {
  return (
    <HashLink className="nav-hash" to={props.to} smooth>
      <li className="nav-item">{props.name}</li>
    </HashLink>
  );
}

function Navbar() {
  return (
    <header className="align-middle">
      <div className="logo">
        <img alt="logo" className="logo-navbar" src={Logo} />
      </div>
      <nav className="menu">
        <ul className="menu-item">
          <NavElement to="#home" name="Home" />
          <NavElement to="#solutions" name="Solutions" />
          <NavElement to="#aboutus" name="About Us" />
          <NavElement to="#services" name="Services" />
          <NavElement to="#contacts" name="Contacts" />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
