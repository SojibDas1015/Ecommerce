import React from "react";
import { useLoaderData } from "react-router";
import RecepieCard from "./RecepieCard";
import { CiGrid41 } from "react-icons/ci";
import { RiSortAlphabetDesc } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";

export default function Recepie() {
  const blog = useLoaderData();
  console.log(blog);
  return (
    <div className="w-11/12 mx-auto max-w-[1200px]">
      <div className="flex justify-between py-8">
        <h1 className="text-4xl font-bold">Recips Article</h1>
        <div className="flex items-center gap-2">
          <button className="hidden lg:flex items-center gap-1 border border-1 border-gray-300 p-2 rounded-md">
            <CiGrid41 />
            Show: {blog.length} <IoChevronDownSharp />
          </button>
          <button className="hidden lg:flex items-center gap-1 border border-1 border-gray-300 p-2 rounded-md">
            <RiSortAlphabetDesc  className="font-medium"/>
            Sort: Featured {blog.length} <IoChevronDownSharp />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center mb-8">
        {blog.map((data) => (
          <RecepieCard key={data.id} data={data}></RecepieCard>
        ))}
      </div>
    </div>
  );
}
