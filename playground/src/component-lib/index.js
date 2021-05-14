/* eslint-disable */
import React, { createContext, useState, useContext } from 'react';
import styled from 'styled-components';

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

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Container$2 = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  background: red;\n"], ["\n  background: red;\n"])));
var templateObject_1$2;

var Example = function (_a) {
    var text = _a.text;
    return (React.createElement(Container$2, null,
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

var Container$1 = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin: var(--collapsible-margin);\n\n  .collapsible-head {\n    background: var(--collapsible-head-background, #ddd);\n    color: var(--collapsible-head-color);\n    cursor: pointer;\n    font-weight: var(--collapsible-head-font-weight, 700);\n    padding: var(--collapsible-head-padding, 20px);\n    user-select: none;\n  }\n\n  .collapsible-body {\n    background: var(--collapsible-body-background, #eee);\n    color: var(--collapsible-body-color);\n    display: none;\n    padding: var(--collapsible-body-padding, 20px);\n\n    &--is-open {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin: var(--collapsible-margin);\n\n  .collapsible-head {\n    background: var(--collapsible-head-background, #ddd);\n    color: var(--collapsible-head-color);\n    cursor: pointer;\n    font-weight: var(--collapsible-head-font-weight, 700);\n    padding: var(--collapsible-head-padding, 20px);\n    user-select: none;\n  }\n\n  .collapsible-body {\n    background: var(--collapsible-body-background, #eee);\n    color: var(--collapsible-body-color);\n    display: none;\n    padding: var(--collapsible-body-padding, 20px);\n\n    &--is-open {\n      display: block;\n    }\n  }\n"])));
var templateObject_1$1;

var Collapsible = function (_a) {
    var children = _a.children;
    return (React.createElement(CollapsibleProvider, null,
        React.createElement(Container$1, null, children)));
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

var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // Toggle colours\n  --toggle-background: #ddd;\n  --toggleButton-background: #fff;\n  --toggle-background-checked: #2bb82b;\n\n  // Label\n  --toggleLabel-color: #333;\n  --toggleLabel-fontSize: 16px;\n  --toggleLabel-fontWeight: 400;\n  --toggleLabel-paddingLeft: 10px;\n  --toggleLabel-textTransform: none;\n\n  // Disabled\n  --toggleLabel-color-disabled: #ccc;\n  --toggle-background-disabled: #ddd;\n  --toggle-background-checkedDisabled: #ddd;\n\n  // Dimensions and layout\n  --toggleContainer-margin: 0;\n  --toggle-height: 25px;\n  --toggle-padding: 2px;\n  --toggle-width: calc(\n    (var(--toggle-height) * 2) - (var(--toggle-padding) * 2)\n  );\n  --toggleButton-height: calc(\n    var(--toggle-height) - (var(--toggle-padding) * 2)\n  );\n\n  margin: var(--toggleContainer-margin);\n  position: relative;\n\n  label {\n    align-items: center;\n    color: var(--toggleLabel-color);\n    cursor: pointer;\n    display: flex;\n    font-size: var(--toggleLabel-fontSize);\n    font-weight: var(--toggleLabel-fontWeight);\n    margin-left: var(--toggle-width);\n    min-height: var(--toggle-height);\n    padding-left: var(--toggleLabel-paddingLeft);\n    text-transform: var(--toggleLabel-textTransform);\n    user-select: none;\n\n    &::before,\n    &::after {\n      border-radius: 5px;\n      content: '';\n      left: 0;\n      position: absolute;\n      top: 0;\n    }\n\n    // Toggle off\n    &::before {\n      background: var(--toggle-background);\n      height: var(--toggle-height);\n      width: var(--toggle-width);\n    }\n\n    &::after {\n      background: var(--toggleButton-background);\n      height: var(--toggleButton-height);\n      left: 0;\n      top: var(--toggle-padding);\n      transform: translateX(var(--toggle-padding));\n      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n      width: var(--toggleButton-height);\n    }\n  }\n\n  // Toggle on\n  input:checked + label {\n    &::before {\n      background: var(--toggle-background-checked);\n    }\n\n    // Move circle control to right when checked\n    &::after {\n      transform: translateX(calc(var(--toggle-width) / 2));\n    }\n  }\n\n  // Disabled\n  &.disabled {\n    label {\n      color: var(--toggleLabel-color-disabled);\n      cursor: default;\n\n      &::before {\n        background: var(--toggle-background-disabled);\n      }\n\n      &:checked + label::before {\n        background: var(--toggle-background-checkedDisabled);\n      }\n    }\n  }\n\n  // Accessibility\n  input {\n    height: var(--toggle-height);\n    margin: 0;\n    opacity: 0;\n    padding: 0;\n    position: absolute;\n    width: var(--toggle-width);\n\n    &:focus {\n      + label::before {\n        outline: 2px auto -webkit-focus-ring-color;\n        outline-offset: 2px;\n      }\n\n      &:not(:focus-visible) + label::before {\n        outline: none;\n      }\n    }\n  }\n"], ["\n  // Toggle colours\n  --toggle-background: #ddd;\n  --toggleButton-background: #fff;\n  --toggle-background-checked: #2bb82b;\n\n  // Label\n  --toggleLabel-color: #333;\n  --toggleLabel-fontSize: 16px;\n  --toggleLabel-fontWeight: 400;\n  --toggleLabel-paddingLeft: 10px;\n  --toggleLabel-textTransform: none;\n\n  // Disabled\n  --toggleLabel-color-disabled: #ccc;\n  --toggle-background-disabled: #ddd;\n  --toggle-background-checkedDisabled: #ddd;\n\n  // Dimensions and layout\n  --toggleContainer-margin: 0;\n  --toggle-height: 25px;\n  --toggle-padding: 2px;\n  --toggle-width: calc(\n    (var(--toggle-height) * 2) - (var(--toggle-padding) * 2)\n  );\n  --toggleButton-height: calc(\n    var(--toggle-height) - (var(--toggle-padding) * 2)\n  );\n\n  margin: var(--toggleContainer-margin);\n  position: relative;\n\n  label {\n    align-items: center;\n    color: var(--toggleLabel-color);\n    cursor: pointer;\n    display: flex;\n    font-size: var(--toggleLabel-fontSize);\n    font-weight: var(--toggleLabel-fontWeight);\n    margin-left: var(--toggle-width);\n    min-height: var(--toggle-height);\n    padding-left: var(--toggleLabel-paddingLeft);\n    text-transform: var(--toggleLabel-textTransform);\n    user-select: none;\n\n    &::before,\n    &::after {\n      border-radius: 5px;\n      content: '';\n      left: 0;\n      position: absolute;\n      top: 0;\n    }\n\n    // Toggle off\n    &::before {\n      background: var(--toggle-background);\n      height: var(--toggle-height);\n      width: var(--toggle-width);\n    }\n\n    &::after {\n      background: var(--toggleButton-background);\n      height: var(--toggleButton-height);\n      left: 0;\n      top: var(--toggle-padding);\n      transform: translateX(var(--toggle-padding));\n      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n      width: var(--toggleButton-height);\n    }\n  }\n\n  // Toggle on\n  input:checked + label {\n    &::before {\n      background: var(--toggle-background-checked);\n    }\n\n    // Move circle control to right when checked\n    &::after {\n      transform: translateX(calc(var(--toggle-width) / 2));\n    }\n  }\n\n  // Disabled\n  &.disabled {\n    label {\n      color: var(--toggleLabel-color-disabled);\n      cursor: default;\n\n      &::before {\n        background: var(--toggle-background-disabled);\n      }\n\n      &:checked + label::before {\n        background: var(--toggle-background-checkedDisabled);\n      }\n    }\n  }\n\n  // Accessibility\n  input {\n    height: var(--toggle-height);\n    margin: 0;\n    opacity: 0;\n    padding: 0;\n    position: absolute;\n    width: var(--toggle-width);\n\n    &:focus {\n      + label::before {\n        outline: 2px auto -webkit-focus-ring-color;\n        outline-offset: 2px;\n      }\n\n      &:not(:focus-visible) + label::before {\n        outline: none;\n      }\n    }\n  }\n"])));
var templateObject_1;

var ToggleSwitch = function (_a) {
    var id = _a.id, label = _a.label, disabled = _a.disabled, checked = _a.checked, onChange = _a.onChange;
    return (
    // TODO: Pass `disabled` class to `Container`
    React.createElement(Container, null,
        React.createElement("input", { type: 'checkbox', id: id, name: id, disabled: disabled, checked: checked, onChange: onChange }),
        React.createElement("label", { htmlFor: id }, label)));
};

export { Collapsible, CollapsibleBody, CollapsibleHead, Example, ToggleSwitch };
