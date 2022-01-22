import React from "react";

function Footer() {
    const localDate = new Date();
    const currentYear = localDate.getFullYear();
    return (
        <footer>
            <p>Copyright &copy; thasup {currentYear}</p>
        </footer>
    );
}

export default Footer;
