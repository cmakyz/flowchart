
// ---------------------------------------------------------------------------
// import {debounce, Utility} from '../../common/scripts/utility';
(function(){



    // Object.prototype.isEmpty = function() {
    //     for(var key in this) {
    //         if(this.hasOwnProperty(key))
    //             return false;
    //     }
    //     return true;
    // }

    function isObjectEmpty (obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    // ObjectFilter = (obj, predicate) => {
    //     return Object.assign({}, ...Object.keys(obj).filter(key => predicate(obj[key])).map(key => ({[key]: obj[key]})));
    // }
    const ObjectFilter = (obj, predicate) => {
        return Object.assign({}, ...Object.keys(obj).filter(key => predicate(obj[key])).map(key => ({[key]: obj[key]})));
    }


    function Formula_outerHTML(node){
        return node.outerHTML || new XMLSerializer().serializeToString(node);
    }

     class Formula_Utility {

        static _slideToggle(element, time = 400, callback, callbackThis) {
            let elementHeight = element.scrollHeight;
            let state = parseInt(element.offsetHeight) === 0 ? 'collapsed' : 'expanded';
            element.style.transition = 'height ' + time + 'ms';
            element.style.overflow = 'hidden';
            switch (state) {
                case 'collapsed':
                    element.style.height = elementHeight + 'px';
                    element.addEventListener('transitionend', Formula_Utility._setHeightAuto);
                    if (element.classList.contains('la-field-group-content')) {
                        element.classList.add('dot-border');
                    }
                    break;
                case 'expanded':
                    element.style.height = elementHeight + 'px';
                    if (element.classList.contains('la-field-group-content')) {
                        element.classList.remove('dot-border');
                    }

                    requestAnimationFrame(function () {
                        requestAnimationFrame(function () {
                            element.style.height = '0';
                        });
                    });
                    break;
            }
            if (callback) {
                let bindCallback = callback.bind(callbackThis || this);
                element.addEventListener('transitionend', bindCallback);
                setTimeout(() => element.removeEventListener(bindCallback), time + 10);
            }
        }

        static _slideDown(element, time = 400, callback, callbackThis) {
            let elementHeight = element.scrollHeight;
            if (parseInt(element.offsetHeight) !== 0) { return; }
            element.style.transition = 'height ' + time + 'ms';
            element.style.overflow = 'hidden';
            element.style.height = elementHeight + 'px';
            element.addEventListener('transitionend', Formula_Utility._setHeightAuto);
            if (callback) {
                let bindCallback = callback.bind(callbackThis || this);
                element.addEventListener('transitionend', bindCallback);
                setTimeout(() => element.removeEventListener(bindCallback), time + 10);
            }
        }

        static _slideUp(element, time = 400, callback, callbackThis) {
            let elementHeight = element.scrollHeight;
            if (parseInt(element.offsetHeight) === 0) { return; }
            element.style.transition = 'height ' + time + 'ms';
            element.style.overflow = 'hidden';
            element.style.height = elementHeight + 'px';
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    element.style.height = '0';
                });
            });
            if (callback) {
                let bindCallback = callback.bind(callbackThis || this);
                element.addEventListener('transitionend', bindCallback);
                setTimeout(() => element.removeEventListener(bindCallback), time + 10);
            }
        }

        static _setHeightAuto() {
            if (parseInt(this.style.height) !== 0) {
                this.style.height = 'auto';
                this.style.overflow = 'hidden';
            }
            this.removeEventListener('transitionend', Formula_Utility._setHeightAuto);
        }

        static _createElement(tag, attributes, text) {
            let returnElement = document.createElement(tag);
            if (attributes) {
                for (let key of Object.keys(attributes)) {
                    returnElement.setAttribute(key, attributes[key]);
                }
            }
            if (text !== undefined && text !== null)
                returnElement.innerHTML = text;
            return returnElement;
        }

        static _expand(element) {
            if (element) element.style.height = 'auto';
        }

        static collapse(element) {
            element.style.height = '0';
        }

        static offset(element) {
            let rect = element.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
        }

        static convertNumberToLetterIndex(number) {
            let columnString = '';
            let columnNumber = number + 1;
            while (columnNumber > 0) {
                const currentLetterNumber = (columnNumber - 1) % 26;
                const currentLetter = String.fromCharCode(currentLetterNumber + 65);
                columnString = currentLetter + columnString;
                columnNumber = (columnNumber - (currentLetterNumber + 1)) / 26;
            }
            return columnString;
        }

    }

     function Formula_debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // /.

    // -----------------------------------------------------------------------


    // ----------------------------------------------------------------------
    // import {Header} from '../../common/components/header/header';
    // import {Utility} from '../../scripts/utility';

     class Formula_Header {
        constructor(icon, name) {
            this.$html = Formula_Utility._createElement('header');
            this.$html.appendChild(Formula_Utility._createElement('a', {class: `logo ${icon ? `icon-${icon}-B` : ''}`, href: './index.html'}));
            name && this.$html.appendChild(Formula_Utility._createElement('a', {class: 'name', href: './index.html'}, name));
            this.$btnsContainer = this.$html.appendChild(Formula_Utility._createElement('div', {class: 'btns-wrapper'}));
        }

        addBtn($btn) {
            $btn.classList.add('btn');
            this.$btnsContainer.appendChild($btn);
        }
    }
    // /.
    // ----------------------------------------------------------------------

    // import {Content} from '../../common/components/content/content';
        // import {Utility} from '../../scripts/utility';

         class Formula_Content {
            constructor(contentContainer, isRight, isLeft) {
                this.html = contentContainer;
                this.html.classList.add('cv-content');
                this.html.style.flexGrow = '1';
                this.center = Formula_Utility._createElement('div', {'class': 'center'});
                this.left = isLeft && Formula_Utility._createElement('div', {'class': 'left'});
                this.right = isRight && Formula_Utility._createElement('div', {'class': 'right'});
                this.draw();

            }

            draw() {
                let transition = 'flex-basis 1s';
                let self = this;

                //region create elements

                if (this.left) {
                    let leftDragHandler = Formula_Utility._createElement('div', {'id': 'left-drag-handler'});

                    if (this.html.querySelector('.move-to-left')) {
                        this.left = this.html.querySelector('.move-to-left');
                        this.html.querySelector('.move-to-left').remove();
                    }

                    self.html.appendChild(self.left);
                    self.html.appendChild(leftDragHandler);

                    let leftDragHandlerFunc = function (event) {
                        if (this.right && window.innerWidth - self.right.getBoundingClientRect().width - 260 > event.clientX) {
                            self.left.style.flexBasis = event.clientX + 'px';
                        }
                        self.left.style.flexBasis = event.clientX - self.html.getBoundingClientRect().left + 'px';
                    };

                    let isLeftHandleClicked = false;

                    document.addEventListener('mouseup', function () {
                        if (isLeftHandleClicked) {
                            self.left.style.transition = transition;
                            document.removeEventListener('mousemove', leftDragHandlerFunc);
                            isLeftHandleClicked = false;
                        }

                    });

                    leftDragHandler.addEventListener('mousedown', function () {
                        if (!self.left.classList.contains('collapse')) {
                            self.left.style.transition = 'flex-basis 0s';
                            document.addEventListener('mousemove', leftDragHandlerFunc);
                            isLeftHandleClicked = true;
                        }
                    });
                }

                if (this.html.querySelector('.da-container')) {
                    this.center = this.html.querySelector('.da-container');
                    this.center.classList.add('da-container');
                    this.html.querySelector('.da-container').remove();
                }

                self.html.appendChild(self.center);

                if (this.right) {

                    let rightDragHandler = Formula_Utility._createElement('div', {'id': 'right-drag-handler'});

                    self.html.appendChild(rightDragHandler);
                    self.html.appendChild(self.right);

                    let rightDragHandlerFunc = function (event) {

                        if ((self.left && self.left.getBoundingClientRect().width) + 260 < event.clientX) {
                            self.right.style.flexBasis = self.html.getBoundingClientRect().right - event.clientX - 3 + 'px';
                        }
                    };


                    let isRightHandlerClicked = false;

                    document.addEventListener('mouseup', function () {
                        if (isRightHandlerClicked) {
                            self.right.style.transition = transition;
                            document.removeEventListener('mousemove', rightDragHandlerFunc);
                            isRightHandlerClicked = false;
                        }

                    });

                    rightDragHandler.addEventListener('mousedown', function () {
                        if (!self.right.classList.contains('collapse')) {
                            self.right.style.transition = 'flex-basis 0s';
                            document.addEventListener('mousemove', rightDragHandlerFunc);
                            isRightHandlerClicked = true;
                        }
                    });
                }
                //endregion create elements
            }
        }

    // /.


    // import {IfParser} from './parser';
    let Formula_IfParser = (function () {
        'use strict';

        function myParser$subclass(child, parent) {
            function ctor() { this.constructor = child; }

            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
        }

        function myParser$SyntaxError(message, expected, found, location) {
            this.message = message;
            this.expected = expected;
            this.found = found;
            this.location = location;
            this.name = 'SyntaxError';

            if (typeof Error.captureStackTrace === 'function') {
                Error.captureStackTrace(this, myParser$SyntaxError);
            }
        }

        myParser$subclass(myParser$SyntaxError, Error);

        myParser$SyntaxError.buildMessage = function (expected, found) {
            var DESCRIBE_EXPECTATION_FNS = {
                literal: function (expectation) {
                    return '"' + literalEscape(expectation.text) + '"';
                },

                'class': function (expectation) {
                    var escapedParts = '',
                        i;

                    for (i = 0; i < expectation.parts.length; i++) {
                        escapedParts += expectation.parts[i] instanceof Array
                            ? classEscape(expectation.parts[i][0]) + '-' + classEscape(expectation.parts[i][1])
                            : classEscape(expectation.parts[i]);
                    }

                    return '[' + (expectation.inverted ? '^' : '') + escapedParts + ']';
                },

                any: function (expectation) {
                    return 'any character';
                },

                end: function (expectation) {
                    return 'end of input';
                },

                other: function (expectation) {
                    return expectation.description;
                },
            };

            function hex(ch) {
                return ch.charCodeAt(0).toString(16).toUpperCase();
            }

            function literalEscape(s) {
                return s
                .replace(/\\/g, '\\\\')
                .replace(/"/g, '\\"')
                .replace(/\0/g, '\\0')
                .replace(/\t/g, '\\t')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/[\x00-\x0F]/g, function (ch) { return '\\x0' + hex(ch); })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) { return '\\x' + hex(ch); });
            }

            function classEscape(s) {
                return s
                .replace(/\\/g, '\\\\')
                .replace(/\]/g, '\\]')
                .replace(/\^/g, '\\^')
                .replace(/-/g, '\\-')
                .replace(/\0/g, '\\0')
                .replace(/\t/g, '\\t')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/[\x00-\x0F]/g, function (ch) { return '\\x0' + hex(ch); })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) { return '\\x' + hex(ch); });
            }

            function describeExpectation(expectation) {
                return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
            }

            function describeExpected(expected) {
                var descriptions = new Array(expected.length),
                    i, j;

                for (i = 0; i < expected.length; i++) {
                    descriptions[i] = describeExpectation(expected[i]);
                }

                descriptions.sort();

                if (descriptions.length > 0) {
                    for (i = 1, j = 1; i < descriptions.length; i++) {
                        if (descriptions[i - 1] !== descriptions[i]) {
                            descriptions[j] = descriptions[i];
                            j++;
                        }
                    }
                    descriptions.length = j;
                }

                switch (descriptions.length) {
                    case 1:
                        return descriptions[0];

                    case 2:
                        return descriptions[0] + ' or ' + descriptions[1];

                    default:
                        return descriptions.slice(0, -1).join(', ')
                            + ', or '
                            + descriptions[descriptions.length - 1];
                }
            }

            function describeFound(found) {
                return found ? '"' + literalEscape(found) + '"' : 'end of input';
            }

            return 'Expected ' + describeExpected(expected) + ' but ' + describeFound(found) + ' found.';
        };

        function myParser$parse(input, options) {
            options = options !== void 0 ? options : {};

            var myParser$FAILED = {},

                myParser$startRuleFunctions = {command: myParser$parsecommand},
                myParser$startRuleFunction = myParser$parsecommand,

                myParser$c0 = function (command) {return command;},
                myParser$c1 = 'if',
                myParser$c2 = myParser$literalExpectation('if', false),
                myParser$c3 = 'IF',
                myParser$c4 = myParser$literalExpectation('IF', false),
                myParser$c5 = 'iF',
                myParser$c6 = myParser$literalExpectation('iF', false),
                myParser$c7 = 'If',
                myParser$c8 = myParser$literalExpectation('If', false),
                myParser$c9 = '(',
                myParser$c10 = myParser$literalExpectation('(', false),
                myParser$c11 = ';',
                myParser$c12 = myParser$literalExpectation(';', false),
                myParser$c13 = ')',
                myParser$c14 = myParser$literalExpectation(')', false),
                myParser$c15 = function (condition, trueValue, falseValue) {
                    return {
                        type: 'if', condition, trueValue, falseValue,
                    };
                },
                myParser$c16 = function (label) {return label;},
                myParser$c17 = function () {return text();},
                myParser$c18 = myParser$otherExpectation('uppercascadedBrackets'),
                myParser$c19 = /^[^;()]/,
                myParser$c20 = myParser$classExpectation([';', '(', ')'], true, false),
                myParser$c21 = function () { return text(); },
                myParser$c22 = myParser$otherExpectation('cascadedBrackets'),
                myParser$c23 = myParser$otherExpectation('nestedbrackets'),
                myParser$c24 = /^[^()]/,
                myParser$c25 = myParser$classExpectation(['(', ')'], true, false),
                myParser$c26 = function () {return text();},
                myParser$c27 = myParser$otherExpectation('string'),
                myParser$c28 = myParser$otherExpectation('con'),
                myParser$c29 = /^[^;]/,
                myParser$c30 = myParser$classExpectation([';'], true, false),
                myParser$c31 = myParser$otherExpectation('whitespace'),
                myParser$c32 = /^[ \t\n\r]/,
                myParser$c33 = myParser$classExpectation([' ', '\t', '\n', '\r'], false, false),

                myParser$currPos = 0,
                myParser$savedPos = 0,
                myParser$posDetailsCache = [{line: 1, column: 1}],
                myParser$maxFailPos = 0,
                myParser$maxFailExpected = [],
                myParser$silentFails = 0,

                myParser$result;

            if ('startRule' in options) {
                if (!(options.startRule in myParser$startRuleFunctions)) {
                    throw new Error('Can\'t start parsing from rule "' + options.startRule + '".');
                }

                myParser$startRuleFunction = myParser$startRuleFunctions[options.startRule];
            }

            function text() {
                return input.substring(myParser$savedPos, myParser$currPos);
            }

            function location() {
                return myParser$computeLocation(myParser$savedPos, myParser$currPos);
            }

            function expected(description, location) {
                location = location !== void 0 ? location : myParser$computeLocation(myParser$savedPos, myParser$currPos);

                throw myParser$buildStructuredError(
                    [myParser$otherExpectation(description)],
                    input.substring(myParser$savedPos, myParser$currPos),
                    location,
                );
            }

            function error(message, location) {
                location = location !== void 0 ? location : myParser$computeLocation(myParser$savedPos, myParser$currPos);

                throw myParser$buildSimpleError(message, location);
            }

            function myParser$literalExpectation(text, ignoreCase) {
                return {type: 'literal', text: text, ignoreCase: ignoreCase};
            }

            function myParser$classExpectation(parts, inverted, ignoreCase) {
                return {type: 'class', parts: parts, inverted: inverted, ignoreCase: ignoreCase};
            }

            function myParser$anyExpectation() {
                return {type: 'any'};
            }

            function myParser$endExpectation() {
                return {type: 'end'};
            }

            function myParser$otherExpectation(description) {
                return {type: 'other', description: description};
            }

            function myParser$computePosDetails(pos) {
                var details = myParser$posDetailsCache[pos], p;

                if (details) {
                    return details;
                }
                else {
                    p = pos - 1;
                    while (!myParser$posDetailsCache[p]) {
                        p--;
                    }

                    details = myParser$posDetailsCache[p];
                    details = {
                        line: details.line,
                        column: details.column,
                    };

                    while (p < pos) {
                        if (input.charCodeAt(p) === 10) {
                            details.line++;
                            details.column = 1;
                        }
                        else {
                            details.column++;
                        }

                        p++;
                    }

                    myParser$posDetailsCache[pos] = details;
                    return details;
                }
            }

            function myParser$computeLocation(startPos, endPos) {
                var startPosDetails = myParser$computePosDetails(startPos),
                    endPosDetails = myParser$computePosDetails(endPos);

                return {
                    start: {
                        offset: startPos,
                        line: startPosDetails.line,
                        column: startPosDetails.column,
                    },
                    end: {
                        offset: endPos,
                        line: endPosDetails.line,
                        column: endPosDetails.column,
                    },
                };
            }

            function myParser$fail(expected) {
                if (myParser$currPos < myParser$maxFailPos) { return; }

                if (myParser$currPos > myParser$maxFailPos) {
                    myParser$maxFailPos = myParser$currPos;
                    myParser$maxFailExpected = [];
                }

                myParser$maxFailExpected.push(expected);
            }

            function myParser$buildSimpleError(message, location) {
                return new myParser$SyntaxError(message, null, null, location);
            }

            function myParser$buildStructuredError(expected, found, location) {
                return new myParser$SyntaxError(
                    myParser$SyntaxError.buildMessage(expected, found),
                    expected,
                    found,
                    location,
                );
            }

            function myParser$parsecommand() {
                var s0, s1;

                s0 = myParser$currPos;
                s1 = myParser$parseif();
                if (s1 !== myParser$FAILED) {
                    myParser$savedPos = s0;
                    s1 = myParser$c0(s1);
                }
                s0 = s1;

                return s0;
            }

            function myParser$parseif() {
                var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

                s0 = myParser$currPos;
                s1 = myParser$parse_();
                if (s1 !== myParser$FAILED) {
                    if (input.substr(myParser$currPos, 2) === myParser$c1) {
                        s2 = myParser$c1;
                        myParser$currPos += 2;
                    }
                    else {
                        s2 = myParser$FAILED;
                        if (myParser$silentFails === 0) { myParser$fail(myParser$c2); }
                    }
                    if (s2 === myParser$FAILED) {
                        if (input.substr(myParser$currPos, 2) === myParser$c3) {
                            s2 = myParser$c3;
                            myParser$currPos += 2;
                        }
                        else {
                            s2 = myParser$FAILED;
                            if (myParser$silentFails === 0) { myParser$fail(myParser$c4); }
                        }
                        if (s2 === myParser$FAILED) {
                            if (input.substr(myParser$currPos, 2) === myParser$c5) {
                                s2 = myParser$c5;
                                myParser$currPos += 2;
                            }
                            else {
                                s2 = myParser$FAILED;
                                if (myParser$silentFails === 0) { myParser$fail(myParser$c6); }
                            }
                            if (s2 === myParser$FAILED) {
                                if (input.substr(myParser$currPos, 2) === myParser$c7) {
                                    s2 = myParser$c7;
                                    myParser$currPos += 2;
                                }
                                else {
                                    s2 = myParser$FAILED;
                                    if (myParser$silentFails === 0) { myParser$fail(myParser$c8); }
                                }
                            }
                        }
                    }
                    if (s2 !== myParser$FAILED) {
                        if (input.charCodeAt(myParser$currPos) === 40) {
                            s3 = myParser$c9;
                            myParser$currPos++;
                        }
                        else {
                            s3 = myParser$FAILED;
                            if (myParser$silentFails === 0) { myParser$fail(myParser$c10); }
                        }
                        if (s3 !== myParser$FAILED) {
                            s4 = myParser$parserepeateduppercascadedBrackets();
                            if (s4 === myParser$FAILED) {
                                s4 = myParser$parsestring();
                            }
                            if (s4 !== myParser$FAILED) {
                                s5 = myParser$parse_();
                                if (s5 !== myParser$FAILED) {
                                    if (input.charCodeAt(myParser$currPos) === 59) {
                                        s6 = myParser$c11;
                                        myParser$currPos++;
                                    }
                                    else {
                                        s6 = myParser$FAILED;
                                        if (myParser$silentFails === 0) { myParser$fail(myParser$c12); }
                                    }
                                    if (s6 !== myParser$FAILED) {
                                        s7 = myParser$parse_();
                                        if (s7 !== myParser$FAILED) {
                                            s8 = myParser$parsetest();
                                            if (s8 === myParser$FAILED) {
                                                s8 = myParser$parseif();
                                                if (s8 === myParser$FAILED) {
                                                    s8 = myParser$parserepeateduppercascadedBrackets();
                                                    if (s8 === myParser$FAILED) {
                                                        s8 = myParser$parsestring();
                                                    }
                                                }
                                            }
                                            if (s8 !== myParser$FAILED) {
                                                s9 = myParser$parse_();
                                                if (s9 !== myParser$FAILED) {
                                                    if (input.charCodeAt(myParser$currPos) === 59) {
                                                        s10 = myParser$c11;
                                                        myParser$currPos++;
                                                    }
                                                    else {
                                                        s10 = myParser$FAILED;
                                                        if (myParser$silentFails === 0) { myParser$fail(myParser$c12); }
                                                    }
                                                    if (s10 !== myParser$FAILED) {
                                                        s11 = myParser$parse_();
                                                        if (s11 !== myParser$FAILED) {
                                                            s12 = myParser$parsetest();
                                                            if (s12 === myParser$FAILED) {
                                                                s12 = myParser$parseif();
                                                                if (s12 === myParser$FAILED) {
                                                                    s12 = myParser$parserepeateduppercascadedBrackets();
                                                                    if (s12 === myParser$FAILED) {
                                                                        s12 = myParser$parsestring();
                                                                    }
                                                                }
                                                            }
                                                            if (s12 !== myParser$FAILED) {
                                                                if (input.charCodeAt(myParser$currPos) === 41) {
                                                                    s13 = myParser$c13;
                                                                    myParser$currPos++;
                                                                }
                                                                else {
                                                                    s13 = myParser$FAILED;
                                                                    if (myParser$silentFails === 0) { myParser$fail(myParser$c14); }
                                                                }
                                                                if (s13 !== myParser$FAILED) {
                                                                    s14 = myParser$parse_();
                                                                    if (s14 !== myParser$FAILED) {
                                                                        myParser$savedPos = s0;
                                                                        s1 = myParser$c15(s4, s8, s12);
                                                                        s0 = s1;
                                                                    }
                                                                    else {
                                                                        myParser$currPos = s0;
                                                                        s0 = myParser$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    myParser$currPos = s0;
                                                                    s0 = myParser$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                myParser$currPos = s0;
                                                                s0 = myParser$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            myParser$currPos = s0;
                                                            s0 = myParser$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        myParser$currPos = s0;
                                                        s0 = myParser$FAILED;
                                                    }
                                                }
                                                else {
                                                    myParser$currPos = s0;
                                                    s0 = myParser$FAILED;
                                                }
                                            }
                                            else {
                                                myParser$currPos = s0;
                                                s0 = myParser$FAILED;
                                            }
                                        }
                                        else {
                                            myParser$currPos = s0;
                                            s0 = myParser$FAILED;
                                        }
                                    }
                                    else {
                                        myParser$currPos = s0;
                                        s0 = myParser$FAILED;
                                    }
                                }
                                else {
                                    myParser$currPos = s0;
                                    s0 = myParser$FAILED;
                                }
                            }
                            else {
                                myParser$currPos = s0;
                                s0 = myParser$FAILED;
                            }
                        }
                        else {
                            myParser$currPos = s0;
                            s0 = myParser$FAILED;
                        }
                    }
                    else {
                        myParser$currPos = s0;
                        s0 = myParser$FAILED;
                    }
                }
                else {
                    myParser$currPos = s0;
                    s0 = myParser$FAILED;
                }

                return s0;
            }

            function myParser$parsetest() {
                var s0, s1, s2, s3, s4, s5, s6;

                s0 = myParser$currPos;
                s1 = myParser$currPos;
                s2 = myParser$parse_();
                if (s2 !== myParser$FAILED) {
                    if (input.charCodeAt(myParser$currPos) === 40) {
                        s3 = myParser$c9;
                        myParser$currPos++;
                    }
                    else {
                        s3 = myParser$FAILED;
                        if (myParser$silentFails === 0) { myParser$fail(myParser$c10); }
                    }
                    if (s3 !== myParser$FAILED) {
                        s2 = [s2, s3];
                        s1 = s2;
                    }
                    else {
                        myParser$currPos = s1;
                        s1 = myParser$FAILED;
                    }
                }
                else {
                    myParser$currPos = s1;
                    s1 = myParser$FAILED;
                }
                if (s1 !== myParser$FAILED) {
                    s2 = myParser$parse_();
                    if (s2 !== myParser$FAILED) {
                        s3 = myParser$parseif();
                        if (s3 !== myParser$FAILED) {
                            s4 = myParser$parse_();
                            if (s4 !== myParser$FAILED) {
                                if (input.charCodeAt(myParser$currPos) === 41) {
                                    s5 = myParser$c13;
                                    myParser$currPos++;
                                }
                                else {
                                    s5 = myParser$FAILED;
                                    if (myParser$silentFails === 0) { myParser$fail(myParser$c14); }
                                }
                                if (s5 !== myParser$FAILED) {
                                    s6 = myParser$parse_();
                                    if (s6 !== myParser$FAILED) {
                                        myParser$savedPos = s0;
                                        s1 = myParser$c16(s3);
                                        s0 = s1;
                                    }
                                    else {
                                        myParser$currPos = s0;
                                        s0 = myParser$FAILED;
                                    }
                                }
                                else {
                                    myParser$currPos = s0;
                                    s0 = myParser$FAILED;
                                }
                            }
                            else {
                                myParser$currPos = s0;
                                s0 = myParser$FAILED;
                            }
                        }
                        else {
                            myParser$currPos = s0;
                            s0 = myParser$FAILED;
                        }
                    }
                    else {
                        myParser$currPos = s0;
                        s0 = myParser$FAILED;
                    }
                }
                else {
                    myParser$currPos = s0;
                    s0 = myParser$FAILED;
                }

                return s0;
            }

            function myParser$parserepeateduppercascadedBrackets() {
                var s0, s1, s2;

                s0 = myParser$currPos;
                s1 = [];
                s2 = myParser$parseuppercascadedBrackets();
                if (s2 !== myParser$FAILED) {
                    while (s2 !== myParser$FAILED) {
                        s1.push(s2);
                        s2 = myParser$parseuppercascadedBrackets();
                    }
                }
                else {
                    s1 = myParser$FAILED;
                }
                if (s1 !== myParser$FAILED) {
                    myParser$savedPos = s0;
                    s1 = myParser$c17();
                }
                s0 = s1;

                return s0;
            }

            function myParser$parseuppercascadedBrackets() {
                var s0, s1, s2, s3, s4, s5;

                myParser$silentFails++;
                s0 = myParser$currPos;
                s1 = [];
                if (myParser$c19.test(input.charAt(myParser$currPos))) {
                    s2 = input.charAt(myParser$currPos);
                    myParser$currPos++;
                }
                else {
                    s2 = myParser$FAILED;
                    if (myParser$silentFails === 0) { myParser$fail(myParser$c20); }
                }
                while (s2 !== myParser$FAILED) {
                    s1.push(s2);
                    if (myParser$c19.test(input.charAt(myParser$currPos))) {
                        s2 = input.charAt(myParser$currPos);
                        myParser$currPos++;
                    }
                    else {
                        s2 = myParser$FAILED;
                        if (myParser$silentFails === 0) { myParser$fail(myParser$c20); }
                    }
                }
                if (s1 !== myParser$FAILED) {
                    s2 = myParser$currPos;
                    if (input.charCodeAt(myParser$currPos) === 40) {
                        s3 = myParser$c9;
                        myParser$currPos++;
                    }
                    else {
                        s3 = myParser$FAILED;
                        if (myParser$silentFails === 0) { myParser$fail(myParser$c10); }
                    }
                    if (s3 !== myParser$FAILED) {
                        s4 = myParser$parsecascadedBrackets();
                        if (s4 !== myParser$FAILED) {
                            if (input.charCodeAt(myParser$currPos) === 41) {
                                s5 = myParser$c13;
                                myParser$currPos++;
                            }
                            else {
                                s5 = myParser$FAILED;
                                if (myParser$silentFails === 0) { myParser$fail(myParser$c14); }
                            }
                            if (s5 !== myParser$FAILED) {
                                s3 = [s3, s4, s5];
                                s2 = s3;
                            }
                            else {
                                myParser$currPos = s2;
                                s2 = myParser$FAILED;
                            }
                        }
                        else {
                            myParser$currPos = s2;
                            s2 = myParser$FAILED;
                        }
                    }
                    else {
                        myParser$currPos = s2;
                        s2 = myParser$FAILED;
                    }
                    if (s2 === myParser$FAILED) {
                        s2 = myParser$parsecascadedBrackets();
                    }
                    if (s2 !== myParser$FAILED) {
                        s3 = [];
                        if (myParser$c19.test(input.charAt(myParser$currPos))) {
                            s4 = input.charAt(myParser$currPos);
                            myParser$currPos++;
                        }
                        else {
                            s4 = myParser$FAILED;
                            if (myParser$silentFails === 0) { myParser$fail(myParser$c20); }
                        }
                        while (s4 !== myParser$FAILED) {
                            s3.push(s4);
                            if (myParser$c19.test(input.charAt(myParser$currPos))) {
                                s4 = input.charAt(myParser$currPos);
                                myParser$currPos++;
                            }
                            else {
                                s4 = myParser$FAILED;
                                if (myParser$silentFails === 0) { myParser$fail(myParser$c20); }
                            }
                        }
                        if (s3 !== myParser$FAILED) {
                            myParser$savedPos = s0;
                            s1 = myParser$c21();
                            s0 = s1;
                        }
                        else {
                            myParser$currPos = s0;
                            s0 = myParser$FAILED;
                        }
                    }
                    else {
                        myParser$currPos = s0;
                        s0 = myParser$FAILED;
                    }
                }
                else {
                    myParser$currPos = s0;
                    s0 = myParser$FAILED;
                }
                myParser$silentFails--;
                if (s0 === myParser$FAILED) {
                    s1 = myParser$FAILED;
                    if (myParser$silentFails === 0) { myParser$fail(myParser$c18); }
                }

                return s0;
            }

            function myParser$parsecascadedBrackets() {
                var s0, s1, s2;

                myParser$silentFails++;
                s0 = myParser$currPos;
                s1 = [];
                s2 = myParser$parsenestedbrackets();
                if (s2 !== myParser$FAILED) {
                    while (s2 !== myParser$FAILED) {
                        s1.push(s2);
                        s2 = myParser$parsenestedbrackets();
                    }
                }
                else {
                    s1 = myParser$FAILED;
                }
                if (s1 !== myParser$FAILED) {
                    myParser$savedPos = s0;
                    s1 = myParser$c21();
                }
                s0 = s1;
                myParser$silentFails--;
                if (s0 === myParser$FAILED) {
                    s1 = myParser$FAILED;
                    if (myParser$silentFails === 0) { myParser$fail(myParser$c22); }
                }

                return s0;
            }

            function myParser$parsenestedbrackets() {
                var s0, s1, s2, s3, s4, s5, s6, s7, s8;

                myParser$silentFails++;
                s0 = myParser$currPos;
                s1 = [];
                if (myParser$c19.test(input.charAt(myParser$currPos))) {
                    s2 = input.charAt(myParser$currPos);
                    myParser$currPos++;
                }
                else {
                    s2 = myParser$FAILED;
                    if (myParser$silentFails === 0) { myParser$fail(myParser$c20); }
                }
                while (s2 !== myParser$FAILED) {
                    s1.push(s2);
                    if (myParser$c19.test(input.charAt(myParser$currPos))) {
                        s2 = input.charAt(myParser$currPos);
                        myParser$currPos++;
                    }
                    else {
                        s2 = myParser$FAILED;
                        if (myParser$silentFails === 0) { myParser$fail(myParser$c20); }
                    }
                }
                if (s1 !== myParser$FAILED) {
                    if (input.charCodeAt(myParser$currPos) === 40) {
                        s2 = myParser$c9;
                        myParser$currPos++;
                    }
                    else {
                        s2 = myParser$FAILED;
                        if (myParser$silentFails === 0) { myParser$fail(myParser$c10); }
                    }
                    if (s2 !== myParser$FAILED) {
                        s3 = [];
                        s4 = myParser$currPos;
                        s5 = [];
                        if (myParser$c24.test(input.charAt(myParser$currPos))) {
                            s6 = input.charAt(myParser$currPos);
                            myParser$currPos++;
                        }
                        else {
                            s6 = myParser$FAILED;
                            if (myParser$silentFails === 0) { myParser$fail(myParser$c25); }
                        }
                        while (s6 !== myParser$FAILED) {
                            s5.push(s6);
                            if (myParser$c24.test(input.charAt(myParser$currPos))) {
                                s6 = input.charAt(myParser$currPos);
                                myParser$currPos++;
                            }
                            else {
                                s6 = myParser$FAILED;
                                if (myParser$silentFails === 0) { myParser$fail(myParser$c25); }
                            }
                        }
                        if (s5 !== myParser$FAILED) {
                            s6 = myParser$parsenestedbrackets();
                            if (s6 !== myParser$FAILED) {
                                s7 = [];
                                if (myParser$c24.test(input.charAt(myParser$currPos))) {
                                    s8 = input.charAt(myParser$currPos);
                                    myParser$currPos++;
                                }
                                else {
                                    s8 = myParser$FAILED;
                                    if (myParser$silentFails === 0) { myParser$fail(myParser$c25); }
                                }
                                while (s8 !== myParser$FAILED) {
                                    s7.push(s8);
                                    if (myParser$c24.test(input.charAt(myParser$currPos))) {
                                        s8 = input.charAt(myParser$currPos);
                                        myParser$currPos++;
                                    }
                                    else {
                                        s8 = myParser$FAILED;
                                        if (myParser$silentFails === 0) { myParser$fail(myParser$c25); }
                                    }
                                }
                                if (s7 !== myParser$FAILED) {
                                    s5 = [s5, s6, s7];
                                    s4 = s5;
                                }
                                else {
                                    myParser$currPos = s4;
                                    s4 = myParser$FAILED;
                                }
                            }
                            else {
                                myParser$currPos = s4;
                                s4 = myParser$FAILED;
                            }
                        }
                        else {
                            myParser$currPos = s4;
                            s4 = myParser$FAILED;
                        }
                        if (s4 !== myParser$FAILED) {
                            while (s4 !== myParser$FAILED) {
                                s3.push(s4);
                                s4 = myParser$currPos;
                                s5 = [];
                                if (myParser$c24.test(input.charAt(myParser$currPos))) {
                                    s6 = input.charAt(myParser$currPos);
                                    myParser$currPos++;
                                }
                                else {
                                    s6 = myParser$FAILED;
                                    if (myParser$silentFails === 0) { myParser$fail(myParser$c25); }
                                }
                                while (s6 !== myParser$FAILED) {
                                    s5.push(s6);
                                    if (myParser$c24.test(input.charAt(myParser$currPos))) {
                                        s6 = input.charAt(myParser$currPos);
                                        myParser$currPos++;
                                    }
                                    else {
                                        s6 = myParser$FAILED;
                                        if (myParser$silentFails === 0) { myParser$fail(myParser$c25); }
                                    }
                                }
                                if (s5 !== myParser$FAILED) {
                                    s6 = myParser$parsenestedbrackets();
                                    if (s6 !== myParser$FAILED) {
                                        s7 = [];
                                        if (myParser$c24.test(input.charAt(myParser$currPos))) {
                                            s8 = input.charAt(myParser$currPos);
                                            myParser$currPos++;
                                        }
                                        else {
                                            s8 = myParser$FAILED;
                                            if (myParser$silentFails === 0) { myParser$fail(myParser$c25); }
                                        }
                                        while (s8 !== myParser$FAILED) {
                                            s7.push(s8);
                                            if (myParser$c24.test(input.charAt(myParser$currPos))) {
                                                s8 = input.charAt(myParser$currPos);
                                                myParser$currPos++;
                                            }
                                            else {
                                                s8 = myParser$FAILED;
                                                if (myParser$silentFails === 0) { myParser$fail(myParser$c25); }
                                            }
                                        }
                                        if (s7 !== myParser$FAILED) {
                                            s5 = [s5, s6, s7];
                                            s4 = s5;
                                        }
                                        else {
                                            myParser$currPos = s4;
                                            s4 = myParser$FAILED;
                                        }
                                    }
                                    else {
                                        myParser$currPos = s4;
                                        s4 = myParser$FAILED;
                                    }
                                }
                                else {
                                    myParser$currPos = s4;
                                    s4 = myParser$FAILED;
                                }
                            }
                        }
                        else {
                            s3 = myParser$FAILED;
                        }
                        if (s3 === myParser$FAILED) {
                            s3 = [];
                            if (myParser$c24.test(input.charAt(myParser$currPos))) {
                                s4 = input.charAt(myParser$currPos);
                                myParser$currPos++;
                            }
                            else {
                                s4 = myParser$FAILED;
                                if (myParser$silentFails === 0) { myParser$fail(myParser$c25); }
                            }
                            while (s4 !== myParser$FAILED) {
                                s3.push(s4);
                                if (myParser$c24.test(input.charAt(myParser$currPos))) {
                                    s4 = input.charAt(myParser$currPos);
                                    myParser$currPos++;
                                }
                                else {
                                    s4 = myParser$FAILED;
                                    if (myParser$silentFails === 0) { myParser$fail(myParser$c25); }
                                }
                            }
                        }
                        if (s3 !== myParser$FAILED) {
                            if (input.charCodeAt(myParser$currPos) === 41) {
                                s4 = myParser$c13;
                                myParser$currPos++;
                            }
                            else {
                                s4 = myParser$FAILED;
                                if (myParser$silentFails === 0) { myParser$fail(myParser$c14); }
                            }
                            if (s4 !== myParser$FAILED) {
                                s5 = [];
                                if (myParser$c19.test(input.charAt(myParser$currPos))) {
                                    s6 = input.charAt(myParser$currPos);
                                    myParser$currPos++;
                                }
                                else {
                                    s6 = myParser$FAILED;
                                    if (myParser$silentFails === 0) { myParser$fail(myParser$c20); }
                                }
                                while (s6 !== myParser$FAILED) {
                                    s5.push(s6);
                                    if (myParser$c19.test(input.charAt(myParser$currPos))) {
                                        s6 = input.charAt(myParser$currPos);
                                        myParser$currPos++;
                                    }
                                    else {
                                        s6 = myParser$FAILED;
                                        if (myParser$silentFails === 0) { myParser$fail(myParser$c20); }
                                    }
                                }
                                if (s5 !== myParser$FAILED) {
                                    myParser$savedPos = s0;
                                    s1 = myParser$c26();
                                    s0 = s1;
                                }
                                else {
                                    myParser$currPos = s0;
                                    s0 = myParser$FAILED;
                                }
                            }
                            else {
                                myParser$currPos = s0;
                                s0 = myParser$FAILED;
                            }
                        }
                        else {
                            myParser$currPos = s0;
                            s0 = myParser$FAILED;
                        }
                    }
                    else {
                        myParser$currPos = s0;
                        s0 = myParser$FAILED;
                    }
                }
                else {
                    myParser$currPos = s0;
                    s0 = myParser$FAILED;
                }
                myParser$silentFails--;
                if (s0 === myParser$FAILED) {
                    s1 = myParser$FAILED;
                    if (myParser$silentFails === 0) { myParser$fail(myParser$c23); }
                }

                return s0;
            }

            function myParser$parsestring() {
                var s0, s1, s2;

                myParser$silentFails++;
                s0 = myParser$currPos;
                s1 = [];
                if (myParser$c19.test(input.charAt(myParser$currPos))) {
                    s2 = input.charAt(myParser$currPos);
                    myParser$currPos++;
                }
                else {
                    s2 = myParser$FAILED;
                    if (myParser$silentFails === 0) { myParser$fail(myParser$c20); }
                }
                if (s2 !== myParser$FAILED) {
                    while (s2 !== myParser$FAILED) {
                        s1.push(s2);
                        if (myParser$c19.test(input.charAt(myParser$currPos))) {
                            s2 = input.charAt(myParser$currPos);
                            myParser$currPos++;
                        }
                        else {
                            s2 = myParser$FAILED;
                            if (myParser$silentFails === 0) { myParser$fail(myParser$c20); }
                        }
                    }
                }
                else {
                    s1 = myParser$FAILED;
                }
                if (s1 !== myParser$FAILED) {
                    myParser$savedPos = s0;
                    s1 = myParser$c21();
                }
                s0 = s1;
                myParser$silentFails--;
                if (s0 === myParser$FAILED) {
                    s1 = myParser$FAILED;
                    if (myParser$silentFails === 0) { myParser$fail(myParser$c27); }
                }

                return s0;
            }

            function myParser$parsecon() {
                var s0, s1, s2;

                myParser$silentFails++;
                s0 = myParser$currPos;
                s1 = [];
                if (myParser$c29.test(input.charAt(myParser$currPos))) {
                    s2 = input.charAt(myParser$currPos);
                    myParser$currPos++;
                }
                else {
                    s2 = myParser$FAILED;
                    if (myParser$silentFails === 0) { myParser$fail(myParser$c30); }
                }
                if (s2 !== myParser$FAILED) {
                    while (s2 !== myParser$FAILED) {
                        s1.push(s2);
                        if (myParser$c29.test(input.charAt(myParser$currPos))) {
                            s2 = input.charAt(myParser$currPos);
                            myParser$currPos++;
                        }
                        else {
                            s2 = myParser$FAILED;
                            if (myParser$silentFails === 0) { myParser$fail(myParser$c30); }
                        }
                    }
                }
                else {
                    s1 = myParser$FAILED;
                }
                if (s1 !== myParser$FAILED) {
                    myParser$savedPos = s0;
                    s1 = myParser$c21();
                }
                s0 = s1;
                myParser$silentFails--;
                if (s0 === myParser$FAILED) {
                    s1 = myParser$FAILED;
                    if (myParser$silentFails === 0) { myParser$fail(myParser$c28); }
                }

                return s0;
            }

            function myParser$parse_() {
                var s0, s1;

                myParser$silentFails++;
                s0 = [];
                if (myParser$c32.test(input.charAt(myParser$currPos))) {
                    s1 = input.charAt(myParser$currPos);
                    myParser$currPos++;
                }
                else {
                    s1 = myParser$FAILED;
                    if (myParser$silentFails === 0) { myParser$fail(myParser$c33); }
                }
                while (s1 !== myParser$FAILED) {
                    s0.push(s1);
                    if (myParser$c32.test(input.charAt(myParser$currPos))) {
                        s1 = input.charAt(myParser$currPos);
                        myParser$currPos++;
                    }
                    else {
                        s1 = myParser$FAILED;
                        if (myParser$silentFails === 0) { myParser$fail(myParser$c33); }
                    }
                }
                myParser$silentFails--;
                if (s0 === myParser$FAILED) {
                    s1 = myParser$FAILED;
                    if (myParser$silentFails === 0) { myParser$fail(myParser$c31); }
                }

                return s0;
            }

            myParser$result = myParser$startRuleFunction();

            if (myParser$result !== myParser$FAILED && myParser$currPos === input.length) {
                return myParser$result;
            }
            else {
                if (myParser$result !== myParser$FAILED && myParser$currPos < input.length) {
                    myParser$fail(myParser$endExpectation());
                }

                throw myParser$buildStructuredError(
                    myParser$maxFailExpected,
                    myParser$maxFailPos < input.length ? input.charAt(myParser$maxFailPos) : null,
                    myParser$maxFailPos < input.length
                        ? myParser$computeLocation(myParser$maxFailPos, myParser$maxFailPos + 1)
                        : myParser$computeLocation(myParser$maxFailPos, myParser$maxFailPos),
                );
            }
        }

        return {
            SyntaxError: myParser$SyntaxError,
            parse: myParser$parse,
        };
    })();
     {Formula_IfParser};
    // /.



    // import {IfStatement} from '../components/ifStatement/ifStatement';

    // import {Condition} from '../condition/condition';
    // let con = {
    // 	operators: ["AND"],
    // 	args: ["TOPLAM_TUTAR<(LIMIT)",
    // 		{
    // 			operators: ["OR"],
    // 			args: ["TOPLAM_TUTAR>FINANS_LIMITI", "TOPLAM_TUTAR_FFF>0"]
    // 		}
    // 	]
    // };
    // con = {
    // 	operators: [],
    // 	args: ["sdffsfsgsdfg"]
    // }
    // import {debounce, Utility} from '../../../common/scripts/utility';
    // import {FlowchartApp} from '../../scripts/app';

    //ToDo needs Optimization by making operation classes
     class Formula_Condition {

        constructor(parent, text) {
            this.parent = parent;
            this.text = text;
            this.obj = null;
            this.$html = {la: null, da: null};
            this.$diagramBody = null;
            this.raConditionText = null;
            this.toObject();
            this.draw();
        }

        static _drawAnd(obj) {
            let $html = Formula_Utility._createElement('div', {class: 'and-operation'});
            for (let i = 0; i < obj.arguments.length; i++) {
                if (typeof obj.arguments[i] === 'string') {
                    if ((obj.arguments[i - 1] && !obj.arguments[i - 1].operator) || !obj.arguments[i - 1]) {
                        $html.appendChild(Formula_Utility._createElement('div', {class: 'connector'}));
                    }
                    let textWrapper = $html.appendChild(Formula_Utility._createElement('div', {
                        class: 'text-wrapper',
                        title: obj.arguments[i],
                    }));
                    textWrapper.appendChild(Formula_Utility._createElement('div', {class: 'text'}, obj.arguments[i]));
                    if ((obj.arguments[i + 1] && !obj.arguments[i + 1].operator) || !obj.arguments[i + 1]) {
                        $html.appendChild(Formula_Utility._createElement('div', {class: 'connector'}));
                    }
                }
                else if (obj.arguments[i].operator === 'OR') {
                    $html.appendChild(Formula_Condition._drawOr(obj.arguments[i]));
                }
            }
            return $html;
        }

        static _drawOr(obj) {
            let $html = Formula_Utility._createElement('div', {class: 'or-operation-wrapper'});
            $html.appendChild(Formula_Utility._createElement('div', {class: 'connector'}));
            let $orOperation = $html.appendChild(Formula_Utility._createElement('div', {class: 'or-operation'}));
            for (let i = 0; i < obj.arguments.length; i++) {
                if (typeof obj.arguments[i] === 'string') {
                    let argument = $orOperation.appendChild(Formula_Utility._createElement('div', {class: 'argument'}));
                    argument.appendChild(Formula_Utility._createElement('div', {class: 'connector'}));
                    let textWrapper = argument.appendChild(Formula_Utility._createElement('div', {
                        class: 'text-wrapper',
                        title: obj.arguments[i],
                    }));
                    textWrapper.appendChild(Formula_Utility._createElement('div', {class: 'text'}, obj.arguments[i]));
                    argument.appendChild(Formula_Utility._createElement('div', {class: 'connector'}));
                }
                else if (obj.arguments[i].operator === 'AND') {
                    $orOperation.appendChild(Formula_Condition._drawAnd(obj.arguments[i]));
                }
            }
            $html.appendChild(Formula_Utility._createElement('div', {class: 'connector'}));
            return $html;
        }

        static _conditionObjectToString(obj) {
            let returnString = '';
            if (typeof obj === 'string') {
                returnString = obj;
            }
            else {
                for (let i = 0; i < obj.arguments.length; i++) {
                    if (typeof obj.arguments[i] === 'string') {
                        returnString += i === obj.arguments.length - 1 ? obj.arguments[i] : `${obj.arguments[i]} ${obj.operator} `;
                    }
                    else {
                        returnString += i === obj.arguments.length - 1 ? `( ${Formula_Condition._conditionObjectToString(obj.arguments[i])} )` : `( ${Formula_Condition._conditionObjectToString(obj.arguments[i])} ) ${obj.operator} `;
                    }
                }
            }
            return returnString;
        }

        static _parseCondition(text) {
            text = text.trim();
            let conditionObj = {
                operators: [],
                arguments: [],
            };
            // Check text brackets matching "(" and ")"
            // ==> If it does not match return {operators: [], arguments: [text]}
            if (!Formula_Condition._hasMatchedBrackets(text)) {
                conditionObj.arguments.push(text);
                return conditionObj;
            }
            // If the text wrapped with brackets remove them and trim it
            text = Formula_Condition._removeWrappingBrackets(text);
            // get next operation
            let nextOperation = Formula_Condition._getNextOperationMatch(text, 0);
            // ==> if no next operation return text
            if (!nextOperation) {
                conditionObj.arguments.push(text);
                return conditionObj;
            }
            // ==> if previous text has matched brackets
            // operators.push(operator); arguments.push(previous text)
            let previousText = text.slice(0, nextOperation.startIndex);
            if (Formula_Condition._hasMatchedBrackets(previousText)) {
                conditionObj.operators.push(nextOperation.type);
                conditionObj.arguments.push(Formula_Condition._removeWrappingBrackets(previousText));
            }
            // ==> else
            // while brackets is not matched  go to the next operation
            // once brackets get matched operators.push(operator) arguments.push(_parseCondition(the operator after text))
            else {
                let i = 0;
                do {
                    i++;
                    nextOperation = Formula_Condition._getNextOperationMatch(text, nextOperation.endIndex + 1);
                    if (!nextOperation) {
                        conditionObj.arguments.push(text);
                        return conditionObj;
                    }
                    previousText = text.slice(0, nextOperation.startIndex);
                } while (!Formula_Condition._hasMatchedBrackets(previousText) && i < 5);
                conditionObj.operators.push(nextOperation.type);
                conditionObj.arguments.push(Formula_Condition._parseCondition(previousText));
            }
            // _parseCondition(the operator after text) ==> for loop on the operators to add them and on the arguments to add them
            let afterText = text.slice(nextOperation.endIndex + 1, text.length);
            let afterObj = Formula_Condition._parseCondition(afterText);
            if (Formula_Condition._hasWrappingBrackets(afterText) && afterObj.operators.length !== 0) {
                conditionObj.arguments.push(afterObj);
            }
            else {
                conditionObj.arguments = [...conditionObj.arguments, ...afterObj.arguments];
                conditionObj.operators = [...conditionObj.operators, ...afterObj.operators];
            }

            return conditionObj;
        }

        static _simplifyConditionObject(conditionObj) {
            let simplifiedObject = {};
            if (conditionObj.operators.length === 0) {
                simplifiedObject = conditionObj.arguments[0];
                return simplifiedObject;
            }
            //Todo change this to be more generic by changing the condition.operators
            if (Array.from(new Set(conditionObj.operators)).length === 1) {
                return Formula_Condition._simplifyOperation(conditionObj);
            }
            simplifiedObject.operator = 'AND';
            simplifiedObject.arguments = [];
            for (let i = 0; i < conditionObj.arguments.length; i++) {
                if (i === conditionObj.arguments.length - 1) {
                    simplifiedObject.arguments.push(conditionObj.arguments[i]);
                }
                else {
                    let newArgument = typeof conditionObj.arguments[i] === 'string' ? conditionObj.arguments[i] : Formula_Condition._simplifyConditionObject(conditionObj.arguments[i]);
                    switch (conditionObj.operators[i]) {
                        case 'AND':
                            if (typeof newArgument === 'string') {
                                simplifiedObject.arguments.push(newArgument);
                            }
                            else if (newArgument.operator === 'AND') {
                                simplifiedObject.arguments.push(...newArgument.arguments);
                            }
                            else {
                                simplifiedObject.arguments.push(newArgument);
                            }
                            if (i === conditionObj.arguments.length - 2) {
                                newArgument = conditionObj.arguments[i + 1];
                                newArgument = typeof newArgument === 'string' ? newArgument : Formula_Condition._simplifyConditionObject(newArgument);
                                if (typeof newArgument === 'string') {
                                    simplifiedObject.arguments.push(newArgument);
                                }
                                else if (newArgument.operator === 'AND') {
                                    simplifiedObject.arguments.push(...newArgument.arguments);
                                }
                                else {
                                    simplifiedObject.arguments.push(newArgument);
                                }
                            }
                            break;
                        case 'OR':
                            let args = [newArgument, typeof conditionObj.arguments[i + 1] === 'string' ? conditionObj.arguments[i + 1] : Formula_Condition._simplifyConditionObject(conditionObj.arguments[i + 1])];
                            i++;
                            while (i < conditionObj.arguments.length - 1 && conditionObj.operators[i] === 'OR') {
                                args.push(typeof conditionObj.arguments[i + 1] === 'string' ? conditionObj.arguments[i + 1] : Formula_Condition._simplifyConditionObject(conditionObj.arguments[i + 1]));
                                i++;
                            }
                            simplifiedObject.arguments.push(Formula_Condition._simplifyConditionObject({
                                operators: ['OR'],
                                arguments: args,
                            }));
                            break;
                    }
                }

            }
            return simplifiedObject;
        }

        static _simplifyOperation(operationObject) {
            let simplifiedObject = {};
            simplifiedObject.operator = operationObject.operators[0];
            simplifiedObject.arguments = [];
            for (let i = 0; i < operationObject.arguments.length; i++) {
                let newArgument = operationObject.arguments[i];
                newArgument = typeof newArgument === 'string' ? newArgument : Formula_Condition._simplifyConditionObject(newArgument);
                if (typeof newArgument === 'string') {
                    simplifiedObject.arguments.push(newArgument);
                }
                else if (newArgument.operator === operationObject.operators[0]) {
                    simplifiedObject.arguments.push(...newArgument.arguments);
                }
                else {
                    simplifiedObject.arguments.push(newArgument);
                }
            }
            return simplifiedObject;
        }

        static _getNextOperationMatch(text, index) {
            let nextOperationMatch = null;
            let newText = text.slice(index, text.length);
            for (let i = 0; i < Formula_Condition.operators.length; i++) {
                let matchResult = newText.match(Formula_Condition.operators[i]);
                if (matchResult) {
                    if (nextOperationMatch) {
                        if (nextOperationMatch.startIndex > matchResult.index + 1 + index) {
                            nextOperationMatch = {
                                type: matchResult.groups.operator,
                                endIndex: matchResult[0].length + matchResult.index + index - 1,
                                startIndex: matchResult.index + 1 + index,
                            };
                        }
                    }
                    else {
                        nextOperationMatch = {
                            type: matchResult.groups.operator,
                            endIndex: matchResult[0].length + matchResult.index + index - 1,
                            startIndex: matchResult.index + 1 + index,
                        };
                    }
                }
            }
            return nextOperationMatch;
        }

        static _hasMatchedBrackets(text) {
            return (text.match(/\(/g) || []).length === (text.match(/\)/g) || []).length;
        }

        static _removeWrappingBrackets(text) {
            text = text.trim();
            if (text[0] !== '(' || text[text.length - 1] !== ')') {
                return text;
            }
            else {
                let bracketsArray = ['('];
                let closingBracketIndex = 0;
                for (let i = 1; i < text.length; i++) {
                    if (text[i] === '(') {
                        bracketsArray.push('(');
                    }
                    else if (text[i] === ')') {
                        bracketsArray.pop();
                        if (bracketsArray.length === 0) {
                            closingBracketIndex = i;
                            break;
                        }
                    }
                }
                if (closingBracketIndex === text.length - 1) {
                    return Formula_Condition._removeWrappingBrackets(text.slice(1, text.length - 1));
                }
                else {
                    return text;
                }
            }
        }

        static _hasWrappingBrackets(text) {
            return text.trim().length > Formula_Condition._removeWrappingBrackets(text).length;
        }

        draw() {
            //region elements creation

            //region left area elements
            this.$html.la = Formula_Utility._createElement('div', {class: 'fc-condition'});

            let conditionTitle = this.$html.la.appendChild(Formula_Utility._createElement('div', {class: 'header', 'data-translation': 'condition'}, 'condition'));
            let contentWrapper = this.$html.la.appendChild(Formula_Utility._createElement('div', {class: 'content-wrapper'}));

            conditionTitle.addEventListener('click', () => Formula_Utility._slideToggle(contentWrapper));

            let canvas = contentWrapper.appendChild(Formula_Utility._createElement('div', {class: 'fc-condition-canvas'}));
            let diagramWrapper = canvas.appendChild(Formula_Utility._createElement('div', {class: 'fc-condition-diagram-wrapper'}));
            let diagram = diagramWrapper.appendChild(Formula_Utility._createElement('div', {class: 'fc-condition-diagram'}));
            diagram.appendChild(Formula_Utility._createElement('div', {class: 'operation-terminal'}, 'START'));
            this.$diagramBody = diagram.appendChild(Formula_Utility._createElement('div', {class: 'diagram-body'}));
            this.drawDiagram();
            diagram.appendChild(Formula_Utility._createElement('div', {class: 'operation-terminal'}, 'END'));
            let textEditor = contentWrapper.appendChild(Formula_Utility._createElement('textarea', {class: 'fc-condition-text-editor'}));
            textEditor.value = this.text;
            // endregion

            //region right area elements
            this.$html.da = Formula_Utility._createElement('div', {class: 'condition-wrapper', 'title': this.text});
            this.raConditionText = this.$html.da.appendChild(Formula_Utility._createElement('div', {class: 'condition'}, this.text));
            //endregion

            //endregion


            //region Behaviour
            textEditor.addEventListener('keyup', Formula_debounce(() => {

                if (textEditor.value === this.text) {
                    return;
                }

                this.text = textEditor.value;
                this.parent.obj.condition = this.text;
                // this.parent.json = JSON.stringify(this.obj);
                this.$html.da.setAttribute('title', textEditor.value);
                this.raConditionText.innerHTML = textEditor.value;
                this.parent.remove();
                this.toObject();
                this.drawDiagram();
                Formula_FlowchartApp.updateNumbers();
            }, 300));
            //endregion
        }

        drawDiagram() {
            this.$diagramBody.innerHTML = '';
            if (typeof this.obj === 'string') {
                this.$diagramBody.appendChild(Formula_Utility._createElement('div', {class: 'connector'}));
                let textWrapper = this.$diagramBody.appendChild(Formula_Utility._createElement('div', {
                    class: 'text-wrapper',
                    title: this.obj,
                }));
                textWrapper.appendChild(Formula_Utility._createElement('div', {class: 'text'}, this.obj));
                this.$diagramBody.appendChild(Formula_Utility._createElement('div', {class: 'connector'}));
            }
            else if (this.obj.operator === 'AND') {
                this.$diagramBody.appendChild(Formula_Condition._drawAnd(this.obj));
            }
            else if (this.obj.operator === 'OR') {
                this.$diagramBody.appendChild(Formula_Condition._drawOr(this.obj));
            }
        }

        toObject() {
            this.obj = Formula_Condition._simplifyConditionObject(Formula_Condition._parseCondition(this.text));
            return this.obj;
        }

        toString() {
            this.text = Formula_Condition._conditionObjectToString(this.obj);
            this.parent.obj.condition = this.text;
            this.parent.json = JSON.stringify(this.obj);
            return this.text;
        }

    }

    //Description of the operator starts from one Character before as JavaScript DO NOT support LOOKBEHIND
    Formula_Condition.operators = [/(?:[^)(][\s]+|\)[\s]*)(?<operator>AND)(?:[\s]*(?=\()|[\s]+(?!\)))/, /(?:[^)(][\s]+|\)[\s]*)(?<operator>OR)(?:[\s]*(?=\()|[\s]+(?!\)))/];

    // /.

    // import {debounce, Utility} from '../../../common/scripts/utility';
    // import {FlowchartApp} from '../../scripts/app';
    // import {IfParser} from '../../scripts/parser';

     class Formula_IfStatement {

        constructor(obj) {
            this.obj = obj;
            // this.parent = parent;
            this.condition = new Formula_Condition(this, this.obj.condition);

            this.json = JSON.stringify(this.obj);
            if (!Formula_FlowchartApp.similarIfMapper[this.json]) {
                Formula_FlowchartApp.similarIfMapper[this.json] = [];
            }

            Formula_FlowchartApp.similarIfMapper[this.json].push(this);

            this.containingArray = Formula_FlowchartApp.similarIfMapper[this.json];
            this.falseValue = typeof obj.falseValue === 'string' ? this.obj.falseValue : new Formula_IfStatement(this.obj.falseValue);
            this.trueValue = typeof obj.trueValue === 'string' ? this.obj.trueValue : new Formula_IfStatement(this.obj.trueValue);
            this.$laElement = null;
            this.$caElement = null;

            this.collapsable = false;

            this.draw();
        }

        get index() {
            return this.containingArray.length > 1 ? Object.keys(ObjectFilter(Formula_FlowchartApp.similarIfMapper, ifObjectArray => ifObjectArray.length > 1)).indexOf(this.json) + 1 : null;
        }

        updateNumber(index, keepNumber = true) {
            if (!keepNumber) {
                this.expand();
                this.$caElement.dataset.number = `null`;
                return;
            }
            this.$caElement.dataset.number = `${this.index}`;
            // this.$caElement.dataset.number = `${this.index} ${Utility.convertNumberToLetterIndex(index)}`;
            this.collapsable = true;
            this.expand();

            // if (index > 0) {
            //     this.collapse();
            // }
            // else {
            //     this.expand();
            // }
        }

        collapse() {
            this.$caElement.dataset.number !== 'null' && this.$caElement.classList.add('collapsed');
        }

        expand() {
            this.$caElement.classList.remove('collapsed');
        }

        toggleCollapse(event) {
            event.stopPropagation();
            this.collapsable && this.$caElement.classList.toggle('collapsed');
            // this.trueValue instanceof IfStatement && this.trueValue.collapse();
            // this.falseValue instanceof IfStatement && this.falseValue.collapse();
        }

        remove(branch, reAdd = true) {
            this.containingArray.splice(this.containingArray.indexOf(this), 1);

            this.containingArray.length === 0 && delete Formula_FlowchartApp.similarIfMapper[this.json];
            if (reAdd) {

                this.json = JSON.stringify(this.obj);


                if (!Formula_FlowchartApp.similarIfMapper[this.json]) {
                    Formula_FlowchartApp.similarIfMapper[this.json] = [];
                }
                this.containingArray = Formula_FlowchartApp.similarIfMapper[this.json];
                this.containingArray.push(this);
            }

            if (branch) {
                this[`${branch}Value`] instanceof Formula_IfStatement && this[`${branch}Value`].remove(null, false);
            }
            else {
                this.trueValue instanceof Formula_IfStatement && this.trueValue.remove(branch, reAdd);
                this.falseValue instanceof Formula_IfStatement && this.falseValue.remove(branch, reAdd);
            }

        }

        select() {
            this.$caElement.classList.add('selected');
            if (Formula_FlowchartApp.selected === this) { return; }
            Formula_FlowchartApp.selected && Formula_FlowchartApp.selected.deselect();
            Formula_FlowchartApp.selected = this;
        }

        deselect() {
            this.$caElement.classList.remove('selected');
            Formula_FlowchartApp.selected = null;
        }

        error(value) {
            this.$caElement.classList.toggle('error', value);
        }

        updateValue(branch, value) {
            if (value === Formula_FlowchartApp.beautifyString(this.obj[`${branch}Value`])) {
                return;
            }
            this.obj[`${branch}Value`] = value;

            let newText = Formula_FlowchartApp.beautifyString(Formula_FlowchartApp.obj);
            Formula_FlowchartApp.$leftAreaEditorTextArea.value = newText;
            let check1 = Formula_FlowchartApp.checkAndParse(newText);

            if (check1.type === 'if') {
                let check2 = Formula_FlowchartApp.checkAndParse(value);
                this.obj[`${branch}Value`] = check2.type==='if'?check2:value;
                this.remove(branch);
                this.error(false);
                this[`${branch}Value`] = typeof this.obj[`${branch}Value`] === 'string' ? this.obj[`${branch}Value`] : new Formula_IfStatement(this.obj[`${branch}Value`]);

            }
            else {
                this.error(true);
                this.remove(branch);
                this[`${branch}Value`] = value;
            }


            this.reDrawBranch(branch);

            Formula_FlowchartApp.updateNumbers();

        }


        draw() {

            //region left area elements
            this.$laElement = Formula_Utility._createElement('div', {class: 'fc-la-if'});
            this.condition = new Formula_Condition(this, this.obj.condition);
            this.$laElement.appendChild(this.condition.$html.la);

            let $laTrueValue = this.$laElement.appendChild(Formula_Utility._createElement('div', {class: 'fc-true-value'}));

            let $trueValueTitle = $laTrueValue.appendChild(Formula_Utility._createElement('div', {class: 'header', 'data-translation': 'true_value'}, 'true_value'));
            let $trueValueWrapper = $laTrueValue.appendChild(Formula_Utility._createElement('div', {class: 'content-wrapper'}));

            $trueValueTitle.addEventListener('click', () => Formula_Utility._slideToggle($trueValueWrapper));

            //todo
            this.$trueValueTextEditor = $trueValueWrapper.appendChild(Formula_Utility._createElement('textarea', {class: 'fc-true-value-text-editor'}));
            this.$trueValueTextEditor.value = Formula_FlowchartApp.beautifyString(this.obj.trueValue) || this.$trueValueTextEditor.value;
            this.$trueValueTextEditor.addEventListener('keyup', Formula_debounce((event) => {this.updateValue('true', event.target.value);}, 300));


            let $laFalseValue = this.$laElement.appendChild(Formula_Utility._createElement('div', {class: 'fc-false-value'}));

            let $falseValueTitle = $laFalseValue.appendChild(Formula_Utility._createElement('div', {class: 'header', 'data-translation': 'false_value'}, 'false_value'));
            let $falseValueWrapper = $laFalseValue.appendChild(Formula_Utility._createElement('div', {class: 'content-wrapper'}));

            $falseValueTitle.addEventListener('click', () => Formula_Utility._slideToggle($falseValueWrapper));
            //todo
            this.$falseValueTextEditor = $falseValueWrapper.appendChild(Formula_Utility._createElement('textarea', {class: 'fc-false-value-text-editor'}));
            this.$falseValueTextEditor.value = Formula_FlowchartApp.beautifyString(this.obj.falseValue) || this.$falseValueTextEditor.value;
            this.$falseValueTextEditor.addEventListener('keyup', Formula_debounce((event) => {this.updateValue('false', event.target.value);}, 300));


            // endregion

            //region drawing area elements
            this.$caElement = Formula_Utility._createElement('div', {class: 'fc-if-wrapper', 'data-number': 'null'});

            this.$caElement.addEventListener('click', this.toggleCollapse.bind(this));
            let $fcIf = this.$caElement.appendChild(Formula_Utility._createElement('div', {class: 'fc-if'}));


            let $fcIfLeft = $fcIf.appendChild(Formula_Utility._createElement('div', {class: 'left'}));
            let $conditionArrowWrapper = $fcIfLeft.appendChild(Formula_Utility._createElement('div', {class: 'condition-arrow-wrapper'}));

            //todo
            this.$conditionWrapper = $conditionArrowWrapper.appendChild(this.condition.$html.da);
            this.$conditionWrapper.addEventListener('click', (event) => {
                event.stopPropagation();
                this.select();
                Formula_FlowchartApp.$leftAreaSelectedContainer.innerHTML = '';
                Formula_FlowchartApp.$leftAreaSelectedContainer.appendChild(this.$laElement);

            });

            //true arrow
            $conditionArrowWrapper.appendChild(Formula_Utility._createElement('div', {class: 'true-arrow'}, `<div class="arrow-tail"></div>`));

            //false arrow
            $fcIfLeft.appendChild(Formula_Utility._createElement('div', {class: 'false-arrow'}, `<div class="arrow-tail"></div>`));

            //false value
            //todo
            if (typeof this.falseValue === 'string') {
                this.$falseValue = $fcIfLeft.appendChild(Formula_Utility._createElement('div', {class: 'value-wrapper', 'title': this.falseValue}, `<div class="false-value"> ${this.falseValue} </div>`));
            }
            else {
                this.$falseValue = $fcIfLeft.appendChild(this.falseValue.$caElement);
            }

            let $fcIfRight = $fcIf.appendChild(Formula_Utility._createElement('div', {class: 'right'}));

            //true value
            //todo
            if (typeof this.trueValue === 'string') {
                this.$trueValue = $fcIfRight.appendChild(Formula_Utility._createElement('div', {class: 'value-wrapper', 'title': this.trueValue}, `<div class="true-value"> ${this.trueValue} </div>`));
            }
            else {
                this.$trueValue = $fcIfRight.appendChild(this.trueValue.$caElement);
            }
            //endregion
        }

        reDrawBranch(branch) {

            const oldValue = this[`$${branch}Value`];
            this[`$${branch}Value`] = typeof this[`${branch}Value`] === 'string' ?
                Formula_Utility._createElement('div', {class: 'value-wrapper', 'title': this[`${branch}Value`]}, `<div class="${branch}-value"> ${this[`${branch}Value`]} </div>`) :
                this[`${branch}Value`].$caElement;
            //console.log(this[`$${branch}Value`]);
            oldValue.parentNode.replaceChild(this[`$${branch}Value`], oldValue);
        }

    }
    // /.




     class Formula_FlowchartApp {

        constructor(text) {
            // if(text.length == 0){
            //     document.querySelector('.fc-if-wrapper').setAttribute("style", "display: none");
            // } else {
                this.header = null;
                this.content = null;
                this.$drawingArea = null;
                this.$leftArea = null;
                this.$tabsContainer = null;
                this.leftAreaTabs = {};
                if(text.length == 0){
                    this.clearDraw();
                } else {
                    Formula_FlowchartApp.obj = this.obj = Formula_FlowchartApp.checkAndParse(text);
                    this.text = text;
                    this.draw();
                }

        }

        static updateNumbers() {
            // //console.log(ObjectFilter(FlowchartApp.similarIfMapper, value => value.length > 1));
            //console.log(Object.keys(FlowchartApp.similarIfMapper).map(key => FlowchartApp.similarIfMapper[key].length));
            Object.keys(Formula_FlowchartApp.similarIfMapper).forEach((key) => {
                if (Formula_FlowchartApp.similarIfMapper[key].length > 1) {
                    Formula_FlowchartApp.similarIfMapper[key].forEach((ifObject, index) => ifObject.updateNumber(index));
                }
                else {
                    Formula_FlowchartApp.similarIfMapper[key].forEach((ifObject, index) => ifObject.updateNumber(index, false));
                }
            });
        }

        static beautifyString(object, tab = Formula_FlowchartApp.globalTab) {

            if (object.type === 'error') { return; }

            if(isObjectEmpty(object)){
                return "";
            }

            return object.type === 'if' ?
                'if(' + object.condition + ';\n' + tab + (typeof object.trueValue === 'string' ? object.trueValue : Formula_FlowchartApp.beautifyString(object.trueValue, tab + Formula_FlowchartApp.globalTab)) + ';\n' + tab + (typeof object.falseValue === 'string' ? object.falseValue : Formula_FlowchartApp.beautifyString(object.falseValue, tab + Formula_FlowchartApp.globalTab)) + ')' :
                object;
        }

        static checkAndParse(text) {
            try {
                let a = Formula_IfParser.parse(text);

                return a;
            } catch (error) {
                //console.error(error);
                return {
                    type: 'error',
                    errorMessage: error,
                    condition: '',
                    trueValue: '',
                    falseValue: '',
                };
            }
        }

        clearDraw() {
               //Create Header
               this.header = new Formula_Header('project-diagram', 'flowchart');
               document.body.appendChild(this.header.$html);
               const $submitBtn = Formula_Utility._createElement('button', {class: 'submit'}, 'save');
               this.header.addBtn($submitBtn);

               //Creat Content
               this.content = new Formula_Content(document.body.appendChild(Formula_Utility._createElement('div')), false, true);


               //region Drawing Area
               this.$drawingArea = this.content.center;
               this.$diagram = this.$drawingArea.appendChild(Formula_Utility._createElement('div', {class: 'fc-diagram'}));
               this.$diagram.innerHtml="";
               // -----------------------------

            Formula_FlowchartApp.updateNumbers();

            //region Left Area
            this.$leftArea = this.content.left;

            this.$tabsContainer = this.$leftArea.appendChild(Formula_Utility._createElement('div', {class: 'tabs-container'}));

            this.leftAreaTabs = {
                $editorTab: this.$tabsContainer.appendChild(Formula_Utility._createElement('div', {class: 'tab active'}, 'Editor')),
                $selectedTab: this.$tabsContainer.appendChild(Formula_Utility._createElement('div', {class: 'tab'}, 'selected')),
            };

            Formula_FlowchartApp.$leftAreaEditorContainer = this.$leftArea.appendChild(Formula_Utility._createElement('div', {class: 'editor-container content-container active'}));

            Formula_FlowchartApp.$leftAreaSelectedContainer = this.$leftArea.appendChild(Formula_Utility._createElement('div', {class: 'selected-container content-container'}));

            Formula_FlowchartApp.$leftAreaEditorTextArea = Formula_FlowchartApp.$leftAreaEditorContainer.appendChild(Formula_Utility._createElement('TEXTAREA', {}, Formula_FlowchartApp.beautifyString({})));
            //console.log(FlowchartApp.$leftAreaEditorTextArea);
            // debounce((event) => this.reDrawAll(event.target.value), 300)
            Formula_FlowchartApp.$leftAreaEditorTextArea.addEventListener('keyup', Formula_debounce((event) => this.reDrawAll(event.target.value), 300));


            this.leftAreaTabs.$editorTab.addEventListener('click', () => {
                this.leftAreaTabs.$editorTab.classList.add('active');
                this.leftAreaTabs.$selectedTab.classList.remove('active');
                Formula_FlowchartApp.$leftAreaEditorContainer.classList.add('active');
                Formula_FlowchartApp.$leftAreaSelectedContainer.classList.remove('active');
            });
            this.leftAreaTabs.$selectedTab.addEventListener('click', () => {
                this.leftAreaTabs.$editorTab.classList.remove('active');
                this.leftAreaTabs.$selectedTab.classList.add('active');
                Formula_FlowchartApp.$leftAreaEditorContainer.classList.remove('active');
                Formula_FlowchartApp.$leftAreaSelectedContainer.classList.add('active');
            });

            //endregion Left Area


            //region Drawing Area buttons
            let $zoomBtnGroup = this.$drawingArea.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn-group zoom-btn-group'}));
            let $zoomInBtn = $zoomBtnGroup.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn icon-plus-B', title: 'zoom in'}));
            let $zoomOutBtn = $zoomBtnGroup.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn icon-minus-B', title: 'zoom out'}));

            let $toggleCollapseBtnGroup = this.$drawingArea.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn-group toggle-collapse-btn-group'}));
            let $collapseAll = $toggleCollapseBtnGroup.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn icon-compress-arrows-alt-B', title: 'collapse all'}));
            let $expandAll = $toggleCollapseBtnGroup.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn icon-expand-arrows-alt-B', title: 'expand all'}));

            let $beautifyBtnGroup = this.$drawingArea.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn-group beautify-btn-group'}));
            let $beautifyText = $beautifyBtnGroup.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn icon-magic-B', title: 'auto indent text'}));

            $zoomInBtn.addEventListener('click',
                () => {
                    let currentFontSize = parseInt(window.getComputedStyle(this.$diagram).getPropertyValue('font-size'), 10);
                    this.$diagram.style.fontSize = currentFontSize + 1 + 'px';
                },
            );
            $zoomOutBtn.addEventListener('click',
                () => {
                    let currentFontSize = parseInt(window.getComputedStyle(this.$diagram).getPropertyValue('font-size'), 10);
                    currentFontSize > 4 && (this.$diagram.style.fontSize = currentFontSize - 1 + 'px');
                },
            );
            $collapseAll.addEventListener('click',
                () => Object.keys(Formula_FlowchartApp.similarIfMapper).forEach((key) => {
                    if (Formula_FlowchartApp.similarIfMapper[key].length > 1) {
                        Formula_FlowchartApp.similarIfMapper[key].forEach((ifObject) => ifObject.collapse());
                    }
                }),
            );
            $expandAll.addEventListener('click',
                () => Object.keys(Formula_FlowchartApp.similarIfMapper).forEach((key) => {
                    if (Formula_FlowchartApp.similarIfMapper[key].length > 1) {
                        Formula_FlowchartApp.similarIfMapper[key].forEach((ifObject) => ifObject.expand());
                    }
                }),
            );
            $beautifyText.addEventListener('click',
                () => {
                    if (Formula_FlowchartApp.selected) {
                        Formula_FlowchartApp.selected.$trueValueTextEditor.value = Formula_FlowchartApp.beautifyString(Formula_FlowchartApp.selected.obj.trueValue);
                        Formula_FlowchartApp.selected.$falseValueTextEditor.value = Formula_FlowchartApp.beautifyString(Formula_FlowchartApp.selected.obj.falseValue);
                    }
                },
            );
               //endregion Drawing Area buttons
        }

        draw() {
            //Create Header
            this.header = new Formula_Header('project-diagram', 'flowchart');
            document.body.appendChild(this.header.$html);
            const $submitBtn = Formula_Utility._createElement('button', {class: 'submit'}, 'save');
            this.header.addBtn($submitBtn);

            //Creat Content
            this.content = new Formula_Content(document.body.appendChild(Formula_Utility._createElement('div')), false, true);


            //region Drawing Area
            this.$drawingArea = this.content.center;
            this.$diagram = this.$drawingArea.appendChild(Formula_Utility._createElement('div', {class: 'fc-diagram'}));
            let ifObject = new Formula_IfStatement(this.obj);
            this.$diagram.appendChild(ifObject.$caElement);

            Formula_FlowchartApp.updateNumbers();
            //endregion Drawing Area

            //region Left Area
            this.$leftArea = this.content.left;

            this.$tabsContainer = this.$leftArea.appendChild(Formula_Utility._createElement('div', {class: 'tabs-container'}));

            this.leftAreaTabs = {
                $editorTab: this.$tabsContainer.appendChild(Formula_Utility._createElement('div', {class: 'tab active'}, 'Editor')),
                $selectedTab: this.$tabsContainer.appendChild(Formula_Utility._createElement('div', {class: 'tab'}, 'selected')),
            };

            Formula_FlowchartApp.$leftAreaEditorContainer = this.$leftArea.appendChild(Formula_Utility._createElement('div', {class: 'editor-container content-container active'}));

            Formula_FlowchartApp.$leftAreaSelectedContainer = this.$leftArea.appendChild(Formula_Utility._createElement('div', {class: 'selected-container content-container'}));

            Formula_FlowchartApp.$leftAreaEditorTextArea = Formula_FlowchartApp.$leftAreaEditorContainer.appendChild(Formula_Utility._createElement('TEXTAREA', {}, Formula_FlowchartApp.beautifyString(this.obj)));
            //console.log(FlowchartApp.$leftAreaEditorTextArea);
            // debounce((event) => this.reDrawAll(event.target.value), 300)
            Formula_FlowchartApp.$leftAreaEditorTextArea.addEventListener('keyup', Formula_debounce((event) => this.reDrawAll(event.target.value), 300));


            this.leftAreaTabs.$editorTab.addEventListener('click', () => {
                this.leftAreaTabs.$editorTab.classList.add('active');
                this.leftAreaTabs.$selectedTab.classList.remove('active');
                Formula_FlowchartApp.$leftAreaEditorContainer.classList.add('active');
                Formula_FlowchartApp.$leftAreaSelectedContainer.classList.remove('active');
            });
            this.leftAreaTabs.$selectedTab.addEventListener('click', () => {
                this.leftAreaTabs.$editorTab.classList.remove('active');
                this.leftAreaTabs.$selectedTab.classList.add('active');
                Formula_FlowchartApp.$leftAreaEditorContainer.classList.remove('active');
                Formula_FlowchartApp.$leftAreaSelectedContainer.classList.add('active');
            });

            //endregion Left Area


            //region Drawing Area buttons
            let $zoomBtnGroup = this.$drawingArea.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn-group zoom-btn-group'}));
            let $zoomInBtn = $zoomBtnGroup.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn icon-plus-B', title: 'zoom in'}));
            let $zoomOutBtn = $zoomBtnGroup.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn icon-minus-B', title: 'zoom out'}));

            let $toggleCollapseBtnGroup = this.$drawingArea.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn-group toggle-collapse-btn-group'}));
            let $collapseAll = $toggleCollapseBtnGroup.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn icon-compress-arrows-alt-B', title: 'collapse all'}));
            let $expandAll = $toggleCollapseBtnGroup.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn icon-expand-arrows-alt-B', title: 'expand all'}));

            let $beautifyBtnGroup = this.$drawingArea.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn-group beautify-btn-group'}));
            let $beautifyText = $beautifyBtnGroup.appendChild(Formula_Utility._createElement('div', {class: 'fc-btn icon-magic-B', title: 'auto indent text'}));

            $zoomInBtn.addEventListener('click',
                () => {
                    let currentFontSize = parseInt(window.getComputedStyle(this.$diagram).getPropertyValue('font-size'), 10);
                    this.$diagram.style.fontSize = currentFontSize + 1 + 'px';
                },
            );
            $zoomOutBtn.addEventListener('click',
                () => {
                    let currentFontSize = parseInt(window.getComputedStyle(this.$diagram).getPropertyValue('font-size'), 10);
                    currentFontSize > 4 && (this.$diagram.style.fontSize = currentFontSize - 1 + 'px');
                },
            );
            $collapseAll.addEventListener('click',
                () => Object.keys(Formula_FlowchartApp.similarIfMapper).forEach((key) => {
                    if (Formula_FlowchartApp.similarIfMapper[key].length > 1) {
                        Formula_FlowchartApp.similarIfMapper[key].forEach((ifObject) => ifObject.collapse());
                    }
                }),
            );
            $expandAll.addEventListener('click',
                () => Object.keys(Formula_FlowchartApp.similarIfMapper).forEach((key) => {
                    if (Formula_FlowchartApp.similarIfMapper[key].length > 1) {
                        Formula_FlowchartApp.similarIfMapper[key].forEach((ifObject) => ifObject.expand());
                    }
                }),
            );
            $beautifyText.addEventListener('click',
                () => {
                    if (Formula_FlowchartApp.selected) {
                        Formula_FlowchartApp.selected.$trueValueTextEditor.value = Formula_FlowchartApp.beautifyString(Formula_FlowchartApp.selected.obj.trueValue);
                        Formula_FlowchartApp.selected.$falseValueTextEditor.value = Formula_FlowchartApp.beautifyString(Formula_FlowchartApp.selected.obj.falseValue);
                    }
                },
            );

            //endregion Drawing Area buttons
        }

        reDrawAll(inputText) {
            //console.log(inputText);
            this.text = inputText;

            if(inputText.length == 0){
                this.$diagram.innerHTML = '';
            }
            else{
                this.obj = Formula_FlowchartApp.checkAndParse(this.text)
                Formula_FlowchartApp.obj = this.obj;
                Formula_FlowchartApp.similarIfMapper = {};
                let ifObject = new Formula_IfStatement(this.obj);
                //console.log(outerHTML(ifObject.$caElement));
                this.$diagram.innerHTML = Formula_outerHTML(ifObject.$caElement);
                Formula_FlowchartApp.updateNumbers();
            }


        }
    }

    Formula_FlowchartApp.similarIfMapper = {};
    Formula_FlowchartApp.globalTab = '  ';


    window.onload = () => {
      let trialString = `if(TOPLAM_TUTAR<(LIMIT) AND (TOPLAM_TUTAR>FINANS_LIMITI OR TOPLAM_TUTAR_FFF>0);if(ONAYCFO.Equals("Onaylandı");if(TAMAMLANDI_MI.Equals("Evet");( "Tamamlandı" );if(SUREC_SAY>0;if(ONAY_GM.Equals("Reddedildi");"GM tarafindan reddedildi";"GM Onayi Bekliyor");"Siparis Surecinde"));if(ONAYCFO.Equals("Reddedildi");"Finans tarafindan reddedildi";"Finans Onayi Bekliyor"));if(TOPLAM_TUTAR>(LIMIT);if(ONAYCFO.Equals("Onaylandı");if(ONAY_GM.Equals("Onaylandı");( "Siparis Surecinde" );if(ONAY_GM.Equals("Reddedildi");"GM tarafindan reddedildi";"GM Onayi Bekliyor"));if(ONAYCFO.Equals("Reddedildi");"Finans tarafindan reddedildi";"Finans Onayi Bekliyor"));if(TAMAMLANDI_MI.Equals("Evet");"Tamamlandı";if(SUREC_SAY>0;if(ONAY_GM.Equals("Reddedildi");"GM tarafindan reddedildi";"GM Onayi Bekliyor");"Siparis Surecinde"))))`;
        // let trialString = '';
        let flowchartApp = new Formula_FlowchartApp(trialString);
        let a = new Intellisense(document.querySelector(".editor-container textarea"), document.getElementById("auto-comp"), formulas, customObject);

        console.log(a);
    };

    


})();

