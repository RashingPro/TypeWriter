"use client"

import {useState} from "react";

interface TypeWriterProps {
    strings: Array<string>,
    isCursor?: boolean,
    delayAfterDeleteFunction: Function,
    delayAfterPrintFunction: Function,
    delayBetweenSymbolFunction: Function,
    getNextStringIndexFunction: Function,
    debug?: boolean,
    wrapperClassNameFunction: Function,
    cursorClassNameFunction: Function
}

class TypeWriterController {
    /** Never change this value, it will break whole effect */
    public setIsPaused: Function;
    /** HTML elements to render */
    public display: HTMLCollection;

    constructor() {
        this.setIsPaused = useState();
    }
    private update() {

    }
}

export default function TypeWriter() {
    const controller = new TypeWriterController();
    return controller;
}
