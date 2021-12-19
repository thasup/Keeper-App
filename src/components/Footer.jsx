import React from "react";

function Footer() {
    const localDate = new Date();
    const currentYear = localDate.getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    );
};

export default Footer;