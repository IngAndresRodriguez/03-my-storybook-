"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedOut = exports.LoggedIn = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Header_1 = require("./Header");
exports.default = {
    title: 'Example/Header',
    component: Header_1.Header,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};
const Template = (args) => (0, jsx_runtime_1.jsx)(Header_1.Header, { ...args });
exports.LoggedIn = Template.bind({});
exports.LoggedIn.args = {
    user: {
        name: 'Jane Doe',
    },
};
exports.LoggedOut = Template.bind({});
exports.LoggedOut.args = {};
