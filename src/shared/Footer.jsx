import Logo from "/src/assets/logoWhite.svg";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-20 bg-piccolo text-white">
        <aside>
          <img src={Logo} alt="logoWhite" />
          <p className="max-w-72">
            It is a long established fact that a reader will be distracted by
            the readable.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Advertisement</a>
          <a className="link link-hover">Trainers</a>
          <a className="link link-hover">Blogs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Helpline</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">SOCIAL</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Twitter</a>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-jiren text-piccolo text-white">
        <aside>
          <p>Copyright © 2024 - All right reserved by Alex Sarker</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
