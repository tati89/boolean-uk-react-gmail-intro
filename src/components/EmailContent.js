import EmailContentTitle from "./EmailContentTitle";
import EmailContentHeader from "./EmailContentHeader";
import EmailBody from "./EmailBody";
import EmailActions from "./EmailActions";

import "./EmailContent.css";

function EmailContent() {
  return (
    <article className="email-content">
      <EmailContentTitle />
      <EmailContentHeader />
      <EmailBody />
      <EmailActions />
    </article>
  );
}

export default EmailContent;
