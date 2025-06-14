import { useState, useRef } from 'react';

const UploadVideo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const videoRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.includes('video/')) {
        alert('Please upload a video file');
        return;
      }
      if (file.size > 100 * 1024 * 1024) {
        alert('File size exceeds maximum limit (100MB)');
        return;
      }
      setSelectedFile(file);

      // Create preview URL and revoke previous one if exists
      if (videoRef.current?.src) {
        URL.revokeObjectURL(videoRef.current.src);
      }
      const videoURL = URL.createObjectURL(file);
      videoRef.current.src = videoURL;
      videoRef.current.load(); // Ensure the video loads
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          alert('Upload complete!');
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="text-center max-w-2xl mx-auto mb-10 mt-12">
        <h1 className="text-2xl md:text-3xl font-bold uppercase mb-2">
          We generate qualified leads and share with select fabrications.
        </h1>
        <p className="text-gray-600 text-sm">
          Only 6 fabrications will get an opportunity to buy the lead.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Full-width Video Preview Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 w-full">
          <div className="bg-black bg-opacity-5 rounded-lg overflow-hidden w-full min-h-[400px] flex items-center justify-center">
            {selectedFile ? (
              <video
                ref={videoRef}
                controls
                className="w-full h-auto max-h-[70vh]"
                autoPlay
                muted
              >
                <source src={videoRef.current?.src} type={selectedFile.type} />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="text-gray-500">
                <p>Video preview will appear here</p>
              </div>
            )}
          </div>
        </div>

        {/* Upload Section - Centered below the video */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Upload Your Video</h2>
          <p className="text-gray-700 mb-6">
            Upload a short video (max 90 sec) showcasing your infrastructure, client testimonials, 
            installations, or showroom to build trust with buyers.
          </p>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-6">
            {selectedFile ? (
              <div className="mb-4">
                <p className="text-gray-700 font-medium">{selectedFile.name}</p>
                <p className="text-gray-500 text-sm">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            ) : (
              <p className="text-gray-500 mb-4">No file selected</p>
            )}

            <label className="cursor-pointer inline-block">
              <span className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                {selectedFile ? 'Change Video' : 'Select Video'}
              </span>
              <input 
                type="file" 
                accept="video/*" 
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {isUploading && (
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-black h-2.5 rounded-full" 
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-gray-700 text-sm mt-1">
                Uploading... {uploadProgress}%
              </p>
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={isUploading || !selectedFile}
            className={`w-full py-3 px-4 rounded-md font-medium ${
              isUploading || !selectedFile
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800'
            } transition`}
          >
            {isUploading ? 'Uploading...' : 'UPLOAD'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;