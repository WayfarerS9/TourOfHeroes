import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const app = express();
const jsonParser = express.json();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const JWT_Secret = 'my_secret_key';

const generateAccessToken = (name) => {
    const payload = {
        name: name
    }
    return jwt.sign(payload, JWT_Secret, {expiresIn: 60 * 60});
}

app.use(cors());
app.use(bodyParser.json());

function authMiddleware(req, res, next) {

    try {
        const token = req.headers['authorization'].split(' ')[1];

        if(!token) {
            return res.status(403).json({ message: 'Unauthorizated user' })
        }
        const decodedData = jwt.verify(token, JWT_Secret);
        req.user = decodedData;
        next();

    } catch (e) {
        console.log(e);
        return res.status(403).json({ message: 'Unauthorizated user' });
    }
}

/* app.use(function(req, res, next){

    if (req.method === 'PUT') {

        authMiddleware(req, res, next)
    }

    next()

}); */












app.post('/auth', async (req, res) => {

    if (req.body) {
        let isRegistrated = false;
        let user = req.body;
        let data = JSON.parse(await fs.promises.readFile('users.json', "utf8"));

        for(let el of data) {

            if(el.name === user.name) {

                if(el.email === user.email) {
                    isRegistrated = true;
                    break;
                }
            }
        }

        if (isRegistrated) {
            let token = generateAccessToken(user.name);
            res.status(200).send({
                signed_user: user,
                token: `Bearer ${token}`
            });
        } else {
            res.status(401).send({
                errorMessage: 'Authorisation required!'
            });
        }

    } else {
        res.status(403).send({
            errorMessage: 'Please type email and password'
        });
    }
});

app.get('/heroes/', authMiddleware, async (req, res) => {

    const content = await fs.promises.readFile('heroes.json', 'utf8');
    res.send(content);
})

app.get('/hero/:id', authMiddleware, async (req, res) => {
    const id = req.params.id;
    const content = await fs.promises.readFile('heroes.json', 'utf8');
    const heroes = JSON.parse(content);
    let hero = null;

    for (let el of heroes) {

        if (el.id == id) {
            hero = el;
            break;
        }
    }

    res.send(hero);
})

app.delete('/hero/:id', authMiddleware, async function(req, res){
    const id = req.params.id;
    let data = await fs.promises.readFile('heroes.json', "utf8");
    let heroes = JSON.parse(data);
    let index = -1;

    for (let el of heroes) {
        index++;

        if (el.id == id) {
            heroes.splice(index, 1);
            data = JSON.stringify(heroes);
            await fs.promises.writeFile("heroes.json", data);
            break;
        };
    };

    res.send();
});

app.post('/hero', authMiddleware, jsonParser, async function (req, res) {

    const heroName = req.body.name;
    const heroRace = req.body.race;
    const heroType = req.body.type;
    const heroLevel = req.body.level;
    const heroPower = req.body.power;

    let data = await fs.promises.readFile('heroes.json', "utf8");
    let heroes = JSON.parse(data);
    let id = 1;

    for (let el of heroes) {

        if(el.id > id) id = el.id
    }

    let hero = {id: id + 1,
                name: heroName,
                race: heroRace,
                type: heroType,
                level: heroLevel,
                power: heroPower};

    heroes.push(hero);
    data = JSON.stringify(heroes);

    await fs.promises.writeFile("heroes.json", data);
    res.send(hero);
});

app.put("/hero/", authMiddleware, jsonParser, async function(req, res){

    const heroId = req.body.id;
    const heroName = req.body.name;
    const heroRace = req.body.race;
    const heroType = req.body.type;
    const heroLevel = req.body.level;
    const heroPower = req.body.power;

    let data = await fs.promises.readFile('heroes.json', "utf8");
    const heroes = JSON.parse(data);

    for(let el of heroes){

        if(el.id == heroId){
            el.name = heroName;
            el.race = heroRace;
            el.type = heroType;
            el.level = heroLevel;
            el.power = heroPower;
            data = JSON.stringify(heroes);
            break;
        }
    }

    await fs.promises.writeFile('heroes.json', data);
    res.send();
});

app.listen(3000, function(){
    console.log("app is served");
});




