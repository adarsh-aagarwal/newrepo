import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PhotoIcon,
  BookmarkIcon,
  EllipsisVerticalIcon
} from "@heroicons/react/24/outline";

const UserProfile = () => {
  const { token } = useAuth();
  const [posts, setPosts] = useState([]);
  const { state } = useLocation();
  const user = state?.post; // Make sure 'post' exists in state
  const [activeMenuId, setActiveMenuId] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.id || !token) return;

    const fetchUserData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/users/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(res.data.posts); // Assuming the response contains posts under "posts"
        console.log('Fetched Posts:', res.data);
      } catch (err) {
        console.error('Fetch error:', err);
        if (err.response) {
          console.error('Error Response:', err.response.data);
        }
      }
    };

    fetchUserData();
  }, [user?.id, token]);

  const handleCardClick = (post) => {
    localStorage.setItem("selectedBlog", JSON.stringify(post));
    navigate(`/article/${post.id}`);
  };

  const handleEdit = (postId) => {
    navigate(`/edit-post/${postId}`);
  };

  const openModal = (post) => {
    // Handle delete post logic here (similar to ProfilePage)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen w-full px-4 py-10 relative">
      <div className="max-w-4xl mx-auto w-full">
        {user ? (
          <>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center text-5xl font-bold text-blue-500">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold text-gray-800">{user.name}</h3>
                <p className="text-gray-500">{user.email}</p>
                 {/* Display the number of posts */}
                 <p className="text-lg font-semibold text-gray-800">
                  {posts.length} 
                </p>
                <h3>Posts</h3>
              </div>
            </div>

            <div className="flex justify-center gap-8 border-t border-gray-300 pt-4 mb-8">
              <button
                className="flex items-center gap-2 px-4 py-2 font-semibold text-blue-600 border-b-2 border-blue-600"
              >
                <PhotoIcon className="h-5 w-5" />
                Posts
              </button>
            </div>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => handleCardClick(post)}
                    className="relative cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <img
                      src={post.postImg}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-semibold">{post.title}</h4>
                      <p className="text-sm text-gray-500">{post.description}</p>
                    </div>

                    {/* <button
                      className="absolute top-2 right-2 z-20 p-1 bg-white rounded-full hover:bg-gray-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenuId(post.id);
                      }}
                    >
                      <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
                    </button> */}

                    {activeMenuId === post.id && (
                      <div
                        ref={menuRef}
                        className="absolute right-2 top-10 w-32 bg-white border rounded-md shadow-lg z-30"
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEdit(post.id);
                          }}
                          className="block w-full px-4 py-2 text-sm hover:bg-blue-200 text-left"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(post);
                          }}
                          className="block w-full px-4 py-2 text-sm hover:bg-blue-200 text-left text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 w-full">No posts yet.</p>
            )}
          </>
        ) : (
          <p className="text-center text-gray-600">No Posts</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;


