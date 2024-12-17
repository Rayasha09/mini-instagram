// src/components/Profile.js
import React from "react";

function Profile({ user, posts }) {
  return (
    <div className="profile">
      {/* <h2>Профиль пользователя {user.username}</h2>
      <img src={user.avatarUrl} alt={`${user.username}'s avatar`} />
      <p>{user.bio}</p>

      <h3>Посты пользователя</h3>
      <div className="user-posts">
        {posts.filter(post => post.username === user.username).map((post, index) => (
          <div key={index} className="post">
            <img src={post.photoUrl} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Profile;
