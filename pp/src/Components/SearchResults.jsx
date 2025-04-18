import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("searchResults");
    if (stored) {
      setResults(JSON.parse(stored));
    }
   
  }, []);

  const handleCardClick = (post) => {
    localStorage.setItem("selectedBlog", JSON.stringify(post));
    navigate(`/article/${post.id}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      {results.length > 0 ? (
        results.map(post => (
          <div key={post.id} onClick={() => handleCardClick(post)} className="cursor-pointer p-4 shadow mb-4 bg-white rounded">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.description}</p>
            <div className="w-full md:w-60 h-55 rounded-lg overflow-hidden mr-2">
                    <img
                      src={post.postImg}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
