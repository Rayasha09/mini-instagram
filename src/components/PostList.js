import React, { useState } from "react";
import Post from "./Post";
import AddPost from "./AddPost";

function PostList() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "bayanabakyt",
      photoUrl: "https://via.placeholder.com/300",
      caption: "Первый пост в моей мини-соцсети!",
    },
    {
      id: 2,
      username: "alex",
      photoUrl: "https://via.placeholder.com/300",
      caption: "Привет из Алматы!",
    },
  ]);

  const addPost = (newPost) => {
    const postWithId = { ...newPost, id: posts.length + 1 };
    setPosts([postWithId, ...posts]);
  };

  return (
    <div>
      <AddPost onAddPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          photoUrl={post.photoUrl}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default PostList;