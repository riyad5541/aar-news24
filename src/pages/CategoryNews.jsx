import React from "react";
import { useLoaderData } from "react-router-dom";
import Newscard from "../components/Newscard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  // console.log(data)
  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <p className="text-gray-400 text-sm">
        {news.length} News Found On This Category
      </p>
      <div>
        {news.map((singleNews) => (
          <Newscard key={singleNews._id} news={singleNews}></Newscard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
