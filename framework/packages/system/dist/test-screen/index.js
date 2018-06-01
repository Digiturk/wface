"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WFace = require("@wface/components");
class TestScreen extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(WFace.WGrid, { container: true },
                React.createElement(WFace.WGrid, { item: true, xs: 12, md: 4 },
                    React.createElement(WFace.WCard, null,
                        React.createElement(WFace.WCardHeader, { title: "Test Bilgileri" }),
                        React.createElement(WFace.WCardContent, null,
                            React.createElement(WFace.WTextField, { label: "Ad\u0131", fullWidth: true }),
                            React.createElement(WFace.WTextField, { label: "Soyad\u0131", fullWidth: true })))))));
    }
}
exports.TestScreen = TestScreen;
