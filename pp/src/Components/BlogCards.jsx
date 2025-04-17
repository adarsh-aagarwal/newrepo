// src/Components/BlogCards.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Exploring the Mountains",
    image: "https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2021/02/AA075D73-3E0C-4D20-9A0F-55E4480C69DF.jpeg",
    description: "A journey through breathtaking mountain ranges and hidden trails.",
  },
  {
    id: 2,
    title: "Urban Life Vibes",
    image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFufGVufDB8fDB8fHww",
    description: "The rhythm of city life captured in moments and lights.",
  },
  {
    id: 3,
    title: "Coastal Escapes",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    title: "Coastal Escapes",
    image: "https://images.unsplash.com/photo-1505440484611-23c171ad6e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGphcGFufGVufDB8fDB8fHww",
    description: "Relaxing near the ocean with waves and sunsets.",
  },
  {
    id: 4,
    title: "Coastal Escapes",
    image: "https://images.unsplash.com/photo-1548603042-43c853e0d4c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4MjcwNDJ8fGVufDB8fHx8fA%3D%3D",
    description: "Relaxing near the ocean with waves and sunsets.",
  },
  {
    id: 5,
    title: "Coastal Escapes",
    image: "https://images.unsplash.com/photo-1672916778368-3b6ba36b6f1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dWNsfGVufDB8fDB8fHww",
    description: "Relaxing near the ocean with waves and sunsets.",
  },
  {
    id: 6,
    title: "Coastal Escapes",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr8xcPHyTIdM9n-hUSlZbCNxbGXEfAMLAsFX2WOlKtf0PWDPpaYC7zVJOUSSXS0zU0iYNuUrAHVNpvT0vf8ojuQ1RWwL1reA-XBIj__8rox35Bnfqv7bFjp4dN_9zjHkH5JgKqrC48SNXX/w919/kim-ji-won-korean-actress-uhdpaper.com-4K-4.1427-wp.thumbnail.jpg",
    description: "Relaxing near the ocean with waves and sunsets.",
  },
  {
    id: 7,
    title: "Coastal Escapes",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr8xcPHyTIdM9n-hUSlZbCNxbGXEfAMLAsFX2WOlKtf0PWDPpaYC7zVJOUSSXS0zU0iYNuUrAHVNpvT0vf8ojuQ1RWwL1reA-XBIj__8rox35Bnfqv7bFjp4dN_9zjHkH5JgKqrC48SNXX/w919/kim-ji-won-korean-actress-uhdpaper.com-4K-4.1427-wp.thumbnail.jpg",
    description: "Relaxing near the ocean with waves and sunsets.",
  },
  {
    id: 8,
    title: "Coastal Escapes",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr8xcPHyTIdM9n-hUSlZbCNxbGXEfAMLAsFX2WOlKtf0PWDPpaYC7zVJOUSSXS0zU0iYNuUrAHVNpvT0vf8ojuQ1RWwL1reA-XBIj__8rox35Bnfqv7bFjp4dN_9zjHkH5JgKqrC48SNXX/w919/kim-ji-won-korean-actress-uhdpaper.com-4K-4.1427-wp.thumbnail.jpg",
    description: "Relaxing near the ocean with waves and sunsets.",
  },
  {
    id: 9,
    title: "Coastal Escapes",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr8xcPHyTIdM9n-hUSlZbCNxbGXEfAMLAsFX2WOlKtf0PWDPpaYC7zVJOUSSXS0zU0iYNuUrAHVNpvT0vf8ojuQ1RWwL1reA-XBIj__8rox35Bnfqv7bFjp4dN_9zjHkH5JgKqrC48SNXX/w919/kim-ji-won-korean-actress-uhdpaper.com-4K-4.1427-wp.thumbnail.jpg",
    description: "Relaxing near the ocean with waves and sunsets.",
  },
  {
    id: 10,
    title: "Coastal Escapes",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr8xcPHyTIdM9n-hUSlZbCNxbGXEfAMLAsFX2WOlKtf0PWDPpaYC7zVJOUSSXS0zU0iYNuUrAHVNpvT0vf8ojuQ1RWwL1reA-XBIj__8rox35Bnfqv7bFjp4dN_9zjHkH5JgKqrC48SNXX/w919/kim-ji-won-korean-actress-uhdpaper.com-4K-4.1427-wp.thumbnail.jpg",
    description: "Relaxing near the ocean with waves and sunsets.",
  },
];

function BlogCards() {
  const navigate = useNavigate();

  const handleCardClick = (post) => {
    localStorage.setItem("selectedBlog", JSON.stringify(post));
    navigate(`/article/${post.id}`);
  };

  return (
    <section className="py-12 px-6 bg-blue-100">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => handleCardClick(post)}
            className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.description || "Click to read more..."}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogCards;
