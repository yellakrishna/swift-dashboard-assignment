import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  if (!user) {
    return (
      <div className="loading-screen">
        <h3>Loading profile...</h3>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="navbar">
        <div className="logo">SWIFT</div>
        <div className="nav-user-initials">
          {user.name.slice(0, 2).toUpperCase()}
        </div>
      </div>

      <div className="profile-container">
        <Link to="/" className="back-link">
          &larr; Welcome, {user.name}
        </Link>

        <div className="profile-header">
          <div className="profile-avatar">
            {user.name.slice(0, 2).toUpperCase()}
          </div>
          <div className="profile-user-info">
            <div className="profile-name">{user.name}</div>
            <div className="profile-email">{user.email}</div>
          </div>
        </div>

        <div className="profile-fields">
          <div>
            <span>User ID:</span> {user.id}
          </div>
          <div>
            <span>Name:</span> {user.name}
          </div>
          <div>
            <span>Email ID:</span> {user.email}
          </div>
          <div>
            <span>Address:</span> {user.address.street}, {user.address.city}
          </div>
          <div>
            <span>Phone:</span> {user.phone}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
