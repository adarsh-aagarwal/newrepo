// services/postService.js

// export const createPost = async (payload, token) => {
    
//     console.log('JWT Token:', token); // Log token to verify it's being passed correctly
  
//     try {
//       const res = await fetch("http://localhost:8080/api/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Ensure token is passed correctly here
//         },
//         body: JSON.stringify(payload),
//       });
  
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const result = await res.json();
//       return result;
//     } catch (err) {
//       console.error("Upload error:", err);
//       throw err;
//     }
//   };
  
// import { useAuth } from "../Context/AuthContext";
// export const createPost = async (payload, token) => {
//     const tok=localStorage.getItem(token);
//     console.log('JWT Token:', ); // Log token to verify it's being passed correctly
//     console.log('Payload:', payload); // Log the payload to check its structure and contents
    
//     try {
//       const res = await fetch("http://localhost:8080/api/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Ensure token is passed correctly here
//         },
//         body: JSON.stringify(payload),
//       });
  
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const result = await res.json();
//       return result;
//     } catch (err) {
//       console.error("Upload error:", err);
//       throw err;
//     }
//   };
  

// import { useAuth } from "../Context/AuthContext"; // adjust the path

// export const createPost = async (payload) => {
//   const { token } = useAuth();  // Get the token from the context
//   console.log("JWT Token:", token);  // Check the token

//   if (!token) {
//     console.error("Token is missing!");
//     return;
//   }

//   try {
//     const res = await fetch("http://localhost:8080/api/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,  // Use the token here
//       },
//       body: JSON.stringify(payload),
//     });

//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const result = await res.json();
//     return result;
//   } catch (err) {
//     console.error("Upload error:", err);
//     throw err;
//   }
// };



// postServices.js
export const createPost = async (payload, token) => {
    console.log("JWT Token:", token); // Debug: Make sure it's defined
  
    if (!token) {
      throw new Error("Missing JWT token");
    }
  
    try {
      const res = await fetch("http://localhost:8080/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
  
      const result = await res.json();
      return result;
    } catch (err) {
      console.error("Upload error:", err);
      throw err;
    }
  };
  
