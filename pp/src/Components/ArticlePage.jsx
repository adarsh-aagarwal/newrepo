// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';

// const ArticlePage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const savedBlog = JSON.parse(localStorage.getItem('selectedBlog'));
//     if (!savedBlog || savedBlog.id.toString() !== id) {
//       navigate('/'); // Redirect if data is missing or doesn't match
//     } else {
//       setBlog(savedBlog);
//     }
//   }, [id, navigate]);

//   if (!blog) return null;

//   return (
//     <div className="p-8 max-w-3xl mx-auto">
//       <img
//         src={blog.image}
//         alt={blog.title}
//         className="w-full object-contain mb-6 rounded-lg"
//       />
//       <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
//       <p className="text-gray-700 mb-6">
//         {blog.description || "Enjoy this beautiful blog post!"}
//       </p>
//       <p className="text-gray-600 leading-relaxed">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
//         odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
//         quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
//         mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
//       </p>

//       <div className="flex justify-center">
//         <Link
//           to="/Summarize"
//           className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-center"
//         >
//           SUMMARIZE
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ArticlePage;



import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Fetch the blog post details from the backend
        const response = await axios.get(`http://localhost:8080/posts/${id}`);
        const blogData = response.data;
        console.log(response);
        
        if (!blogData || !blogData.contentUrl) {
          setError('Blog content not found.');
          setLoading(false);
          return;
        }

        setBlog(blogData);

        // Fetch content from the .txt file link
        const contentResponse = await axios.get(blogData.contentUrl);
        setContent(contentResponse.data);
      } catch (err) {
        setError('Failed to load the blog post.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-4 sm:p-8 max-w-3xl mx-auto">
      {blog?.postImg && (
        <img
          src={blog.postImg}
          alt={blog.title}
          className="w-full h-auto max-h-[500px] object-contain mb-6 rounded-lg"
        />
      )}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 mb-6">
        {blog.description || 'Enjoy this beautiful blog post!'}
      </p>
      <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
        {content}
      </p>

      <div className="flex justify-center">
        <Link
          to="/Summarize"
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-center"
        >
          SUMMARIZE
        </Link>
      </div>
    </div>
  );
};

export default ArticlePage;
