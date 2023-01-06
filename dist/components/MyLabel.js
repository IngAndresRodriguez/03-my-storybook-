"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
const MyLabel = ({ label = 'No Label', size = 'normal', color = 'primary', allCaps = false, fontColor, backgroundColor = 'transparent' }) => {
    return ((0, jsx_runtime_1.jsx)("span", { className: ['label', size, `text-${color}`, fontColor].join(' '), style: {
            color: fontColor,
            backgroundColor
        }, children: (allCaps) ? label.toUpperCase() : label }));
};
exports.MyLabel = MyLabel;
