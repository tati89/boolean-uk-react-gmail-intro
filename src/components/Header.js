import HeaderLeftMenu from "./HeaderLeftMenu";
import HeaderSearch from "./HeaderSearch";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <HeaderLeftMenu />
      <HeaderSearch />
    </header>
  );
}

export default Header;
