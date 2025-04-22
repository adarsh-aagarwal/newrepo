import React from "react";
import { useLocation } from "react-router-dom";

const Summarize = () => {
  const { state } = useLocation();
  const { summary, title, postImg } = state || {};

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Summary for: {title}</h1>
      {postImg && <img src={postImg} alt={title} className="w-full rounded mb-4" />}
      <p className="text-gray-800 whitespace-pre-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus aspernatur nesciunt consequatur, minus necessitatibus cumque possimus quis molestiae facere amet iure obcaecati, dolorem beatae hic ducimus ipsa nulla dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat dolorum asperiores! Modi, impedit minus? Aperiam ullam nostrum sapiente vero quos, animi quae at in sunt optio obcaecati pariatur reiciendis?</p>
    </div>
  );
};

export default Summarize;