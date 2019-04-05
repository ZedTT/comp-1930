// usage: elm("div", document.body, "myID", "myClass");
function elm(tag, parent, id, cssClass) {
    var thisElm = document.createElement(tag);
    if (id) {
        thisElm.setAttribute("id", id);
    };
    if (cssClass) {
        thisElm.setAttribute("class", cssClass);
    };
    parent.appendChild(thisElm);
    return thisElm
};

// Adds style to an element
function addStyle(element, property, value) {
    var currentStyle = element.getAttribute("style");
    if (!currentStyle) {
        currentStyle = ""
    }
    element.setAttribute("style", currentStyle + " " + property + ": " + value + ";");
};

// Adds style to an element. styleArray must have an even number of indexes.
function addArrayOfStyles(element, styleArray) {
    var currentStyle = element.getAttribute("style");
    if (!currentStyle) {
        currentStyle = ""
    }
    for (i = 0; i < styleArray.length; i++) {
        element.setAttribute("style", currentStyle + " " + styleArray[i] + ": " + styleArray[++i] + ";");
        currentStyle = element.getAttribute("style");
    };
};

// Adds style to all elements in an array
function addStyleToArray(arrayOfElements, property, value) {
    for (let i = 0; i < arrayOfElements.length; i++) {
        addStyle(arrayOfElements[i], property, value);
    };
};

// Adds style to all elements of a class
function addStyleByClass(cssClass, property, value) {
    let cssClassArray = document.getElementsByClassName(cssClass);

    addStyleToArray(cssClassArray, property, value);
};

function elmStyle(tag, parent, styleArray, id, cssClass) {
    var thisElm = elm(tag, parent, id, cssClass);
    addArrayOfStyles(thisElm, styleArray);
    return thisElm;
};

var body = document.body