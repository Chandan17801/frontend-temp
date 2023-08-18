import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="relative w-48 h-48 mx-auto overflow-hidden border rounded-lg shadow-md transition-transform transform hover:scale-105">
      <img
        src={user.avatar}
        alt={user.name}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-end p-4 bg-black bg-opacity-50 text-white">
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-sm">{user.bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
