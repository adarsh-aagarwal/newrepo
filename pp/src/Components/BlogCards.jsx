import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BlogCards() {
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/posts"); // Make sure backend URL is correct
        console.log(response);
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleCardClick = (post) => {
    localStorage.setItem("selectedBlog", JSON.stringify(post));
    navigate(`/article/${post.id}`);
  };

  return (
    <section className="py-12 px-6 bg-blue-100">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => handleCardClick(post)}
              className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={post.postImg}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm">
                  {post.description || "Click to read more..."}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">No blog posts available.</p>
        )}
      </div>
    </section>
  );
}

export default BlogCards;
