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
      {topics.sort((a, b) => a.title.localeCompare(b.title)).map((t) => (
        <div key={t._id} className="flex flex-col w-full justify-between border border-slate-300 p-4 my-2">
          <div className="flex justify-between pb-3">
            <h2 className={`${inter.className} text-2xl font-bold`}>
              {t.title}
            </h2>
            <div className="flex gap-2">
              <RemoveBtn id={t._id}/>
              <EditBtn id={t._id}/>
            </div>
          </div>
          <div>{t.description}</div>
          <div className="flex flex-end pt-3 justify-end text-blue-400">{t.updatedAt.slice(0,16)}</div>
          
        </div>
      ))}
    </>
  );
};

export default TopicsList;
