import Link from "next/link";
import React from "react";


function Footer() {

  return (
    <footer>
      <Link
        href="https://github.com/sanch1t"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Designed and Built by Sanchit.</span>
        
      </Link>
    </footer>
  );
}

export default Footer;
