"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedIn = exports.LoggedOut = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const testing_library_1 = require("@storybook/testing-library");
const Page_1 = require("./Page");
exports.default = {
    title: 'Example/Page',
    component: Page_1.Page,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};
const Template = (args) => (0, jsx_runtime_1.jsx)(Page_1.Page, { ...args });
exports.LoggedOut = Template.bind({});
exports.LoggedIn = Template.bind({});
// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
exports.LoggedIn.play = async ({ canvasElement }) => {
    const canvas = (0, testing_library_1.within)(canvasElement);
    const loginButton = await canvas.getByRole('button', { name: /Log in/i });
    await testing_library_1.userEvent.click(loginButton);
};
