import "./avatar.css";

export function Avatar({ icon }) {
  return (
    <div className="avatarSquare">
      <div className="avatar-image-container">
        <img src={icon} alt="avatarIcon" />
      </div>
    </div>
  );
}
