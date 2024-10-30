import { useSelector } from "react-redux";
import useLogout from "../hooks/user/useLogout";
import { ToastContainer } from "react-toastify";
import UploadVideoForm from "../components/UploadVideoForm";
import VideoList from "../components/VideoList";

function HomePage() {
  const { logoutUser, loading } = useLogout();
  const authUser = useSelector((state) => state.auth.user);

  if (!authUser) {
    return <div className="m-10">Please log in to view this page.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cover Image as Top Banner */}
      <div className="w-full h-60 md:h-80 bg-gray-300">
        {authUser?.data?.user?.coverImage && (
          <img
            src={authUser.data.user.coverImage}
            alt="User Cover"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto mt-4 px-4 md:px-8">
        {/* User Avatar and Details */}
        <div className="flex items-center space-x-4 mb-6">
          {authUser?.data?.user?.avatar && (
            <img
              src={authUser.data.user.avatar}
              alt="User Avatar"
              className="rounded-full w-28 h-28 border-4 border-white object-cover"
            />
          )}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {authUser?.data?.user?.fullName}
            </h2>
            <p className="text-gray-700">@{authUser?.data?.user?.username}</p>
            <p className="text-gray-600">{authUser?.data?.user?.email}</p>
          </div>
        </div>

        {/* Upload and Logout Buttons */}
        <div className="flex justify-between items-center mb-6">
          <UploadVideoForm />
          <button
            onClick={logoutUser}
            className="bg-purple-700 text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            {loading ? "Logging Out..." : "Log Out"}
          </button>
        </div>

        {/* Video List Section */}
        <div className="mb-6">
          <VideoList />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default HomePage;
