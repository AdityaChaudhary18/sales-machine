import Link from "next/Link";
import navStyles from "../styles/Navbar.module.scss";
import Image from "next/image";
import logo from "../images/logo.png";
import profile from "../images/profile.jpg";
import logout from "../images/logout.png";
import share from "../images/share.png";
const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.logo}>
        <Image src={logo} alt="image" />
        <h3>Sales Machine</h3>
      </div>
      <div className={navStyles.searchBar}>
        <input type="text" placeholder="Search.." />
      </div>
      <div className={navStyles.icons}>
        <Image src={profile} alt="image" className={navStyles.profile} />
        <Image src={share} alt="image" />
        <Image src={logout} alt="image" />
      </div>
    </nav>
  );
};

export default Navbar;
