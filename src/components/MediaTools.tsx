import React from 'react';

const MediaTools: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-black text-[#003366] mb-4">Media Analysis Tools</h2>
        <p className="text-gray-600 mb-6">Upload images or videos for AI-powered compliance analysis</p>

        <div className="space-y-4">
          <button className="w-full py-4 bg-[#003366] text-white font-bold rounded-xl border-2 border-dashed border-[#003366] hover:bg-[#002244] active:scale-95 transition-transform">
            📷 Upload Photo
          </button>

          <button className="w-full py-4 bg-white text-[#003366] font-bold rounded-xl border-2 border-dashed border-[#003366] hover:bg-gray-50 active:scale-95 transition-transform">
            🎥 Upload Video
          </button>

          <button className="w-full py-4 bg-white text-[#003366] font-bold rounded-xl border-2 border-dashed border-[#003366] hover:bg-gray-50 active:scale-95 transition-transform">
            📄 Upload Document
          </button>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Media analysis requires Gemini API integration. Configure your API key in Vercel to enable this feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaTools;
