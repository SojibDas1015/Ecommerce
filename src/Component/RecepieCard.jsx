import React from "react";

export default function RecepieCard({ data }) {
  return (
    <div>
      <div>
        <div>
          <img className="w-full rounded-xl" src={data.image} alt="" />
        </div>
        <div className="text-center w-80 flex justify-center items-center">
          <div >
            <div>
              <p className="text-md text-gray-500">{data.category}</p>
              <h1 className="text-2xl font-bold">{data.title}</h1>
            </div>
            <div className="flex items-center gap-1 justify-center">
              <p className="text-md text-gray-500">{data.date}</p>
              <p className="text-md text-gray-500">{data.views}</p>
              <p className="text-md text-gray-500">{data.readTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
