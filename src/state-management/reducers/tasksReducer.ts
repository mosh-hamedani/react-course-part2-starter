export interface Task {
  id: number;
  title: string;
}

//   So now each task interface has a payload
// In this case the payload is a task object
interface AddTask {
  type: "ADD";
  task: Task;
}
// Here the payload is a task id
interface DeleteTask {
  type: "DELETE";
  taskId: number;
}
// Now I define a type, called TaskAction, which is a union of these interfaces
export type TaskAction = AddTask | DeleteTask;

// As a BP I should annotate this reducer with the return type. So, if I make a mistake the TS compiler will let me know.
const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

export default tasksReducer;
