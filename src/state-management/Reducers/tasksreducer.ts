export interface Task {
  id: number;
  title: string;
}
interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;
const tasksReducer = (task: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...task];
    case "DELETE":
      return task.filter((t) => t.id !== action.taskId);
  }
};

export default tasksReducer;
