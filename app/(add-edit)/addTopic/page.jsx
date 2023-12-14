"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopicPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("제목 과 내용이 필요합니다.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
        router.refresh("/");
      } else {
        throw new Error("등록 실패");
      }
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
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="제목"
          className="input input-bordered border-green-500 w-full text-lg"
        />

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          className="textarea textarea-bordered h-48 border-green-500 text-lg"
          placeholder="내용"
        ></textarea>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-500 text-xl text-white w-fit py-2 px-4"
        >
          추가하기
        </button>
      </form>
    </div>
  );
};

export default AddTopicPage;
