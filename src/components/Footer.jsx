import React from "react";


function Footer () {
    const copyrightSymbolUnicode = "\u00a9";
    const date = new Date();
    const year = date.getFullYear();
    return (
    <footer>
        <p> Copyright {copyrightSymbolUnicode} {year}</p>
    </footer>);
}

export default Footer;