import "./profileCard.css";
import { Avatar } from "../avatar/index.jsx";
import { PencilLine } from "lucide-react";

export function Profile({ name, profession, icon, banner }) {
  return (
    <div id="profileCard">
      <div className="banner-div">
        <img src={banner} alt="banner" />
      </div>
      <Avatar icon={icon} />
      <h1>{name}</h1>
      <h2>{profession}</h2>
      <hr />
      <button type="button">
        <PencilLine size={24} />
        Editar seu perfil
      </button>
    </div>
  );
}
