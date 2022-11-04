import whiteLogo from "../assets/whiteLogo.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <h3>
        <img src={whiteLogo} alt="logo kasa" className="footer-logo" />
      </h3>
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
