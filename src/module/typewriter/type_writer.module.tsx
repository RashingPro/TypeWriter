"use client"

import {Dispatch, JSX, SetStateAction, useState} from "react";

const TypeWriterDefaultFunctions = {
    defaultDelayAfterDelete: () => {},
    defaultDelayAfterPrint: () => {},
    defaultDelayBetweenSymbol: () => {},
    defaultGetNextStringIndex: () => {},
}

export default class TypeWriterController {
    /** <b>Never</b> change this value, it can break whole effect */
    private isPaused: boolean; public setIsPaused: Dispatch<SetStateAction<boolean>>;
    private displayedText: string; private setDisplayedText: Dispatch<SetStateAction<string>>;
    private currentStringIndex: number; private setCurrentStringIndex: Dispatch<SetStateAction<number>>;
    private isDeleting: boolean; private setIsDeleting: Dispatch<SetStateAction<boolean>>;
    /** HTML elements to render */
    public display: JSX.Element;
    public delayAfterDelete: Function;
    public delayAfterPrint: Function;
    public delayBetweenSymbol: Function;
    public getNextStringIndex: Function;
    public strings: string[];

    constructor(_strings: string[]) {
        [this.isPaused, this.setIsPaused] = useState(false);
        this.display = <>{this.isPaused ? "da" : ""}</>;
        [this.displayedText, this.setDisplayedText] = useState("");
        [this.isDeleting, this.setIsDeleting] = useState(false);
        [this.currentStringIndex, this.setCurrentStringIndex] = useState(0);
        this.delayAfterDelete = TypeWriterDefaultFunctions.defaultDelayAfterDelete;
        this.delayAfterPrint = TypeWriterDefaultFunctions.defaultDelayAfterPrint;
        this.delayBetweenSymbol = TypeWriterDefaultFunctions.defaultDelayBetweenSymbol;
        this.getNextStringIndex = TypeWriterDefaultFunctions.defaultGetNextStringIndex;
        this.strings = _strings;
    }
    private update() {
        if (this.isPaused) return;
        if (this.strings.length < 1) return;

        if (this.isDeleting) {
            this.setDisplayedText((prevState) => {
                return prevState.slice(0, prevState.length - 1);
            });
            if (this.displayedText.length <= 0) {
                this.setIsDeleting(false);
                this.setCurrentStringIndex(this.getNextStringIndex());
                setTimeout(this.update, this.delayAfterDelete())
                return;
            }
        } else {
            this.setDisplayedText((prevState) => {
                return prevState + this.strings[this.currentStringIndex][prevState.length]
            })
            if (this.displayedText.length == this.strings[this.currentStringIndex].length) {
                this.setIsDeleting(true);
                setTimeout(this.update, this.delayAfterPrint())
            }
        }
        setTimeout(this.update, this.delayBetweenSymbol())
    }
    public run() {
        this.setIsPaused(false);
        this.update()
    }
}
