"use client";

import React from "react";
import { Task } from "../types";
import { useState, useRef, useEffect } from "react";
import { deleteTodo, editTodo } from "../api";

interface TodoProps {
    todo: Task;
}
const Todo = ({ todo }: TodoProps) => {
    // タスクの編集状態
    const [isEditing, setIsEditing] = useState(false);

    // 現在編集中のタスクのタイトル
    const [editedTaskTitle, setEditTaskTitle] = useState(todo.text);

    // Edit押下でポインタを設定
    const ref = useRef<HTMLInputElement>(null);
    // 空の場合もあるのでオプショナルチェーンつけてます
    useEffect(() => {
        if (isEditing) ref.current?.focus();
    });

    // 編集状態にする
    const handleEdit = async () => {
        setIsEditing(true);
    };

    // Saveした場合PUTメソッドで編集の反映・編集状態をオフにする
    const handleSave = async () => {
        await editTodo(todo.id, editedTaskTitle);
        setIsEditing(false);
    };

    // Delete押下した際のapi呼び出し
    const handleDelete = async () => {
        await deleteTodo(todo.id);
    };

    return (
        <li
            key={todo.id}
            className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow-lg hover:transform duration-500 hover:-translate-y-1"
        >
            {isEditing ? (
                <input
                    ref={ref}
                    type="text"
                    className="mr-2 py-1 px-2 rounded border-gray-400 border"
                    value={editedTaskTitle}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEditTaskTitle(e.target.value)
                    }
                />
            ) : (
                <span>{todo.text}</span>
            )}
            <div>
                {isEditing ? (
                    <button className="text-blue-500 mr-3" onClick={handleSave}>
                        Save
                    </button>
                ) : (
                    <button
                        className="text-green-500 mr-3"
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                )}
                <button className="text-red-500" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default Todo;
