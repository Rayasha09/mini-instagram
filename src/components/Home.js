import React from "react";
import Post from "./Post";

function Home({ posts }) {
  return (
    <div className="home" id="home">
      <h1 style={{textAlign: "center"}}>Добро пожаловать в VibePics!</h1>
      <p style={{textAlign:"center"}}>Здесь можно создавать и просматривать посты с фото и комментариями.</p>

      <div className="posts-list">
        {posts.length === 0 ? (
          <p>Пока нет постов, создайте свой первый!</p>
        ) : (
          posts.map((post, index) => (
            <Post
              key={index}
              username={post.username}
              photoUrl={post.photoUrl}
              caption={post.caption}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
