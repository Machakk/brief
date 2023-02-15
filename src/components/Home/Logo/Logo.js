import "./Logo.css";
import zebra from "../../../assets/images/zebra.jpg";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={zebra} alt="logo" />
    </div>
  );
};

export default Logo;
