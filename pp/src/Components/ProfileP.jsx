


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../Context/AuthContext";

// const ProfilePage = () => {
//   const { token } = useAuth();
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/api/users/me", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(res.data);
//       } catch (err) {
//         setError("Failed to load user data.");
//         console.error(err);
//       }
//     };

//     if (token) {
//       fetchUser();
//     }
//   }, [token]);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-[#4169f5] to-[#dbe8ff] flex items-center justify-center px-4">
//       <div className="bg-white rounded-[2rem] shadow-xl p-10 w-full max-w-2xl">
//         <h2 className="text-3xl font-bold text-center mb-8 text-[#4169f5]">
//           Profile Information
//         </h2>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         {user ? (
//           <div className="space-y-6">
//             <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
//               <div className="h-28 w-28 bg-[#f2f2f2] rounded-full flex items-center justify-center text-4xl text-blue-500 font-bold">
//                 {user.name ? user.name.charAt(0).toUpperCase() : "U"}
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
//                 <p className="text-sm text-gray-500">{user.email}</p>
//               </div>
//             </div>

//             <div className="mt-10 text-sm text-center text-gray-500">
//               (Profile picture upload feature coming soon)
//             </div>
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">Loading...</p>
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

const ProfilePage = () => {
  const { token, logout } = useAuth();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        setError("Failed to load user data.");
        console.error(err);
      }
    };

    if (token) {
      fetchUser();
    } else {
      setUser(null); // Clear user data if no token
    }
  }, [token]); // This effect will run whenever `token` changes

  const handleLogout = () => {
    logout(); // This will clear the token in AuthContext and update the state
    navigate("/signin"); // Redirect user to login page after logout
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#4169f5] to-[#dbe8ff] flex items-center justify-center px-4">
      <div className="bg-white rounded-[2rem] shadow-xl p-10 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#4169f5]">
          Profile Information
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {user ? (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="h-28 w-28 bg-[#f2f2f2] rounded-full flex items-center justify-center text-4xl text-blue-500 font-bold">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <div className="mt-10 text-sm text-center text-gray-500">
              (Profile picture upload feature coming soon)
            </div>

            {/* Logout Button */}
            <div className="text-center mt-6">
              <button
                onClick={handleLogout}
                className="bg-[#4169f5] text-white py-2 px-4 rounded-md hover:bg-[#2f50c1]"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Login To See Your Profile Details</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
