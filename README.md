# aureliauth-sample
Sample application using the [aureliauth plugin](https://github.com/paulvanbladel/aureliauth).
Uses a NodeJs backend with mongoDb.
## Prerequisites
1. NodeJs
2. Jspm
3. You need an running MongoDb server.
4. Gulp

## How to run?

1. cd client
2. npm install
3. jspm install
4. update authConfig.js with your own clientIds
5. cd ../server
6. npm install
7. create under /server/config a file called config.development.js and copy the content from config.production.js and update the security values. Change in config.development.js the nodejos port from 10000 to 5000
8. cd ../client
9. gulp watch
10. Open an browser with http://localhost:4000
11.


