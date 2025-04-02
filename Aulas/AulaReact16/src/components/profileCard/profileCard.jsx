import "./profileCard.css"
import { Avatar } from "../avatar/avatar.jsx"

export function Profile ({ name, profession, icon }){
    return (
        <div>
            <div className="bg-div"></div>
            <Avatar icon={icon}/>
            <h1>{name}</h1>
            <h2>{profession}</h2>
            <hr />
            <button type="button">Editar seu perfil</button>
        </div>
    );
}