import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { uploadToCloudinary } from "../services/cloudinary";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";
import uploadAnimation from "../Animations/uploadAnimation.json";

const categories = [
  "Food", "Tech", "Travel", "Photography", "Lifestyle",
  "Fitness", "Science", "Education", "Health", "Finance",
  "Gaming", "Culture", "History", "Nature"
];

const EditPostPage = () => {
  const { postId } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [postImg, setPostImg] = useState("");
  const [contentText, setContentText] = useState("");
  const [contentUrl, setContentUrl] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/posts/${postId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const post = res.data;
        setTitle(post.title);
        setDescription(post.description);
        setPostImg(post.postImg);
        setContentUrl(post.contentUrl);

        const contentRes = await fetch(post.contentUrl);
        const content = await contentRes.text();
        setContentText(content);
      } catch (err) {
        console.error("Failed to fetch post", err);
      }
    };

    fetchPost();
  }, [postId, token]);

  const handleCategoryClick = (cat) => {
    if (!description.includes(cat)) {
      setDescription((prev) => prev.trim() + (prev ? " " : "") + cat);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("uploading");

    try {
      let updatedImg = postImg;
      let updatedContentUrl = contentUrl;

      if (imageFile) {
        updatedImg = await uploadToCloudinary(imageFile, "image");
      }

      const contentBlob = new Blob([contentText], { type: "text/plain" });
      const contentFile = new File([contentBlob], "postContent.txt", { type: "text/plain" });

      updatedContentUrl = await uploadToCloudinary(contentFile, "raw");

      const updatedPost = {
        title,
        description,
        postImg: updatedImg,
        contentUrl: updatedContentUrl,
      };

      await axios.put(`http://localhost:8080/api/posts/${postId}`, updatedPost, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setStatus("success");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      console.error("Error updating post:", error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {status === "uploading" && (
        <div className="flex flex-col items-center justify-center mt-10">
          <Player autoplay loop src={uploadAnimation} style={{ height: "200px", width: "200px" }} />
          <p className="text-blue-600 font-semibold text-lg mt-2">Updating your post...</p>
        </div>
      )}

      {status === "success" && (
        <div className="flex flex-col items-center justify-center mt-10">
          <Player
            autoplay
            src="https://assets1.lottiefiles.com/packages/lf20_jbrw3hcz.json"
            style={{ height: "200px", width: "200px" }}
          />
          <p className="text-green-600 font-semibold text-lg mt-2">Post updated successfully!</p>
        </div>
      )}

      {status !== "uploading" && status !== "success" && (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Edit Post</h2>

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
              className="w-full"
            />
            {postImg && (
              <img src={postImg} alt="Current post" className="mt-4 rounded-md max-h-60 object-cover" />
            )}
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
            Update Post
          </button>

          {status === "error" && (
            <p className="text-red-500 font-medium text-center mt-2">
              Something went wrong while updating. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default EditPostPage;
