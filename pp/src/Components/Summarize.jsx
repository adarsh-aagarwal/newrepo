import React from "react";
import { useLocation } from "react-router-dom";

const Summarize = () => {
  const { state } = useLocation();
  const { summary, title, postImg } = state || {};

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Summary for: {title}</h1>
      {postImg && <img src={postImg} alt={title} className="w-full rounded mb-4" />}
      <p className="text-gray-800 whitespace-pre-wrap">{summary}</p>
    </div>
  );
};

export default Summarize;