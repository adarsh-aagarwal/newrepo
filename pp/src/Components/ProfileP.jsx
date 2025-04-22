// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useAuth } from "../Context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import {
//   PhotoIcon,
//   BookmarkIcon,
//   ArrowRightOnRectangleIcon,
//   EllipsisVerticalIcon
// } from "@heroicons/react/24/outline";
// import ConfirmDeleteModal from "./ConfirmDeleteModal ";

// const ProfilePage = () => {
//   const token = useAuth();
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [savedPosts,setSavedPosts]=useState([])
//   const [selectedTab, setSelectedTab] = useState("posts");
//   const [activeMenuId, setActiveMenuId] = useState(null);
//   const menuRef = useRef(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [postToDelete, setPostToDelete] = useState(null);
  
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/api/users/me", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log(token);
//         console.log(res);
        
//         setUser(res.data);
//         setPosts(res.data.posts );
//       } catch (err) {
//         setPosts([]);
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


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const resp = await axios("http://localhost:8080/api/users/saved-posts", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log("saved resp", resp);
        
//         // Extract the post ids from the response and update savedPosts
//         const savedPostIds = resp.data.map(post => post.id);
//         setSavedPosts(resp.data);
        
//       } catch (error) {
//         console.log("error", error);
//         setSavedPosts([]); 
//       }
//     };
  
//     if (token) {
//       fetchData();
//     } else {
//       setSavedPosts([]); 
//     }
//   }, [token]);
  

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setActiveMenuId(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLogout = () => {
//     logout();
//     navigate("/signin");
//   };

//   const handleEdit = (postId) => {
//     navigate(`/edit-post/${postId}`);
//   };

//   const handleCardClick = (post) => {
//     localStorage.setItem("selectedBlog", JSON.stringify(post));
//     navigate(`/article/${post.id}`);
//   };

//   const handleDelete = (id) => {
    
//     axios.
//     delete (`http://localhost:8080/api/posts/${postToDelete.id}`,{
//       headers:{
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((response)=>{
//       setPosts(posts.filter((post)=>post.id!==postToDelete.id))
      
//       setIsModalOpen(false);
//       setPostToDelete(null);
//       console.log("post deleted succesfully");
      
//     })
//     .catch((error)=>{
//       console.log("error in deleting post",error);
      
//     })

   
    
//     // Call API or show confirmation
//   };
//   const openModal = (post) => {
//     setPostToDelete(post);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setPostToDelete(null);
//   };

//   return (
//     <div className="min-h-screen w-full px-4 py-10 relative">
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

//             <div className="flex justify-center gap-8 border-t border-gray-300 pt-4 mb-8">
//               <button
//                 onClick={() => setSelectedTab("posts")}
//                 className={`flex items-center gap-2 px-4 py-2 font-semibold ${selectedTab === "posts"
//                   ? "text-blue-600 border-b-2 border-blue-600"
//                   : "text-gray-500"
//                   }`}
//               >
//                 <PhotoIcon className="h-5 w-5" />
//                 Posts
//               </button>
//               <button
//                 onClick={() => setSelectedTab("saved")}
//                 className={`flex items-center gap-2 px-4 py-2 font-semibold ${selectedTab === "saved"
//                   ? "text-blue-600 border-b-2 border-blue-600"
//                   : "text-gray-500"
//                   }`}
//               >
//                 <BookmarkIcon className="h-5 w-5" />
//                 Saved
//               </button>
//             </div>

//             {selectedTab === "posts" && 
//             (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {posts.length > 0 ? (
//                   posts.map((post) => (
//                     <div
//                       key={post.id}
//                       onClick={() => handleCardClick(post)}
//                       className="relative cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
//                     >
//                       <img
//                         src={post.postImg}
//                         alt={post.title}
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="p-4">
//                         <h4 className="text-lg font-semibold">{post.title}</h4>
//                         <p className="text-sm text-gray-500">{post.description}</p>
//                       </div>

//                       {/* Three Dot Menu */}
//                       <button
//                         className="absolute top-2 right-2 z-20 p-1 bg-white rounded-full hover:bg-gray-100"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setActiveMenuId(post.id);
//                         }}
//                       >
//                         <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
//                       </button>

//                       {activeMenuId === post.id && (
//                         <div
//                           ref={menuRef}
//                           className="absolute right-2 top-10 w-32 bg-white border rounded-md shadow-lg z-30"
//                         >
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleEdit(post.id);
                              
//                             }}
//                             className="block w-full px-4 py-2 text-sm hover:bg-blue-200 text-left"
//                           >
//                             Edit
//                           </button>
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               openModal(post);
//                             }}
//                             className="block w-full px-4 py-2 text-sm hover:bg-blue-200 text-left text-red-600"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-center text-gray-500 w-full">No posts yet.</p>
//                 )}
//               </div>
//             )}
              
//               {selectedTab === "saved" && (
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//     { savedPosts.length > 0 ? (
//       savedPosts.map((post) => (
//         <div
//           key={post.id}
//           onClick={() => handleCardClick(post)}
//           className="relative cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
//         >
//           <img
//             src={post.postImg}
//             alt={post.title}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h4 className="text-lg font-semibold">{post.title}</h4>
//             <p className="text-sm text-gray-500">{post.description}</p>
//           </div>
//         </div>
//       ))
//     ) : (
//       <p className="text-center text-gray-500 w-full">No posts yet.</p>
//     )}
//   </div>
// )}

            
//           </>
//         ) : (
//           <p className="text-center text-gray-600">Login to see your profile details</p>
//         )}
//       </div>
//       <ConfirmDeleteModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         onConfirm={handleDelete}
//         postTitle={postToDelete?.title || ""}

//       />
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  PhotoIcon,
  
  ArrowRightOnRectangleIcon,
  EllipsisVerticalIcon
} from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconOutline } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import ConfirmDeleteModal from "./ConfirmDeleteModal ";

const ProfilePage = () => {
  const { token, logout } = useAuth();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [savedPosts,setSavedPosts]=useState([])
  const [selectedTab, setSelectedTab] = useState("posts");
  const [activeMenuId, setActiveMenuId] = useState(null);
  const menuRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(token);
        console.log(res);
        
        setUser(res.data);
        setPosts(res.data.posts );
      } catch (err) {
        setPosts([]);
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


  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios("http://localhost:8080/api/users/saved-posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("saved resp", resp);
        
        // Extract the post ids from the response and update savedPosts
        const savedPostIds = resp.data.map(post => post.id);
        setSavedPosts(resp.data);
        
      } catch (error) {
        console.log("error", error);
        setSavedPosts([]); 
      }
    };
  
    if (token) {
      fetchData();
    } else {
      setSavedPosts([]); 
    }
  }, [token]);
  

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

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  const handleEdit = (postId) => {
    navigate(`/edit-post/${postId}`);
  };

  const handleCardClick = (post) => {
    localStorage.setItem("selectedBlog", JSON.stringify(post));
    navigate(`/article/${post.id}`);
  };

  const handleDelete = (id) => {
    
    axios.
    delete (`http://localhost:8080/api/posts/${postToDelete.id}`,{
      headers:{
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response)=>{
      setPosts(posts.filter((post)=>post.id!==postToDelete.id))
      
      setIsModalOpen(false);
      setPostToDelete(null);
      console.log("post deleted succesfully");
      
    })
    .catch((error)=>{
      console.log("error in deleting post",error);
      
    })

   
    
    // Call API or show confirmation
  };
  const openModal = (post) => {
    setPostToDelete(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPostToDelete(null);
  };

  return (
    <div className="min-h-screen w-full px-4 py-10 relative">
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
  className={`flex items-center gap-2 px-4 py-2 font-semibold ${
    selectedTab === "saved"
      ? "text-blue-600 border-b-2 border-blue-600"
      : "text-gray-500"
  }`}
>
  {selectedTab === "saved" ? (
    <BookmarkIconSolid className="h-5 w-5 text-blue-600" />
  ) : (
    <BookmarkIconOutline className="h-5 w-5 text-gray-500" />
  )}
  Saved
</button>
            </div>

            {selectedTab === "posts" && 
            (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.length > 0 ? (
                  posts.map((post) => (
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

                      {/* Three Dot Menu */}
                      <button
                        className="absolute top-2 right-2 z-20 p-1 bg-white rounded-full hover:bg-gray-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenuId(post.id);
                        }}
                      >
                        <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
                      </button>

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
                  ))
                ) : (
                  <p className="text-center text-gray-500 w-full">No posts yet.</p>
                )}
              </div>
            )}
              
              {selectedTab === "saved" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    { savedPosts.length > 0 ? (
      savedPosts.map((post) => (
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
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500 w-full">No posts yet.</p>
    )}
  </div>
)}

            
          </>
        ) : (
          <p className="text-center text-gray-600">Login to see your profile details</p>
        )}
      </div>
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
        postTitle={postToDelete?.title}

      />
    </div>
  );
};

export default ProfilePage;