import 'reflect-metadata';
import dotenv from 'dotenv';
import application from './application';
import * as http from 'http';

dotenv.config();
const port = process.env.PORT || 3000;
const server = http.createServer(application.instance);

server.listen(port, () => {
  console.log(`Server is listening on :${port}`);
});
