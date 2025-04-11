import { Trash } from "@phosphor-icons/react";
import "./styles.css";

interface TaskProps {
  id: number;
  description: string;
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
}

export function Task({ id, description, onDelete, onCheck }: TaskProps) {
  
  return (
    <div className="task-container">
      <p className="task-description">{description}</p>
      <button
        type="button"
        className="delete-btn"
        aria-label="Excluir tarefa"
        title="Exlcuir"
        onClick={() => onDelete(id)}
      >
        <Trash size={24} />
      </button>

      <input
        type="checkbox"
        className="conclude-btn"
        aria-label="Concluir tarefa"
        title="Concluir"
        onClick={() => onCheck(id)}
      />
    </div>
  );
}
