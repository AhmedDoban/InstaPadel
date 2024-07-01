import Image from "next/image";
import "./Footer.css";
import Link from "next/link";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <div className="logo">
          <Image src={"/favicon.png"} width={30} height={30} alt="logo" />
          <h1>Instapadel</h1>
        </div>
        <div className="contact">
          <Link href="/">My profile</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">FAQ</Link>
        </div>
        <div className="social">
          <Link href="/">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link href="/">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link href="/">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link href="/">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link href="/">
            <i className="fa-brands fa-youtube"></i>
          </Link>
          <Link href="/">
            <i className="fa-brands fa-github"></i>
          </Link>
        </div>
      </div>
      <div className="copyright">
        <span>Made with by o projects | ©2024</span>
        <span>2024 @ all copyright reserved</span>
      </div>
    </div>
  );
}

export default Footer;
