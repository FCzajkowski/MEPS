import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view', 'home.html'));
});



const _PORT = 3000
app.listen(_PORT, () => {
    console.log('Serwer działa na http://localhost:3000');
});