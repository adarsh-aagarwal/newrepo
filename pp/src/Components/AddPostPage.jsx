// import React, { useState } from "react";
// import { Image as ImageIcon, PlusCircle, Smile } from "lucide-react";
// import EmojiPicker from "emoji-picker-react";

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [sections, setSections] = useState([""]);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const addSection = () => {
//     setSections([...sections, ""]);
//   };

//   const handleSectionChange = (index, value) => {
//     const updated = [...sections];
//     updated[index] = value;
//     setSections(updated);
//   };

//   const handleEmojiClick = (emojiData) => {
//     setContent((prev) => prev + emojiData.emoji);
//   };

//   const handleSubmit = () => {
//     console.log({ title, content, image, sections });
//   };

//   return (
//     <div className="h-screen w-screen bg-gray-100 m-0 p-0">
//       <div className="h-full w-full p-6 bg-blue-100 shadow-inner rounded-none">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
//           Create a New Post
//         </h2>

//         <input
//           type="text"
//           placeholder="Post Title"
//           className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <div className="relative">
//           <textarea
//             placeholder="What's on your mind?"
//             className="w-full mb-4 p-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           />

//           <button
//             type="button"
//             onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//             className="absolute top-2 right-2 text-yellow-500"
//           >
//             <Smile size={24} />
//           </button>

//           {showEmojiPicker && (
//             <div className="absolute top-14 right-0 z-50">
//               <EmojiPicker onEmojiClick={handleEmojiClick} />
//             </div>
//           )}
//         </div>

//         {image && (
//           <div className="mb-4">
//             <img src={image} alt="Preview" className="max-h-60 rounded-lg" />
//           </div>
//         )}

//         <div className="flex items-center gap-4 mb-4">
//           <label className="flex items-center gap-2 cursor-pointer text-blue-600">
//             <ImageIcon size={20} />
//             <input type="file" className="hidden" onChange={handleImageChange} />
//             Add Image
//           </label>

//           <button
//             onClick={addSection}
//             className="flex items-center gap-1 text-green-600"
//           >
//             <PlusCircle size={20} />
//             Add Section
//           </button>
//         </div>

//         {sections.map((section, idx) => (
//           <textarea
//             key={idx}
//             placeholder={`Section ${idx + 1}`}
//             className="w-full mb-4 p-3 border rounded-lg h-24 resize-none focus:outline-none focus:ring"
//             value={section}
//             onChange={(e) => handleSectionChange(idx, e.target.value)}
//           />
//         ))}

//         <button
//           onClick={handleSubmit}
//           className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
//         >
//           Publish Post
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Image as ImageIcon, PlusCircle, Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [sections, setSections] = useState([""]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const addSection = () => {
    setSections([...sections, ""]);
  };

  const handleSectionChange = (index, value) => {
    const updated = [...sections];
    updated[index] = value;
    setSections(updated);
  };

  const handleEmojiClick = (emojiData) => {
    setContent((prev) => prev + emojiData.emoji);
  };

  const handleSubmit = () => {
    console.log({ title, content, image, sections });
  };

  return (
    <div className="relative min-h-screen">
      {/* Top Half Blue */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#4169f5] z-0" />
      {/* Bottom Half Light Blue */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#dbe8ff] z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-4xl bg-white p-8 rounded-3xl shadow-xl overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
            Create a New Post
          </h2>

          <input
            type="text"
            placeholder="Post Title"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="relative">
            <textarea
              placeholder="What's on your mind?"
              className="w-full mb-4 p-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="absolute top-2 right-2 text-yellow-500"
            >
              <Smile size={24} />
            </button>

            {showEmojiPicker && (
              <div className="absolute top-14 right-0 z-50">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>

          {image && (
            <div className="mb-4">
              <img src={image} alt="Preview" className="max-h-60 rounded-lg" />
            </div>
          )}

          <div className="flex items-center gap-4 mb-4">
            <label className="flex items-center gap-2 cursor-pointer text-blue-600">
              <ImageIcon size={20} />
              <input type="file" className="hidden" onChange={handleImageChange} />
              Add Image
            </label>

            <button
              onClick={addSection}
              className="flex items-center gap-1 text-green-600"
            >
              <PlusCircle size={20} />
              Add Section
            </button>
          </div>

          {sections.map((section, idx) => (
            <textarea
              key={idx}
              placeholder={`Section ${idx + 1}`}
              className="w-full mb-4 p-3 border rounded-lg h-24 resize-none focus:outline-none focus:ring"
              value={section}
              onChange={(e) => handleSectionChange(idx, e.target.value)}
            />
          ))}

          <button
            onClick={handleSubmit}
            className="w-full bg-[#4169f5] text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
}
