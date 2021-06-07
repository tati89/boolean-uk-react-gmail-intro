import rateStarButton from "../assets/icons/rate-star-button.png";
import backArrow from "../assets/icons/back-arrow.png";
import rubbishButton from "../assets/icons/rubbish-bin-delete-button.png";

function EmailActionAicons() {
  return (
    <div className="email-action-icons">
      <ul>
        <li>
          <img className="icon" src={backArrow} alt="reply button" />
        </li>
        <li>
          <img className="icon" src={rateStarButton} alt="star button" />
        </li>
        <li>
          <img className="icon" src={rubbishButton} alt="delete button" />
        </li>
      </ul>
    </div>
  );
}
export default EmailActionAicons;
