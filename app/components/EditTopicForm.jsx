"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error("수정 실패");
      }
     
      router.push("/");
      router.refresh()

    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-full max-w-[600px] mx-2"
      >
        {/* daisy UI- input textarea */}
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          type="text"
          placeholder="Title"
          className="input input-bordered border-violet-500 w-full"
        />

        <textarea
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="textarea textarea-bordered h-48 border-violet-500"
          placeholder="Description"
        ></textarea>

        <button
          type="submit"
          className="bg-violet-600 hover:bg-violet-500 text-xl text-white w-fit py-2 px-4"
        >
          수정하기
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
