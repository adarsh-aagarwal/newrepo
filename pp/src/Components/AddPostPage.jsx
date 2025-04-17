
// import React, { useState } from "react";
// import { useAuth } from "../Context/AuthContext";
// import { createPost } from "../services/postServices";
// import { uploadToCloudinary } from "../services/cloudinary";

// const AddPostPage = () => {
//   const { token } = useAuth();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [contentText, setContentText] = useState(""); // <-- now using string
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!imageFile || !contentText) {
//       alert("Please provide an image and post content.");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const postImg = await uploadToCloudinary(imageFile, "image");

//       // Convert content text to a Blob and then to a File
//       const contentBlob = new Blob([contentText], { type: "text/plain" });
//       const contentFile = new File([contentBlob], "postContent.txt", {
//         type: "text/plain",
//       });

//       const contentUrl = await uploadToCloudinary(contentFile, "raw");

//       const payload = {
//         title,
//         description,
//         postImg,
//         contentUrl,
//       };

//       console.log("Payload:", payload);

//       const response = await createPost(payload, token);
//       console.log("Post created successfully:", response);
//       alert("Post created!");
//     } catch (error) {
//       console.error("Upload error:", error);
//       alert("Something went wrong.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add New Post</h2>

//       <div>
//         <label>Title:</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//       </div>

//       <div>
//         <label>Description:</label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//       </div>

//       <div>
//         <label>Post Image:</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImageFile(e.target.files[0])}
//           required
//         />
//       </div>

//       <div>
//         <label>Post Content:</label>
//         <textarea
//           rows={10}
//           value={contentText}
//           onChange={(e) => setContentText(e.target.value)}
//           placeholder="Enter post content here..."
//           required
//         />
//       </div>

//       <button type="submit" disabled={isLoading}>
//         {isLoading ? "Uploading..." : "Submit Post"}
//       </button>
//     </form>
//   );
// };

// export default AddPostPage;



// import React, { useState } from "react";
// import { useAuth } from "../Context/AuthContext";
// import { createPost } from "../services/postServices";
// import { uploadToCloudinary } from "../services/cloudinary";

// const AddPostPage = () => {
//   const { token } = useAuth();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [contentText, setContentText] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!imageFile || !contentText) {
//       alert("Please provide an image and post content.");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const postImg = await uploadToCloudinary(imageFile, "image");

//       const contentBlob = new Blob([contentText], { type: "text/plain" });
//       const contentFile = new File([contentBlob], "postContent.txt", {
//         type: "text/plain",
//       });

//       const contentUrl = await uploadToCloudinary(contentFile, "raw");

//       const payload = {
//         title,
//         description,
//         postImg,
//         contentUrl,
//       };

//       const response = await createPost(payload, token);
//       alert("Post created!");
//     } catch (error) {
//       console.error("Upload error:", error);
//       alert("Something went wrong.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-10">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-8 space-y-6"
//       >
//         <h2 className="text-3xl font-bold text-gray-800">Create New Post</h2>

//         <div>
//           <label className="block mb-2 font-medium text-gray-700">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium text-gray-700">
//             Description
//           </label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium text-gray-700">
//             Post Image
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImageFile(e.target.files[0])}
//             required
//             className="w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium text-gray-700">
//             Post Content
//           </label>
//           <textarea
//             rows={15}
//             value={contentText}
//             onChange={(e) => setContentText(e.target.value)}
//             placeholder="Write your story here..."
//             required
//             className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg transition"
//         >
//           {isLoading ? "Uploading..." : "Publish"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddPostPage;



// import 'react-quill/dist/quill.snow.css';
// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
// import { useAuth } from "../Context/AuthContext";
// import { createPost } from "../services/postServices";
// import { uploadToCloudinary } from "../services/cloudinary";

// const AddPostPage = () => {
//   const { token } = useAuth();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [contentText, setContentText] = useState(""); // now HTML from Quill
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!imageFile || !contentText) {
//       alert("Please provide an image and post content.");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const postImg = await uploadToCloudinary(imageFile, "image");

//       const contentBlob = new Blob([contentText], { type: "text/html" });
//       const contentFile = new File([contentBlob], "postContent.html", {
//         type: "text/html",
//       });

//       const contentUrl = await uploadToCloudinary(contentFile, "raw");

//       const payload = {
//         title,
//         description,
//         postImg,
//         contentUrl,
//       };

//       const response = await createPost(payload, token);
//       alert("Post created!");
//     } catch (error) {
//       console.error("Upload error:", error);
//       alert("Something went wrong.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-10">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-8 space-y-6"
//       >
//         <h2 className="text-3xl font-bold text-gray-800">Create New Post</h2>

//         <div>
//           <label className="block mb-2 font-medium text-gray-700">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium text-gray-700">
//             Description
//           </label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium text-gray-700">
//             Post Image
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImageFile(e.target.files[0])}
//             required
//             className="w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium text-gray-700">
//             Post Content
//           </label>
//           <ReactQuill
//             value={contentText}
//             onChange={setContentText}
//             theme="snow"
//             className="bg-white h-72" // Tailwind: h-72 = 18rem = 288px
//             placeholder="Write your story here..."
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg transition"
//         >
//           {isLoading ? "Uploading..." : "Publish"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddPostPage;



import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { createPost } from "../services/postServices";
import { uploadToCloudinary } from "../services/cloudinary";

const AddPostPage = () => {
  const { token } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [contentText, setContentText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile || !contentText) {
      alert("Please provide an image and post content.");
      return;
    }

    setIsLoading(true);

    try {
      const postImg = await uploadToCloudinary(imageFile, "image");

      const contentBlob = new Blob([contentText], { type: "text/plain" });
      const contentFile = new File([contentBlob], "postContent.txt", {
        type: "text/plain",
      });

      const contentUrl = await uploadToCloudinary(contentFile, "raw");

      const payload = {
        title,
        description,
        postImg,
        contentUrl,
      };

      const response = await createPost(payload, token);
      alert("Post created!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800">Create New Post</h2>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Post Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            required
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Post Content
          </label>
          <textarea
            rows={15}
            value={contentText}
            onChange={(e) => setContentText(e.target.value)}
            placeholder="Write your story here..."
            required
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg transition"
        >
          {isLoading ? "Uploading..." : "Publish"}
        </button>
      </form>
    </div>
  );
};

export default AddPostPage;
