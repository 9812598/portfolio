import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Aleksandr Kobelev
        </motion.span>
        <div className="social">
          <a
            href="https://twitter.com/AleksandrKobe10"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./x-logo.png" alt="x-logo Aleksandr Kobelev" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100004523356154"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./facebook.png" alt="facebook Aleksandr Kobelev" />
          </a>
          <a href="https://vk.com/kobelev88" target="_blank" rel="noreferrer">
            <img src="./vk.png" alt="vk Aleksandr Kobelev" />
          </a>
          <a
            href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-k%D0%BE%D0%B1%D0%B5%D0%BB%D0%B5%D0%B2-ab5ba0199/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./linkedin.png" alt="linkedin Aleksandr Kobelev" />
          </a>
          <a href="https://github.com/9812598" target="_blank" rel="noreferrer">
            <img src="/github.png" alt="github Aleksandr Kobelev" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
