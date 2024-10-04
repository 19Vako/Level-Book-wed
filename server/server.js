const express = require("express");
const mongoose = require("mongoose");
const { UserScheme } = require("./schema.tsx"); 


const app = express();
app.use(express.static("public"));
app.use(express.json());



// Подключение к MongoDB с использованием Mongoose
const URL = "mongodb+srv://frymendzordan:rPyULAdW1YhHjELk@cluster0.uiznyg9.mongodb.net/Level_Book?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB is connected!");
  })
  .catch((err) => {
    console.log("Error connecting to DB:", err);
  });



// Запуск сервера
app.listen(3000, () => {
  console.log("Server is started on port 3000");
});



// GET-запрос для получения всех пользователей
app.get("/LB/users", async (req, res) => {
  try {
    const users = await UserScheme.find({}); // Используем модель для получения всех пользователей
    console.log("Отримані користувачі: ", users); // Логируем полученных пользователей
    res.status(200).json(users); // Отправляем ответ с пользователями
  } catch (err) {
    console.error("Помилка отримання даних з колекції 'users':", err); // Логируем ошибки
    res.status(500).json({ message: "Проблема з отриманням даних!" });
  }
});




// POST-запрос для регистрации нового пользователя
app.post("/LB/Sign_up", async (req, res) => {
  try {
    const { name } = req.body; // Получаем имя пользователя из тела запроса
    if (!name) {
      return res.status(400).json({ message: "Ім'я обов'язкове!" }); // Проверяем наличие имени
    }

    const newUser = await UserScheme.create({ name }); // Создаем нового пользователя

    res.status(201).json({ message: "Користувач зареєстрований!", user: newUser }); // Отправляем ответ с данными нового пользователя
  } catch (err) {
    console.error("користувач не доданий до колекції", err); // Логируем ошибку
    res.status(500).json({ message: "Помилка при створенні користувача!" }); // Отправляем ответ с ошибкой
  }
});





