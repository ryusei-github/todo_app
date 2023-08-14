import React from "react";
import Todo from "./Todo";
import { Task } from "../types";

interface TodoListProps {
    todos: Task[];
}

// 追加したタスクをmap関数で周して表示
const TodoList = ({ todos }: TodoListProps) => {
    return (
        <ul className="space-y-3">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
