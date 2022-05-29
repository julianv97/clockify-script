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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/* eslint-disable no-continue */
/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
var puppeteer = require("puppeteer");
var constants_1 = require("./constants");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, page, _a, _b, _c, timesheetButton, listOfHoursInputs, i, listOfDotsButtons, i;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, puppeteer.launch({ headless: false })];
            case 1:
                browser = _d.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _d.sent();
                return [4 /*yield*/, page.goto('https://app.clockify.me/en/login')];
            case 3:
                _d.sent();
                return [4 /*yield*/, page.waitForSelector('#email')];
            case 4:
                _d.sent();
                return [4 /*yield*/, page.waitForSelector('#password')];
            case 5:
                _d.sent();
                _b = (_a = Promise).all;
                return [4 /*yield*/, page.type('#email', 'julian.vicente@radiumrocket.com')];
            case 6:
                _c = [
                    _d.sent()
                ];
                return [4 /*yield*/, page.type('#password', 'Holacomova?97')];
            case 7:
                _b.apply(_a, [_c.concat([
                        _d.sent()
                    ])]);
                return [4 /*yield*/, page.click('button[type="submit"]')];
            case 8:
                _d.sent();
                return [4 /*yield*/, page.waitForSelector('.cl-navbar-toggler')];
            case 9:
                _d.sent();
                return [4 /*yield*/, page.click('.cl-navbar-toggler')];
            case 10:
                _d.sent();
                return [4 /*yield*/, page.waitForSelector('a[routerlink="/timesheet"]')];
            case 11:
                _d.sent();
                return [4 /*yield*/, page.$('a[routerlink="/timesheet"]')];
            case 12:
                timesheetButton = _d.sent();
                return [4 /*yield*/, page.evaluate(function (element) {
                        element.click();
                    }, timesheetButton)];
            case 13:
                _d.sent();
                return [4 /*yield*/, page.waitForSelector('.timesheet-row-component.ng-star-inserted')];
            case 14:
                _d.sent();
                return [4 /*yield*/, page.click('#layout-main > timesheet2 > div > div > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td > div > a')];
            case 15:
                _d.sent();
                return [4 /*yield*/, page.$$('time-duration > input')];
            case 16:
                listOfHoursInputs = _d.sent();
                i = 0;
                _d.label = 17;
            case 17:
                if (!(i < constants_1.LABORABLE_DAYS)) return [3 /*break*/, 22];
                if (constants_1.TASKS_PER_DAY[i] === constants_1.DAYS_TYPES.FERIADO) {
                    return [3 /*break*/, 21];
                }
                return [4 /*yield*/, listOfHoursInputs[i].click({ clickCount: 3 })];
            case 18:
                _d.sent();
                return [4 /*yield*/, listOfHoursInputs[i].press('Backspace')];
            case 19:
                _d.sent();
                return [4 /*yield*/, listOfHoursInputs[i].type(constants_1.HOURS_PER_DAY)];
            case 20:
                _d.sent();
                _d.label = 21;
            case 21:
                i += 1;
                return [3 /*break*/, 17];
            case 22: return [4 /*yield*/, page.$$('time-duration > a')];
            case 23:
                listOfDotsButtons = _d.sent();
                i = 0;
                _d.label = 24;
            case 24:
                if (!(i < constants_1.LABORABLE_DAYS)) return [3 /*break*/, 30];
                if (constants_1.TASKS_PER_DAY[i] === constants_1.DAYS_TYPES.FERIADO) {
                    return [3 /*break*/, 29];
                }
                return [4 /*yield*/, page.evaluate(function (element) {
                        element.click();
                    }, listOfDotsButtons[i])];
            case 25:
                _d.sent();
                return [4 /*yield*/, page.type('#descriptionName', constants_1.TASKS_PER_DAY[i])];
            case 26:
                _d.sent();
                return [4 /*yield*/, page.click('.cl-btn.cl-btn-primary')];
            case 27:
                _d.sent();
                if (!(i < 4)) return [3 /*break*/, 29];
                return [4 /*yield*/, page.waitForTimeout(8000)];
            case 28:
                _d.sent();
                _d.label = 29;
            case 29:
                i += 1;
                return [3 /*break*/, 24];
            case 30:
                browser.close();
                return [2 /*return*/];
        }
    });
}); })();
