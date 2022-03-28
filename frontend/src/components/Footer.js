import React from "react";

function Footer() {
  const localDate = new Date();
  const currentYear = localDate.getFullYear();
  return (
    <footer>
      <p>
        <span>&copy; Copyright {currentYear} </span>{" "}
        <a className="footer-link" target="blank" href="https://thanachon.me">
          THASUP
        </a>
      </p>
    </footer>
  );
}

export default Footer;
