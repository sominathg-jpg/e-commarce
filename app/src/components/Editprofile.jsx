import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const EditProfilePage = () => {
  const { user, setUser } = useAuthStore();
  const [formUser, setFormUser] = useState(user);
  const [preview, setPreview] = useState(user?.avatar || user?.profile);
  const [newProfilePic, setNewProfilePic] = useState(null); // 🔹 new field
  const [newPreview, setNewPreview] = useState(null); // preview for new pic
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUser({ ...formUser, [name]: value });
  };

  const handleNewFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPreview(URL.createObjectURL(file));
      setNewProfilePic(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(user);

    try {
      setLoading(true);

      const formData = new FormData();
      if (formUser.name) formData.append("name", formUser.name);
      if (formUser.email) formData.append("email", formUser.email);
      if (formUser.phone) formData.append("phone", formUser.phone);
      if (formUser.address) formData.append("address", formUser.address);

      // 🔹 if new profile pic selected, send it
      if (newProfilePic) formData.append("profile", newProfilePic);

      const response = await axios.patch(
        `http://localhost:3000/api/auth/update-profile/${user.id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        setUser(response.data.updatedUser);
        toast.success("Profile updated successfully!");
        console.log(user);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Update profile error:", error);
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 flex justify-center items-start pt-30">
      <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current Profile Picture */}
          <div className="flex flex-col items-center">
            <img
              src={preview}
              alt="Current Profile"
              className="w-24 h-24 rounded-full object-cover mb-2 border"
            />
            <p className="text-sm text-gray-500">Current Profile Picture</p>
          </div>

          {/* New Profile Picture Upload */}
          <div className="flex flex-col items-center">
            {newPreview && (
              <img
                src={newPreview}
                alt="New Profile Preview"
                className="w-24 h-24 rounded-full object-cover mb-2 border"
              />
            )}
            <label className="cursor-pointer text-purple-600 font-semibold hover:underline">
              Upload New Profile Picture
              <input
                type="file"
                accept="image/*"
                onChange={handleNewFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formUser.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formUser.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formUser.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <textarea
              name="address"
              value={formUser.address}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Save Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
