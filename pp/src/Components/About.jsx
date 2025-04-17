import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-6">About Blosys</h1>
        <p className="text-lg mb-6">
          <span className="text-blue-500 font-semibold">Blosys</span> is a smart article summarizer that uses 
          <span className="text-white font-medium"> abstractive summarization techniques</span> to provide concise, human-like summaries for any article you input. 
          It leverages advanced natural language processing to help users quickly grasp key points from lengthy content.
        </p>
        <p className="text-lg mb-6">
          This platform was developed as a final year project by students of 
          <span className="text-white font-semibold"> Guru Nanak Institute of Technology</span>:
        </p>
        <ul className="text-left text-base list-disc list-inside max-w-md mx-auto mb-8 space-y-2">
          <li>Abhimanyu Prasad</li>
          <li>Adarsh Agarwal</li>
          <li>Anand Aroop Ghosh</li>
          <li>Asif Ansari</li>
          <li>Anushkha Mahapatra</li>
          <li>Chirag Gupta</li>
        </ul>
        <p className="text-lg text-gray-400">
          We aimed to build a tool that helps users save time and effort while staying informed.
        </p>
      </div>
    </div>
  );
};

export default About;
