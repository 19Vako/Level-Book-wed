const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();
app.use(express.static("public"));
app.use(express.json());

const client = new MongoClient("mongodb+srv://frymendzordan:rPyULAdW1YhHjELk@cluster0.uiznyg9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

(async () => {
  try {
    await client.connect();
    app.locals.db = client.db("Level_Book");
    app.listen(3000, () => {
      console.log("Сервер запущений на порту 3000...");
    });
  } catch (err) {
    console.log('Проблема з підключенням до серверу!', err);
  }
})();


app.get("/LB/users", async (req, res) => {
  const usersCollection = req.app.locals.db.collection("users");

  try {
    const users = await usersCollection.find({}).toArray();
    console.log("Отримані користувачі: ", users); // Додаємо логування для перевірки отриманих даних
    res.status(200).json(users);
  } catch (err) {
    console.error("Помилка отримання даних з колекції 'users':", err); // Логування помилок у консолі
    res.status(500).json({ message: "Проблема з отриманням даних!" });
  }
});



app.post("/LB/Sign_in", async(req, res) => {

  const usersCollection = req.app.locals.db.collection("users");

  try {
    const user = { name: 'Scopi', age: 18 }
    await usersCollection.insertOne(user)
    res.send('користувач зареєстрований')
  }catch{
    console.log("користувач не доданий до колекції")
  }
  
})

