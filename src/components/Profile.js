import React from "react";
import "./Profile.css";
import avatar from "../components/362_1719311002.jpg"
import luboy from "../components/dog.jpg"
import chto from "../components/mini.jpg"

function Profile({ user, posts }) {
  return (
    <div className="profile-container" id="profile">
      {/* Информация о пользователе */}
      <div className="profile-header">
        <img
          src={avatar}
          alt={`${user.username}'s avatar`}
          className="profile-avatar"
        />
        <h2 className="profile-username">{user.username}</h2>
        <p className="profile-status">“Живи моментом. Делись атмосферой.”</p>
      </div>

      {/* Статистика */}
      <div className="profile-stats">
        <div className="stats-item">
          <h3>{posts.length}</h3>
          <p>Посты</p>
        </div>
        <div className="stats-item">
          <h3>150</h3>
          <p>Подписчики</p>
        </div>
        <div className="stats-item">
          <h3>200</h3>
          <p>Подписки</p>
        </div>
      </div>

      {/* Список постов */}
      <div className="profile-posts">
        <h3>Мои публикации</h3>
        {posts.length > 0 ? (
          <div className="posts-grid">
            {posts.map((post, index, photoUrl) => (
              <div key={index} className="post-item">
                <img
                  src={post.photoUrl}
                  alt={`Post ${index + 1}`}
                  className="post-image"
                />
                <p className="post-caption">{post.caption}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-posts-message">Пока нет публикаций.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
