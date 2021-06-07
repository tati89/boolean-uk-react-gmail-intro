import EmailInfo from "./EmailInfo";
import DateInfo from "./DateInfo";
import EmailActionAicons from "./EmailActionAicons";
import Avatar from "./Avatar";

function EmailContentHeader() {
  return (
    <header className="email-content--header">
      <Avatar />
      <EmailInfo />
      <DateInfo />
      <EmailActionAicons />
    </header>
  );
}

export default EmailContentHeader;
