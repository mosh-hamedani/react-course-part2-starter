import APIClient from "./api-client";

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

export default new APIClient<Todo>("/todos");
