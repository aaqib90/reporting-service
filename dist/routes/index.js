"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 100 });
exports.route = (0, express_1.Router)();
const puppeteer_1 = __importDefault(require("../util/puppeteer"));
let page;
(0, puppeteer_1.default)().then((p) => {
    page = p;
});
/**
 * Generate pdf api - id as query param
 */
exports.route.post("/generate-pdf", (req, res) => {
    console.log("Generate pdf trigger for id : ", req.query.id);
    const body = req.body;
    let pdfId = parseInt(req.query.id);
    myCache.set(pdfId, body, 10000);
    printPDF(pdfId)
        .then((pdf) => {
        // res.set({
        //   "Content-Type": "application/pdf",
        //   "Content-Length": pdf.length,
        // });
        const data = pdf.toString("base64");
        res.send({ data: data });
    })
        .then(() => {
        myCache.del(pdfId);
    })
        .catch((err) => {
        console.log(err);
    });
});
/**
 * Get the json for report generation api - id as query param
 */
exports.route.get("/get-report-json", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let pdfId = parseInt(req.query.id);
    let value = myCache.get(pdfId);
    res.send(value);
}));
/**
 * Prints the page in pdf form
 * @param pdfId
 * @returns pdf
 */
function printPDF(pdfId) {
    return __awaiter(this, void 0, void 0, function* () {
        const patientOverviewPageURL = `https://rpsvc.herokuapp.com/#/patient-overview/${pdfId}`;
        yield Promise.all([
            yield page.goto(patientOverviewPageURL, {
                waitUntil: "load",
            }),
            yield page.waitForNetworkIdle(patientOverviewPageURL),
        ]);
        const pdf = yield page.pdf({
            format: "A4",
            margin: {
                top: "10px",
                bottom: "30px",
            },
        });
        //await browser.close();
        return pdf;
    });
}
