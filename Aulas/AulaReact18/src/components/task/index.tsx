import { Trash } from "@phosphor-icons/react";
import "./task.css";

interface TaskType {
  description: string;
}

export function Task({ description }: TaskType) {
  return (
    <div className="task-container">
      <p className="task-desc">{description}</p>
      <button type="button" className="delete-btn">
        <Trash size={24} />
      </button>
    </div>
  );
}
