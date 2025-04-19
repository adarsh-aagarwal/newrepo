


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../Context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import {
//   PhotoIcon,
//   BookmarkIcon,
//   ArrowRightOnRectangleIcon,
//   PowerIcon
// } from "@heroicons/react/24/outline";

// const ProfilePage = () => {
//   const { token, logout } = useAuth();
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState("");
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();
//   const [selectedTab, setSelectedTab] = useState("posts");

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/api/users/me", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log(res);

//         setUser(res.data);
//         setPosts(res.data.posts);
//       } catch (err) {
//         setError("Failed to load user data.");
//         console.error(err);
//       }
//     };

//     if (token) {
//       fetchUserData();
//     } else {
//       setUser(null);
//     }
//   }, [token]);

//   const handleLogout = () => {
//     logout();
//     navigate("/signin");
//   };

//   return (
//     <div className="min-h-screen w-full px-4 py-10 relative">
//       {/* Logout Icon Button at Top Left */}
//       <button
//         onClick={handleLogout}
//         className="absolute top-10 right-60 text-gray-600 hover:text-red-500 transition"
//         title="Logout"
//       >
//         <ArrowRightOnRectangleIcon className="h-7 w-7" />
//       </button>

//       <div className="max-w-4xl mx-auto w-full">
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         {user ? (
//           <>
//             {/* Profile Info */}
//             <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
//               <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center text-5xl font-bold text-blue-500">
//                 {user.name ? user.name.charAt(0).toUpperCase() : "U"}
//               </div>
//               <div className="text-center sm:text-left">
//                 <h3 className="text-2xl font-semibold text-gray-800">{user.name}</h3>
//                 <p className="text-gray-500">{user.email}</p>
//                 {user.bio ? <p></p> : <p>Add bio</p>}
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="flex justify-center gap-8 border-t border-gray-300 pt-4 mb-8">
//               <button
//                 onClick={() => setSelectedTab("posts")}
//                 className={`flex items-center gap-2 px-4 py-2 font-semibold ${selectedTab === "posts"
//                     ? "text-blue-600 border-b-2 border-blue-600"
//                     : "text-gray-500"
//                   }`}
//               >
//                 <PhotoIcon className="h-5 w-5" />
//                 Posts
//               </button>
//               <button
//                 onClick={() => setSelectedTab("saved")}
//                 className={`flex items-center gap-2 px-4 py-2 font-semibold ${selectedTab === "saved"
//                     ? "text-blue-600 border-b-2 border-blue-600"
//                     : "text-gray-500"
//                   }`}
//               >
//                 <BookmarkIcon className="h-5 w-5" />
//                 Saved
//               </button>
//             </div>

//             {/* Posts */}
//             {selectedTab === "posts" && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {posts.length > 0 ? (
//                   posts.map((post) => (
//                     <div
//                       key={post.id}
//                       className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
//                     >
//                       <img
//                         src={post.postImg}
//                         alt={post.title}
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="p-4">
//                         <h4 className="text-lg font-semibold">{post.title}</h4>
//                         <p className="text-sm text-gray-500">{post.description}</p>
//                         <button
//                           onClick={() => {
//                             localStorage.setItem("selectedBlog", JSON.stringify(post));
//                             navigate(`/article/${post.id}`);
//                           }}
//                           className="text-blue-500 text-sm mt-2 inline-block hover:underline"
//                         >
//                           View Content
//                         </button>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-center text-gray-500 w-full">No posts yet.</p>
//                 )}
//               </div>
//             )}

//             {/* Saved (Empty for now) */}
//             {selectedTab === "saved" && (
//               <div className="text-center text-gray-500">No saved posts yet.</div>
//             )}
//           </>
//         ) : (
//           <p className="text-center text-gray-600">Login to see your profile details</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  PhotoIcon,
  BookmarkIcon,
  ArrowRightOnRectangleIcon,
  PowerIcon
  
} from "@heroicons/react/24/outline";

const ProfilePage = () => {
  const { token, logout } = useAuth();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("posts");

  console.log(token);
  
  const handleCardClick = (post) => {
    localStorage.setItem("selectedBlog", JSON.stringify(post));
    navigate(`/article/${post.id}`);
  };
  
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);

        setUser(res.data);
        setPosts(res.data.posts);
      } catch (err) {
        setError("Failed to load user data.");
        console.error(err);
      }
    };

    if (token) {
      fetchUserData();
    } else {
      setUser(null);
    }
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <div className="min-h-screen w-full px-4 py-10 relative">
      {/* Logout Icon Button at Top Left */}
      <button
        onClick={handleLogout}
        className="absolute top-10 right-60 text-gray-600 hover:text-red-500 transition"
        title="Logout"
      >
        <ArrowRightOnRectangleIcon className="h-7 w-7" />
      </button>

      <div className="max-w-4xl mx-auto w-full">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {user ? (
          <>
            {/* Profile Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center text-5xl font-bold text-blue-500">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold text-gray-800">{user.name}</h3>
                <p className="text-gray-500">{user.email}</p>
                {user.bio ? <p></p> : <p>Add bio</p>}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-8 border-t border-gray-300 pt-4 mb-8">
              <button
                onClick={() => setSelectedTab("posts")}
                className={`flex items-center gap-2 px-4 py-2 font-semibold ${selectedTab === "posts"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                  }`}
              >
                <PhotoIcon className="h-5 w-5" />
                Posts
              </button>
              <button
                onClick={() => setSelectedTab("saved")}
                className={`flex items-center gap-2 px-4 py-2 font-semibold ${selectedTab === "saved"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                  }`}
              >
                <BookmarkIcon className="h-5 w-5" />
                Saved
              </button>
            </div>

            {/* Posts */}
            {selectedTab === "posts" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.length > 0 ? (
                 posts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => {
                      localStorage.setItem("selectedBlog", JSON.stringify(post));
                      navigate(`/article/${post.id}`);
                    }}
                    className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
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
                  </div>
                ))
                
                ) : (
                  <p className="text-center text-gray-500 w-full">No posts yet.</p>
                )}
              </div>
            )}

            {/* Saved (Empty for now) */}
            {selectedTab === "saved" && (
              <div className="text-center text-gray-500">No saved posts yet.</div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-600">Login to see your profile details</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

