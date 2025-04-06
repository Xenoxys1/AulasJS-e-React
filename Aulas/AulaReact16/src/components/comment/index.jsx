import "./comment.css";
import { useState } from "react";
import { Avatar } from "../avatar/index.jsx";
import { ThumbsUp } from "lucide-react";

export function Comments({ icon, name, time, text }) {
  const [applause, setApplause] = useState(0);

  return (
    <section className="comment">
      <Avatar icon={icon} />
      <div className="commentBox">
        <div className="nameAndTime">
          <h1>{name}</h1>
          <h2>{time}</h2>
        </div>
        <p>{text}</p>
        <div className="applause">
          <ThumbsUp />
          <button
            className="changeQtd"
            onClick={() => setApplause(applause + 1)}
          >
            Aplaudir
          </button>
          <p>{applause}</p>
        </div>
      </div>
    </section>
  );
}
