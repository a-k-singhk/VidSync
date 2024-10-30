import { useState } from "react";
import useUploadVideo from "../hooks/video/useUploadVideo";
import { IoCloseCircleOutline } from "react-icons/io5";

const UploadVideoForm = () => {
  const { uploadVideo, isLoading } = useUploadVideo();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const videoData = {
      title: e.target.title.value,
      description: e.target.description.value,
      isPublished: e.target.isPublished.checked,
      videoFile: e.target.videoFile.files[0],
      thumbnail: e.target.thumbnail.files[0],
    };
    uploadVideo(videoData);
  };

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={togglePopup}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Upload Video
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg relative transform transition-transform duration-300 scale-95">
            
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <IoCloseCircleOutline size={24} />
            </button>
            
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upload Your Video</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              
              <textarea
                name="description"
                placeholder="Description"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="isPublished"
                  className="mr-2"
                />
                <label>Published</label>
              </div>
              
              <div className="space-y-2">
                <label className="block font-medium">Select Video File:</label>
                <input
                  type="file"
                  name="videoFile"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block font-medium">Select Thumbnail:</label>
                <input
                  type="file"
                  name="thumbnail"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? "Uploading..." : "Upload Video"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadVideoForm;
