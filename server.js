const express = require('express');
const path = require('path');
const app = express();


const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


const characters = [{
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  }, {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  }, {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Knight",
    age: 60,
    forcePoints: 1350
}];

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")))
app.get("/api/characters", (req, res) => res.json(characters))

app.get("/add", (req, res) => res.sendFile(path.join(__dirname, "public/me.html")))

app.get("/api/characters/:character", (req, res) => {
    const chosen = req.params.character;
    const found = characters.find(char => chosen === char.routeName)

    if(found) {
        return res.json(found)
    }
    return  res.send('no')
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))