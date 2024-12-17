import React, { useState } from "react";
import Mini from "./Mini"; // Возможно, этот компонент отображает мини-версию приложения
import Instagram from "./components/Instagram"; // Например, главная страница
import Home from "./components/Home"; // Домашняя страница
import Profile from "./components/Profile"; // Профиль пользователя
import AddPost from "./components/AddPost"; // Форма для добавления поста
import Header from "./components/Header"; // Верхняя часть приложения
import Footer from "./components/Footer"; // Нижняя часть приложения
import postImg1 from "./image/broo.jpg"
import postImg2 from "./image/park.jpg"
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { username: "user1", photoUrl: postImg1, caption: "First Post" },
    { username: "user2", photoUrl: postImg2, caption: "Another Post" },
  ]);

  const [user] = useState({
    username: "Пользователь",
    avatarUrl: "https://via.placeholder.com/100", // Место для изображения аватара
    bio: "This is user1's bio.",
  });

  const addPost = (post) => {
    setPosts([post, ...posts]); // Добавляем новый пост
  };

  return (
    <div className="app">
      <Header /> {/* Хедер приложения */}

      <div className="app-body">
        {/* Добавляем главный контент приложения */}
        <Home posts={posts} /> {/* Главная страница с лентой постов */}
        <AddPost onAddPost={addPost} /> {/* Форма для добавления нового поста */}
        <Profile user={user} posts={posts} /> {/* Профиль пользователя */}
        <Mini /> {/* Мини-версия или дополнительный функционал */}
        <Instagram /> {/* Вкладка с отдельной логикой или отображением */}
      </div>

      <Footer /> {/* Футер приложения */}
    </div>
  );
}

export default App;
