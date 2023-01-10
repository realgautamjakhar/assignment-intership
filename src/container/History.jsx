import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import TimeAgo from "react-timeago";

const History = () => {
  const history = useSelector((state) => state.history.value);

  return (
    <div className="px-4 grid gap-4 overflow-y-scroll">
      <p className="text-2xl font-medium leading-6 text-black pb-4">History</p>
      {history?.map((card) => {
        return (
          <div className="relative h-32 px-6 py-4 border-accent border-2 gap-2 duration-300 ease-in-out hover:shadow-accent cursor-pointer flex flex-col justify-center font-bold rounded-lg">
            {card.name}
            <a
              className="text-accent  font-semibold"
              href={card.link}
              target="_blank"
            >
              Link
            </a>
            <TimeAgo date={card.watchedAt} />
          </div>
        );
      })}
    </div>
  );
};

export default History;
