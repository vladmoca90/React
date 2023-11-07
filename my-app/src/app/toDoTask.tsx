import React from "react";
import { ITask } from "./interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

<ul className="list-main">
<li className="list-item"></li>
</ul>

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;