"use client"

import TypeWriter from "@/module/typewriter/type_writer.module";
import {useEffect} from "react";

export default function Page() {
    const controller = new TypeWriter([
        "banana",
        "abpba",
        "dada"
    ])
    useEffect(() => {
        controller.strings = [
            "banana",
            "abpba",
            "dada"
        ]
        controller.run();
    }, [])
    return controller.display;
}