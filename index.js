import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyparser.json());

appp.listen(PORT, () => console.log(`Server ruunning on port: http://localhost${PORT}`));