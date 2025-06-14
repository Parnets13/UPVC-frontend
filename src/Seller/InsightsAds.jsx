import { useState } from 'react';
import {
  FaPlay, FaPause, FaHeart, FaRegHeart, FaShare
} from 'react-icons/fa';

const VideoCard = ({ title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(243);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleLike = () => {
    setLikeCount(prev => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };
  const handleShare = () => alert('Sharing this video!');

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="relative bg-black aspect-video flex items-center justify-center">
        <button onClick={handlePlayPause} className="text-white text-4xl">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 text-white text-sm flex justify-between items-center">
          <span>00:00 / 00:10</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
        <div className="flex justify-between items-center text-gray-700 text-sm">
          <button onClick={handleLike} className="flex items-center space-x-1">
            {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            <span>{likeCount}</span>
          </button>
          <button onClick={handleShare} className="flex items-center space-x-1">
            <FaShare />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const InsightsAds = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const videoList = [
    { id: 1, title: "Discover our revolutionary new product", category: 'featured' },
    { id: 2, title: "Behind the scenes of our factory", category: 'latest' },
    { id: 3, title: "Customer success story", category: 'trending' },
    { id: 4, title: "2025 design trends in focus", category: 'featured' },
    { id: 5, title: "How to use our latest solution", category: 'latest' },
    { id: 6, title: "What makes our service different?", category: 'trending' },
    { id: 7, title: "How to use our latest solution", category: 'latest' },
    { id: 8, title: "What makes our service different?", category: 'trending' }
  ];

  const filteredVideos = videoList.filter(video => video.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Header */}
      <header className="border-b border-gray-200 p-4 bg-white">
        <h1 className="text-3xl font-bold text-center">Video Platform</h1>
      </header>

      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-200 bg-white">
        {['featured', 'latest', 'trending'].map(tab => (
          <button
            key={tab}
            className={`px-6 py-3 font-medium capitalize ${
              activeTab === tab ? 'border-b-2 border-black text-black' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredVideos.length > 0 ? (
            filteredVideos.map(video => (
              <VideoCard key={video.id} title={video.title} />
            ))
          ) : (
            <p className="text-center col-span-2 text-gray-500">No videos available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsightsAds;
