// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";

// const Summarizer = () => {
//   const { state } = useLocation();
//   const { postId } = state || {};

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAndSummarize = async () => {
//       if (!postId) {
//         setError("No post ID provided.");
//         setLoading(false);
//         return;
//       }

//       try {
//         // Step 1: Fetch blog post by ID
//         const postRes = await axios.get(`http://localhost:8080/api/posts/${postId}`);
//         const post = postRes.data;

//         const fileUrl = post.contentUrl;
//         console.log(fileUrl);
        
//         const title = post.title;
//         const postImg = post.postImg;

//         // Step 2: Send fileUrl to summarizer backend
//         const response = await axios.post("http://localhost:8080/api/summarize", { fileUrl });
//           console.log(response);
          
//         // Step 3: Navigate to summary display page
//         navigate("/summary", {
          
//           state: {
//             summary: response.data,
//             title,
//             postImg,
//           },
//         });
//       } catch (err) {
//         setError("Failed to fetch or summarize: " + (err.response?.data || err.message));
//         setLoading(false);
//       }
//     };

//     fetchAndSummarize();
//   }, [postId, navigate]);

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-4 rounded-xl shadow-md bg-white text-center">
//       {loading && !error && <p className="text-gray-600 text-lg">Summarizing the article...</p>}
//       {error && <p className="text-red-500 text-lg">{error}</p>}
//     </div>
//   );
// };

// export default Summarizer;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Summarizer = () => {
  const { state } = useLocation();
  const { postId } = state || {};

  const [fileUrl, setFileUrl] = useState("");  // Ensure fileUrl is a state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndSummarize = async () => {
      if (!postId) {
        setError("No post ID provided.");
        setLoading(false);
        return;
      }

      try {
        // Step 1: Fetch blog post by ID
        const postRes = await axios.get(`http://localhost:8080/api/posts/${postId}`);
        const post = postRes.data;

        // Step 2: Set fileUrl from fetched post
        setFileUrl(post.contentUrl);
        const title = post.title;
        const postImg = post.postImg;

        // Step 3: Ensure fileUrl is properly set before proceeding
        if (!fileUrl) {
          setError("File URL is not available.");
          setLoading(false);
          return;
        }

        console.log("File URL: ", fileUrl);  // Log the fileUrl to see if it's being set

        // Step 4: Send fileUrl to summarizer backend
        const response = await axios.post("http://localhost:8080/api/summarize", { fileUrl });
        console.log(response.data);

        // Step 5: Navigate to summary display page
        navigate("/summary", {
          state: {
            summary: response.data,
            title,
            postImg,
          },
        });
      } catch (err) {
        setError("Failed to fetch or summarize: " + (err.response?.data || err.message));
        setLoading(false);
      }
    };

    fetchAndSummarize();
  }, [postId, fileUrl, navigate]);  // Ensure fileUrl is included in dependencies

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 rounded-xl shadow-md bg-white text-center">
      {loading && !error && <p className="text-gray-600 text-lg">Summarizing the article...</p>}
      {error && <p className="text-red-500 text-lg">{error}</p>}
    </div>
  );
};

export default Summarizer;
