/* eslint-disable */
import React, { createContext, useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Container$3 = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  background: red;\n"], ["\n  background: red;\n"])));
var templateObject_1$3;

var Example = function (_a) {
    var text = _a.text;
    return (React.createElement(Container$3, null,
        React.createElement("p", null, "Custom text:"),
        React.createElement("p", null, text)));
};

var CollapsibleContext = createContext({});
var CollapsibleProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggleCollapsible = function () {
        setIsOpen(function (isOpen) { return !isOpen; });
    };
    return (React.createElement(CollapsibleContext.Provider, { value: { isOpen: isOpen, toggleCollapsible: toggleCollapsible } }, children));
};

var Container$2 = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin: var(--collapsible-margin);\n\n  .collapsible-head {\n    background: var(--collapsible-head-background, #ddd);\n    color: var(--collapsible-head-color);\n    cursor: pointer;\n    font-weight: var(--collapsible-head-font-weight, 700);\n    padding: var(--collapsible-head-padding, 20px);\n    user-select: none;\n  }\n\n  .collapsible-body {\n    background: var(--collapsible-body-background, #eee);\n    color: var(--collapsible-body-color);\n    display: none;\n    padding: var(--collapsible-body-padding, 20px);\n\n    &--is-open {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin: var(--collapsible-margin);\n\n  .collapsible-head {\n    background: var(--collapsible-head-background, #ddd);\n    color: var(--collapsible-head-color);\n    cursor: pointer;\n    font-weight: var(--collapsible-head-font-weight, 700);\n    padding: var(--collapsible-head-padding, 20px);\n    user-select: none;\n  }\n\n  .collapsible-body {\n    background: var(--collapsible-body-background, #eee);\n    color: var(--collapsible-body-color);\n    display: none;\n    padding: var(--collapsible-body-padding, 20px);\n\n    &--is-open {\n      display: block;\n    }\n  }\n"])));
var templateObject_1$2;

var Collapsible = function (_a) {
    var children = _a.children;
    return (React.createElement(CollapsibleProvider, null,
        React.createElement(Container$2, null, children)));
};

var CollapsibleBody = function (_a) {
    var children = _a.children;
    var isOpen = useContext(CollapsibleContext).isOpen;
    var className = ['collapsible-body'];
    if (isOpen)
        className.push('collapsible-body--is-open');
    return React.createElement("div", { className: className.join(' ') }, children);
};

var CollapsibleHead = function (_a) {
    var children = _a.children;
    var toggleCollapsible = useContext(CollapsibleContext).toggleCollapsible;
    return (React.createElement("div", { onClick: toggleCollapsible, className: 'collapsible-head' }, children));
};

var Container$1 = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  // Toggle colours\n  --toggle-background: #ddd;\n  --toggleButton-background: #fff;\n  --toggle-background-checked: #2bb82b;\n\n  // Label\n  --toggleLabel-color: #333;\n  --toggleLabel-fontSize: 16px;\n  --toggleLabel-fontWeight: 400;\n  --toggleLabel-paddingLeft: 10px;\n  --toggleLabel-textTransform: none;\n\n  // Disabled\n  --toggleLabel-color-disabled: #ccc;\n  --toggle-background-disabled: #ddd;\n  --toggle-background-checkedDisabled: #ddd;\n\n  // Dimensions and layout\n  --toggleContainer-margin: 0;\n  --toggle-height: 25px;\n  --toggle-padding: 2px;\n  --toggle-width: calc(\n    (var(--toggle-height) * 2) - (var(--toggle-padding) * 2)\n  );\n  --toggleButton-height: calc(\n    var(--toggle-height) - (var(--toggle-padding) * 2)\n  );\n\n  margin: var(--toggleContainer-margin);\n  position: relative;\n\n  label {\n    align-items: center;\n    color: var(--toggleLabel-color);\n    cursor: pointer;\n    display: flex;\n    font-size: var(--toggleLabel-fontSize);\n    font-weight: var(--toggleLabel-fontWeight);\n    margin-left: var(--toggle-width);\n    min-height: var(--toggle-height);\n    padding-left: var(--toggleLabel-paddingLeft);\n    text-transform: var(--toggleLabel-textTransform);\n    user-select: none;\n\n    &::before,\n    &::after {\n      border-radius: 5px;\n      content: '';\n      left: 0;\n      position: absolute;\n      top: 0;\n    }\n\n    // Toggle off\n    &::before {\n      background: var(--toggle-background);\n      height: var(--toggle-height);\n      width: var(--toggle-width);\n    }\n\n    &::after {\n      background: var(--toggleButton-background);\n      height: var(--toggleButton-height);\n      left: 0;\n      top: var(--toggle-padding);\n      transform: translateX(var(--toggle-padding));\n      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n      width: var(--toggleButton-height);\n    }\n  }\n\n  // Toggle on\n  input:checked + label {\n    &::before {\n      background: var(--toggle-background-checked);\n    }\n\n    // Move circle control to right when checked\n    &::after {\n      transform: translateX(calc(var(--toggle-width) / 2));\n    }\n  }\n\n  // Disabled\n  &.disabled {\n    label {\n      color: var(--toggleLabel-color-disabled);\n      cursor: default;\n\n      &::before {\n        background: var(--toggle-background-disabled);\n      }\n\n      &:checked + label::before {\n        background: var(--toggle-background-checkedDisabled);\n      }\n    }\n  }\n\n  // Accessibility\n  input {\n    height: var(--toggle-height);\n    margin: 0;\n    opacity: 0;\n    padding: 0;\n    position: absolute;\n    width: var(--toggle-width);\n\n    &:focus {\n      + label::before {\n        outline: 2px auto -webkit-focus-ring-color;\n        outline-offset: 2px;\n      }\n\n      &:not(:focus-visible) + label::before {\n        outline: none;\n      }\n    }\n  }\n"], ["\n  // Toggle colours\n  --toggle-background: #ddd;\n  --toggleButton-background: #fff;\n  --toggle-background-checked: #2bb82b;\n\n  // Label\n  --toggleLabel-color: #333;\n  --toggleLabel-fontSize: 16px;\n  --toggleLabel-fontWeight: 400;\n  --toggleLabel-paddingLeft: 10px;\n  --toggleLabel-textTransform: none;\n\n  // Disabled\n  --toggleLabel-color-disabled: #ccc;\n  --toggle-background-disabled: #ddd;\n  --toggle-background-checkedDisabled: #ddd;\n\n  // Dimensions and layout\n  --toggleContainer-margin: 0;\n  --toggle-height: 25px;\n  --toggle-padding: 2px;\n  --toggle-width: calc(\n    (var(--toggle-height) * 2) - (var(--toggle-padding) * 2)\n  );\n  --toggleButton-height: calc(\n    var(--toggle-height) - (var(--toggle-padding) * 2)\n  );\n\n  margin: var(--toggleContainer-margin);\n  position: relative;\n\n  label {\n    align-items: center;\n    color: var(--toggleLabel-color);\n    cursor: pointer;\n    display: flex;\n    font-size: var(--toggleLabel-fontSize);\n    font-weight: var(--toggleLabel-fontWeight);\n    margin-left: var(--toggle-width);\n    min-height: var(--toggle-height);\n    padding-left: var(--toggleLabel-paddingLeft);\n    text-transform: var(--toggleLabel-textTransform);\n    user-select: none;\n\n    &::before,\n    &::after {\n      border-radius: 5px;\n      content: '';\n      left: 0;\n      position: absolute;\n      top: 0;\n    }\n\n    // Toggle off\n    &::before {\n      background: var(--toggle-background);\n      height: var(--toggle-height);\n      width: var(--toggle-width);\n    }\n\n    &::after {\n      background: var(--toggleButton-background);\n      height: var(--toggleButton-height);\n      left: 0;\n      top: var(--toggle-padding);\n      transform: translateX(var(--toggle-padding));\n      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n      width: var(--toggleButton-height);\n    }\n  }\n\n  // Toggle on\n  input:checked + label {\n    &::before {\n      background: var(--toggle-background-checked);\n    }\n\n    // Move circle control to right when checked\n    &::after {\n      transform: translateX(calc(var(--toggle-width) / 2));\n    }\n  }\n\n  // Disabled\n  &.disabled {\n    label {\n      color: var(--toggleLabel-color-disabled);\n      cursor: default;\n\n      &::before {\n        background: var(--toggle-background-disabled);\n      }\n\n      &:checked + label::before {\n        background: var(--toggle-background-checkedDisabled);\n      }\n    }\n  }\n\n  // Accessibility\n  input {\n    height: var(--toggle-height);\n    margin: 0;\n    opacity: 0;\n    padding: 0;\n    position: absolute;\n    width: var(--toggle-width);\n\n    &:focus {\n      + label::before {\n        outline: 2px auto -webkit-focus-ring-color;\n        outline-offset: 2px;\n      }\n\n      &:not(:focus-visible) + label::before {\n        outline: none;\n      }\n    }\n  }\n"])));
var templateObject_1$1;

var ToggleSwitch = function (_a) {
    var id = _a.id, label = _a.label, disabled = _a.disabled, checked = _a.checked, onChange = _a.onChange;
    return (
    // TODO: Pass `disabled` class to `Container`
    React.createElement(Container$1, null,
        React.createElement("input", { type: 'checkbox', id: id, name: id, disabled: disabled, checked: checked, onChange: onChange }),
        React.createElement("label", { htmlFor: id }, label)));
};

var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .wrapper {\n    position: relative;\n    margin: 40px 0;\n  }\n\n  pre {\n    border-radius: 4px 0 4px 4px;\n    padding: 20px;\n    position: relative;\n    overflow-x: auto;\n    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAaCAMAAABigZc2AAAACVBMVEX///8AAAD///9+749PAAAAAXRSTlMAQObYZgAAAFpJREFUeNp9jUEOwEAIAhn+/+imjbs1bC0XzQioSUAAYZs0mcVY051RbGXfFsyxibTVHXhuhXYlbuRGPbe7kz3g0wf679OuizDBdCaberLE4AsjGliD02eNugA+MQFAPqynHQAAAABJRU5ErkJggg==),\n      auto;\n  }\n\n  .lang-tab {\n    border-radius: 4px 4px 0 0;\n    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',\n      'Courier New', monospace;\n    font-size: 14px;\n    font-weight: 600;\n    padding: 4px 12px;\n    position: absolute;\n    text-transform: uppercase;\n    top: 0;\n    transform: translateY(-100%);\n    right: 0;\n  }\n\n  textarea {\n    bottom: 10px;\n    height: 1px;\n    left: 10px;\n    position: absolute;\n    width: 1px;\n    z-index: -1;\n  }\n"], ["\n  .wrapper {\n    position: relative;\n    margin: 40px 0;\n  }\n\n  pre {\n    border-radius: 4px 0 4px 4px;\n    padding: 20px;\n    position: relative;\n    overflow-x: auto;\n    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAaCAMAAABigZc2AAAACVBMVEX///8AAAD///9+749PAAAAAXRSTlMAQObYZgAAAFpJREFUeNp9jUEOwEAIAhn+/+imjbs1bC0XzQioSUAAYZs0mcVY051RbGXfFsyxibTVHXhuhXYlbuRGPbe7kz3g0wf679OuizDBdCaberLE4AsjGliD02eNugA+MQFAPqynHQAAAABJRU5ErkJggg==),\n      auto;\n  }\n\n  .lang-tab {\n    border-radius: 4px 4px 0 0;\n    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',\n      'Courier New', monospace;\n    font-size: 14px;\n    font-weight: 600;\n    padding: 4px 12px;\n    position: absolute;\n    text-transform: uppercase;\n    top: 0;\n    transform: translateY(-100%);\n    right: 0;\n  }\n\n  textarea {\n    bottom: 10px;\n    height: 1px;\n    left: 10px;\n    position: absolute;\n    width: 1px;\n    z-index: -1;\n  }\n"])));
var templateObject_1;

// Original: https://github.com/dracula/visual-studio-code
// Converted automatically using ./tools/themeFromVsCode
var theme = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#282A36"
  },
  styles: [{
    types: ["prolog", "constant", "builtin"],
    style: {
      color: "rgb(189, 147, 249)"
    }
  }, {
    types: ["inserted", "function"],
    style: {
      color: "rgb(80, 250, 123)"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgb(255, 85, 85)"
    }
  }, {
    types: ["changed"],
    style: {
      color: "rgb(255, 184, 108)"
    }
  }, {
    types: ["punctuation", "symbol"],
    style: {
      color: "rgb(248, 248, 242)"
    }
  }, {
    types: ["string", "char", "tag", "selector"],
    style: {
      color: "rgb(255, 121, 198)"
    }
  }, {
    types: ["keyword", "variable"],
    style: {
      color: "rgb(189, 147, 249)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(98, 114, 164)"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "rgb(241, 250, 140)"
    }
  }]
};

var CodeBlock = function (_a) {
    var children = _a.children, language = _a.language;
    var textareaRef = useRef(null);
    // const code = children.trim();
    var code = children;
    var onClick = function () {
        var _a;
        (_a = textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current) === null || _a === void 0 ? void 0 : _a.select();
        document.execCommand('copy');
    };
    return (React.createElement(Container, null,
        React.createElement(Highlight, __assign({}, defaultProps, { code: code, language: language, theme: theme }), function (_a) {
            var className = _a.className, style = _a.style, tokens = _a.tokens, getLineProps = _a.getLineProps, getTokenProps = _a.getTokenProps;
            return (React.createElement("div", { className: 'wrapper' },
                React.createElement("div", { className: 'lang-tab', style: __assign({}, style) }, language),
                React.createElement("pre", { className: className, style: __assign({}, style), onClick: onClick }, tokens.map(function (line, i) { return (React.createElement("div", __assign({ key: i }, getLineProps({ line: line, key: i })), line.map(function (token, key) {
                    return (React.createElement("span", __assign({ key: key }, getTokenProps({ token: token, key: key }))));
                }))); })),
                React.createElement("textarea", { value: code, ref: textareaRef, readOnly: true })));
        })));
};

export { CodeBlock, Collapsible, CollapsibleBody, CollapsibleHead, Example, ToggleSwitch };
