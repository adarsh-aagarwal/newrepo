



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegEye, FaRegComment } from "react-icons/fa";
import { BookmarkIcon } from "@heroicons/react/24/outline";

function BlogCards() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedPosts, setSavedPosts] = useState([]);
  const navigate = useNavigate();

  const categories = [
    "All", "Food", "Tech", "Travel", "Photography", "Lifestyle",
    "Fitness", "Science", "Education", "Health",
    "Finance", "Gaming", "Culture", "History", "Nature"
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/posts");
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

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
  };

  const handleSavePost = (postId) => {
    setSavedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) =>
          post.description?.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  const timeAgo = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);
    const diff = Math.floor((now - date) / 1000);

    if (diff < 60) return `${diff} second${diff > 1 ? "s" : ""} ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} minute${Math.floor(diff / 60) > 1 ? "s" : ""} ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hour${Math.floor(diff / 3600) > 1 ? "s" : ""} ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} day${Math.floor(diff / 86400) > 1 ? "s" : ""} ago`;

    return date.toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric"
    });
  };

  return (
    <section className="py-8 bg-gray-50 min-h-screen">
      <div className="mx-auto px-4 md:px-12 lg:px-20 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 hidden md:block">
          <div className="bg-white rounded-lg shadow p-4 h-screen overflow-y-auto sticky top-0">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(cat)}
                  className={`cursor-pointer ${
                    selectedCategory === cat ? "text-blue-600 font-semibold" : "text-gray-700"
                  } hover:text-blue-500`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Blog Section */}
        <main className="w-full md:w-[68%]">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">
            {selectedCategory === "All" ? "Latest Blog Posts" : `${selectedCategory} Posts`}
          </h2>

          <div className="space-y-5">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => handleCardClick(post)}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-5 flex flex-col md:flex-row items-start gap-4 cursor-pointer relative"
                >
                  {/* Left: Content */}
                  <div className="flex-1 space-y-1 pr-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <img
                        src={post.author?.profileImg || "https://i.pravatar.cc/30"}
                        alt={post.author?.name || "Author"}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="font-medium text-gray-700">{post.author?.name}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {post.description || "Click to read more..."}
                    </p>
                  </div>

                  {/* Right: Image */}
                  <div className="relative w-full md:w-60 h-55 rounded-lg overflow-hidden mr-2">
                    <img
                      src={post.postImg}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom Left: Time, Views, Comments */}
                  <div className="absolute bottom-3 left-5 flex items-center text-gray-500 text-sm gap-4 bg-white/90 px-3 py-1 rounded-full shadow">
                    <span>{timeAgo(post.createdAt)}</span>
                    <span className="flex items-center gap-1">
                      <FaRegEye /> {post.views || "0"}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegComment /> {post.comments || "0"}
                    </span>
                  </div>

                  {/* Bottom Right: Save Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSavePost(post.id);
                    }}
                    className="absolute bottom-3 right-5 bg-white p-2 rounded-full shadow"
                  >
                    <BookmarkIcon
                      className={`h-5 w-5 ${
                        savedPosts.includes(post.id) ? "text-blue-600" : "text-gray-800"
                      }`}
                    />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center">No blog posts available.</p>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}

export default BlogCards;
//working !!!!!!!!!!!!!!