require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const {BooksA1, BooksA2, BooksB1, BooksB2, BooksC1, BooksC2, UserScheme } = require("./schema.tsx"); 
const env = process.env

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors())

// Подключение к MongoDB с использованием Mongoose
mongoose.connect(env.Mongo_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB is connected!");
  })
  .catch((err) => {
    console.log("Error connecting to DB:", err);
  });



// Запуск сервера
app.listen(env.PORT, () => {
  console.log("Server is started on port 3000");
});



// GET-запрос для получения всех пользователей
app.get(env.GetUsers, async (_, res) => {
  try {
    const users = await UserScheme.find({}); // Используем модель для получения всех пользователей
    console.log("Отримані користувачі: ", users); // Логируем полученных пользователей
    res.status(200).json(users); // Отправляем ответ с пользователями
  } catch (err) {
    console.error("Помилка отримання даних з колекції 'users':", err); // Логируем ошибки
    res.status(500).json({ message: "Проблема з отриманням даних!" });
  }
});


app.get(env.GetA1, async (_, res) => {
    try{
      const books = await BooksA1.find({});
      console.log(books)
      res.status(200).json(books)
    }
    catch {
      res.status(404).json({ message: "Проблема з базою даних А1"})
    }
})




// POST-запрос для регистрации нового пользователя
app.post(env.Registration, async (req, res) => {
  try {
    const { name } = req.body; // Получаем имя пользователя из тела запроса
    if (!name) {
      res.status(400).json({ message: "Ім'я обов'язкове!" }); // Проверяем наличие имени
    }

    const newUser = await UserScheme.create({ name }); // Создаем нового пользователя
    res.status(201).json({ message: "Користувач зареєстрований!", user: newUser }); // Отправляем ответ с данными нового пользователя
  } catch (err) {
    console.error("користувач не доданий до колекції", err); // Логируем ошибку
    res.status(500).json({ message: "Помилка при створенні користувача!" }); // Отправляем ответ с ошибкой
  }
});






