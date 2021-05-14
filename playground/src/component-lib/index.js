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

var Container$1 = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  background: red;\n"], ["\n  background: red;\n"])));
var templateObject_1$1;

var Example = function (_a) {
    var text = _a.text;
    return (React.createElement(Container$1, null,
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

var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin: var(--collapsible-margin);\n\n  .collapsible-head {\n    background: var(--collapsible-head-background, #ddd);\n    color: var(--collapsible-head-color);\n    cursor: pointer;\n    font-weight: var(--collapsible-head-font-weight, 700);\n    padding: var(--collapsible-head-padding, 20px);\n    user-select: none;\n  }\n\n  .collapsible-body {\n    background: var(--collapsible-body-background, #eee);\n    color: var(--collapsible-body-color);\n    display: none;\n    padding: var(--collapsible-body-padding, 20px);\n\n    &--is-open {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin: var(--collapsible-margin);\n\n  .collapsible-head {\n    background: var(--collapsible-head-background, #ddd);\n    color: var(--collapsible-head-color);\n    cursor: pointer;\n    font-weight: var(--collapsible-head-font-weight, 700);\n    padding: var(--collapsible-head-padding, 20px);\n    user-select: none;\n  }\n\n  .collapsible-body {\n    background: var(--collapsible-body-background, #eee);\n    color: var(--collapsible-body-color);\n    display: none;\n    padding: var(--collapsible-body-padding, 20px);\n\n    &--is-open {\n      display: block;\n    }\n  }\n"])));
var templateObject_1;

var Collapsible = function (_a) {
    var children = _a.children;
    return (React.createElement(CollapsibleProvider, null,
        React.createElement(Container, null, children)));
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

export { Collapsible, CollapsibleBody, CollapsibleHead, Example };
