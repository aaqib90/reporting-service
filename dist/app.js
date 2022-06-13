"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = 3001;
const PORT = 3001;
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
/**
 * parse  json from request body
 */
app.use(express_1.default.json());
/**
 * ping hello world
 */
app.get('/toto', (req, res) => {
    res.send('Hello toto');
});
/**
 * importing routes
 */
app.use('/api', routes_1.route);
app.use('/', express_1.default.static(path_1.default.join(__dirname, '../public')));
/**
 * Listener
 */
app.listen(PORT, ip, function () {
    console.log(`App is listening on port ${PORT} and host ${ip} !`);
});
