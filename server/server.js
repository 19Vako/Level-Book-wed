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
  console.log(`Server is started on port ${env.PORT}`);
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


app.post(env.Registration, async (req, res) => {

  try {
    const { name, password } = req.body; 
    const find = await UserScheme.find({name, password})

    if(!find){
      const newUser = await UserScheme.create({ name, password }); 
      res.status(201).json({ message: "Користувач зареєстрований!", user: newUser });
    }
    else{
      console.log('Користувач вже зареєстрований')
      res.status(500).json({ message: "Користувач вже зареєстрований"})
    }

  } catch (err) {
    console.error("користувач не доданий до колекції", err); 
    res.status(500).json({ message: "Помилка при створенні користувача!" }); 
  }

});


app.post(env.LogIn, async (req, res) => {
   try{
    const { name, password } = req.body
    
    const find = await UserScheme.find({name, password})
    if(find){
      console.log("Ви ввійшли в свій аккаунт")
      res.status(200).json(find)
    }
   }catch {
    console.log("Користувач не знайдений")
    res.status(404).json({massage: "Користувач не знайдений"})
   }
})





