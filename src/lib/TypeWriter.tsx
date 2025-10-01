"use client";

import { useCallback, useEffect, useState } from "react";

export default function useTypeWriter(initialText?: string[], caret: string = "|") {
    const [text, setText] = useState<string[]>(initialText || []);
    const [displayText, setDisplayText] = useState("");


    const addText = useCallback((newText: string) => {
        setText(prev => {
            const newTextArray = [...prev, newText];
            return newTextArray;
        });
    }, []);

    const deleteLastTextAdded = useCallback(() => {
        setText(prev => {
            const newText = [...prev];
            newText.pop();
            return newText;
        });
    }, []);

    const newLine = useCallback(() => {
        setText(prev => {
            const newText = [...prev, '\n'];
            return newText;
        });
    }, []);

    useEffect(() => {
        setDisplayText(text.join(""));
    }, [text]);

    return {
        displayText,
        typeWriter: {
            addText,
            deleteLastTextAdded,
            newLine,
            getText: () => text.join(""),
            getCaret: () => caret
        }
    };
}