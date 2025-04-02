import "./postCard.css";
import { Avatar } from "../avatar/avatar.jsx";

export function PostCard({ name, profession, icon, textbox, time }) {
  return (
    <>
    <section className="posts">
      <div className="postHeader">
        <Avatar icon={icon} />
        <div className="nameAndJob">
          <h1>{name}</h1>
          <h2>{profession}</h2>
        </div>
        <p>Publicado há {time}</p>
      </div>
      <p>{textbox}</p>
      <hr />
      <div className="postComment">
        <h1>Deixe seu feedback</h1>
      </div>
    </section>
    </>
  );
}
