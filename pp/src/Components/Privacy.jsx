import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At <strong>Blosys</strong>, your privacy is important to us. This policy outlines how we collect, use, and protect your information.
        </p>

        <h2 className="text-xl text-white font-semibold mb-2 mt-6">Information We Collect</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Personal information you provide when signing up or contacting us.</li>
          <li>Content and preferences you submit through posts or feedback.</li>
        </ul>

        <h2 className="text-xl text-white font-semibold mb-2 mt-6">How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To improve our summarization service and user experience.</li>
          <li>To respond to queries and provide customer support.</li>
          <li>To enhance the security and functionality of our platform.</li>
        </ul>

        <h2 className="text-xl text-white font-semibold mb-2 mt-6">Data Protection</h2>
        <p className="mb-4">
          We implement security measures to protect your personal data. However, please note that no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-xl text-white font-semibold mb-2 mt-6">Third-Party Services</h2>
        <p className="mb-4">
          We do not sell, trade, or share your personal information with third parties, except when necessary to provide our services or required by law.
        </p>

        <h2 className="text-xl text-white font-semibold mb-2 mt-6">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this policy periodically. Changes will be reflected on this page, so please review it regularly.
        </p>

        <p className="text-sm mt-10 text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Privacy;
