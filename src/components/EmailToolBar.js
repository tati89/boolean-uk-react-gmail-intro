import EmailToolBarLeftIcons from "./EmailToolBarLeftIcons";
import EmailToolBarRightSide from "./EmailToolBarRightSide";

import "./EmailToolBar.css";

function EmailToolBar() {
  return (
    <nav className="email-toolbar">
      <EmailToolBarLeftIcons />
      <div className="space"></div>
      <EmailToolBarRightSide />
    </nav>
  );
}

export default EmailToolBar;
