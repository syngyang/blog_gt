import React from "react";
import RemoveBtn from "./RemoveBtn";
import EditBtn from "./EditBtn";
import { inter } from "../../libs/fonts";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("데이터 가져오기가 실패했어요");
    }
    return res.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

const TopicsList = async () => {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div key={t._id} className="flex w-full justify-between border border-slate-300 p-4 my-2">
          <div>
            <h2 className={`${inter.className} text-2xl font-bold`}>
              {t.title}
            </h2>
            <div>{t.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={t._id}/>
            <EditBtn id={t._id}/>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
