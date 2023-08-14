import { Task } from "./types";

// 全てのタスクを取得するapi
export const getAllTodos = async (): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/tasks`, {
        cache: "no-store", //SSR設定
    });
    const todos = res.json();
    return todos;
};

// 新しいタスクの追加api
export const addTodo = async (todo: Task): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });
    const newTodo = res.json();
    return newTodo;
};

// 既存のタスクの編集api
export const editTodo = async (id: string, newText: string): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newText }),
    });
    const newTodo = res.json();
    return newTodo;
};

// 既存のタスクの削除api
export const deleteTodo = async (id: string): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const deleteTodo = res.json();
    return deleteTodo;
};
