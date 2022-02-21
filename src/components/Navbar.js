import { HashLink } from "react-router-hash-link";
import Logo from "../resources/Basyl_logo.png";
import { NavDropdown, NavDropdownItem } from 'react-bootstrap';

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
      <div className="menu big">
        <ul className="menu-item">
          <NavElement to="#home" name="Home" />
          <NavElement to="#solutions" name="Solutions" />
          <NavElement to="#aboutus" name="About Us" />
          <NavElement to="#services" name="Services" />
          <NavElement to="#contacts" name="Contacts" />
        </ul>
      </div>

      <NavDropdown title="Menu" id="nav-dropdown" className="small">

        <NavDropdown.Item eventKey="4.1" className="navSmall">
          <NavElement to="#home" name="Home" className="navsmall"/>
        </NavDropdown.Item>

        <NavDropdown.Item eventKey="4.1">
          <NavElement to="#solutions" name="Solutions" />
        </NavDropdown.Item>

        <NavDropdown.Item eventKey="4.2">
          <NavElement to="#aboutus" name="About Us" />
        </NavDropdown.Item>

        <NavDropdown.Item eventKey="4.3">
          <NavElement to="#services" name="Services"/>
        </NavDropdown.Item>
        
        <NavDropdown.Item eventKey="4.3">
          <NavElement to="#contacts" name="Contacts" />
        </NavDropdown.Item>

      </NavDropdown>

    </header>
  );
}

export default Navbar;
