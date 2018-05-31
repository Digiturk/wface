"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class TestScreen extends React.Component {
    render() {
        return (React.createElement("div", null,
            this.props.pageInfo.text,
            " works",
            React.createElement("br", null),
            this.props.userContext.displayName));
    }
}
exports.TestScreen = TestScreen;
