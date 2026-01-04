import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { CgProfile } from "react-icons/cg";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Sync local state with current user
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUserProfile({ displayName, photoURL });
      toast.success("Profile updated successfully!");
      setShowForm(false);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <p>Loading user info...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-6 min-h-screen  mt-20 ">
      <Toaster position="top-right" />

      <div className="w-full max-w-md">
        {/* Profile Card */}
        {!showForm && (
          <div className="card bg-white shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="User Avatar"
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                />
              ) : (
                <CgProfile className="w-24 h-24 text-gray-400" />
              )}
            </div>

            <h2 className="text-2xl font-semibold mb-1">{displayName || "No Name"}</h2>
            <p className="text-gray-700 mb-2">{user.email}</p>

            <button
              onClick={() => setShowForm(true)}
              className="btn w-full bg-common text-white mt-4 hover:bg-gray-800"
            >
              Update Profile
            </button>
          </div>
        )}

        {/* Editable Form */}
        {showForm && (
          <form
            onSubmit={handleSave}
            className="card bg-white shadow-lg p-6 mt-4 text-center"
          >
            <div className="flex justify-center mb-4">
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="User Avatar"
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                />
              ) : (
                <CgProfile className="w-24 h-24 text-gray-400" />
              )}
            </div>

            <div className="mb-4 text-left">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="mb-4 text-left">
              <label className="block mb-1">Photo URL</label>
              <input
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
                placeholder="https://example.com/avatar.jpg"
              />
            </div>

            <div className="mb-4 text-left">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div className="flex gap-2 mt-4">
              <button
                type="submit"
                disabled={loading}
                className="btn flex-1 bg-common text-white"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="btn flex-1 bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
