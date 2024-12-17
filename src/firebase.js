// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Добавьте импорт для auth

// Вставьте сюда вашу конфигурацию Firebase
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Получаем ссылки на базы данных и авторизацию
const db = getFirestore(app);
const auth = getAuth(app);  // Инициализация auth

// Отключаем кэширование (для использования в оффлайн-режиме)
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.log('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      console.log('Persistence is not available in this environment.');
    }
  });

// Экспортируем db и auth для использования в других файлах
export { db, auth };
