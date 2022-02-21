import logo from "../resources/Basyl_logo_footer.png";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div>
        <img className="logoFooter" src={logo} alt="logo" />
        <p>Revalcode | Copyright © 2022 All rights reserved |</p>
      </div>
    </footer>
  );
};

export default Footer;
