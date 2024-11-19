const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const fileName = 'database.db';

if (!fs.existsSync(fileName)) {
  console.log(`Файл ${fileName} не существует. Создаём файл и подключаем базу данных.`);
  fs.writeFileSync(fileName, '');
} else {
  console.log(`Файл ${fileName} уже существует.`);
}

const db = new sqlite3.Database(fileName, (err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err.message);
    return;
  }
  console.log('Подключено к базе данных SQLite');
});

db.run(
  `CREATE TABLE IF NOT EXISTS data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT,
      area TEXT
  )`,
  (err) => {
    if (err) {
      console.error('Ошибка создания таблицы:', err.message);
    }
  }
);

app.post('/api/save', (req, res) => {
  console.log('Полученные данные:', req.body);
  const { input, area } = req.body;

  if (!input || !area) {
    return res.status(400).send({ error: 'Некорректные данные' });
  }

  const query = `INSERT INTO data (email, area) VALUES (?, ?)`;
  db.run(query, [input, area], (err) => {
    if (err) {
      console.error('Ошибка сохранения данных:', err.message);
      return res.status(500).json({ error: 'Ошибка сохранения данных' });
    }
    console.log('Данные успешно сохранены:', req.body);
    res.json({ id: this.lastID, input, area });
  });
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});