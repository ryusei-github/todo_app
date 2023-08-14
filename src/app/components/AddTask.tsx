"use client";

import React from "react";
import { FormEvent, useState, ChangeEvent } from "react";
import { addTodo } from "../api";
import { v4 as uuidv4 } from "uuid";

// タスクのタイトルを管理するコンポーネント
const AddTask = () => {
    // タスク追加時の状態は空
    const [taskTitle, setTaskTitle] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // idはランダムなstringを入れ、textはtaskTitleを入れる
        await addTodo({ id: uuidv4(), text: taskTitle });
        setTaskTitle("");
    };
    return (
        <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
            <input
                type="text"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400 shadow-lg"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setTaskTitle(e.target.value)
                }
                value={taskTitle}
            />
            <button className="shadow-lg w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200">
                Add Task
            </button>
        </form>
    );
};

export default AddTask;
