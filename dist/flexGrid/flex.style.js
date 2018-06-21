"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  &.flex-grid {\n    position: relative;\n    display: flex;\n    max-width: ", "px;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    width: 100%;\n\n    &.flex-grid-container {\n      margin: 0 -", "px;\n\n      > .flex-item {\n        padding: 0 ", "px;\n      }\n    }\n  }\n"], ["\n  &.flex-grid {\n    position: relative;\n    display: flex;\n    max-width: ", "px;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    width: 100%;\n\n    &.flex-grid-container {\n      margin: 0 -", "px;\n\n      > .flex-item {\n        padding: 0 ", "px;\n      }\n    }\n  }\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject, function (props) {
  return (props.theme.dimensions || {}).containerWidth || 1200;
}, function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
});