// src/services/cloudinary.js
// export const uploadToCloudinary = async (file) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "unsigned_blog_uploads");
  
//     const response = await fetch(
//       "https://api.cloudinary.com/v1_1/dkxvis2fh/auto/upload", //  cloud name is now added here
//       {
//         method: "POST",
//         body: formData,
//       }
//     );
//     console.log(response)
//     const data = await response.json();
  
//     if (!data.secure_url) throw new Error("Upload failed");
  
//     return data.secure_url;
//   };


// cloudinary.js



export const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_blog_uploads");  // Make sure the preset allows raw files
    formData.append("resource_type", "raw");  // Important: Specifies that it's a raw file, like .txt

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dkxvis2fh/auto/upload", // Correct cloud name
      {
        method: "POST",
        body: formData,
      }
    );
  
    const data = await response.json();
  
    if (!data.secure_url) throw new Error("Upload failed");
  
    return data.secure_url;
};

  
  

// services/postService.js or wherever your request is being made

// export const createPost = async (payload, token) => {
//     console.log('JWT Token:', token); // Log token to verify it's being passed correctly
  
//     try {
//       const res = await fetch("http://localhost:8080/api/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Make sure token is passed correctly here
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
  