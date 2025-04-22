


import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { createPost } from "../services/postServices";
import { uploadToCloudinary } from "../services/cloudinary";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";
import uploadAnimation from "../Animations/uploadAnimation.json"

const categories = [
  "Food", "Tech", "Travel", "Photography", "Lifestyle",
  "Fitness", "Science", "Education", "Health", "Finance",
  "Gaming", "Culture", "History", "Nature"
];

const AddPostPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [contentText, setContentText] = useState("");
  const [status, setStatus] = useState(""); // "", "uploading", "success", "error"

  const handleCategoryClick = (cat) => {
    if (!description.includes(cat)) {
      setDescription((prev) => prev.trim() + (prev ? " " : "") + cat);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile || !contentText) {
      setStatus("error");
      return;
    }

    setStatus("uploading");

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

      await createPost(payload, token);
      setStatus("success");

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      console.log("tuktuk",token);
      
      console.error("Upload error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {status === "uploading" && (
        <div className="flex flex-col items-center justify-center mt-10">
          <Player
            autoplay
            loop
            src={uploadAnimation}
            style={{ height: "200px", width: "200px" }}
          />
          <p className="text-blue-600 font-semibold text-lg mt-2">Uploading your post...</p>
        </div>
      )}

      {status === "success" && (
        <div className="flex flex-col items-center justify-center mt-10">
          <Player
            autoplay
            src="https://assets1.lottiefiles.com/packages/lf20_jbrw3hcz.json"
            style={{ height: "200px", width: "200px" }}
          />
          <p className="text-green-600 font-semibold text-lg mt-2">Post created successfully!</p>
        </div>
      )}

      {status !== "uploading" && status !== "success" && (
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

          {/* Category Buttons */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Choose Categories (click to add to description)
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryClick(cat)}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Categorie</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Post Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              required
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Post Content</label>
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
            disabled={status === "uploading"}
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg transition"
          >
            Publish
          </button>

          {status === "error" && (
            <p className="text-red-500 font-medium text-center mt-2">
              Please provide all required fields correctly.
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default AddPostPage;
