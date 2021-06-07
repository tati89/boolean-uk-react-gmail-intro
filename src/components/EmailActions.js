import ForwardBtn from "./ForwardBtn";
import ReplyBtn from "./ReplyBtn";

import "./EmailActions.css";

function EmailActions() {
  return (
    <section className="email-actions">
      <ReplyBtn />
      <ForwardBtn />
    </section>
  );
}
export default EmailActions;
