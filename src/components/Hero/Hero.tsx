"use client";

import useTypeWriter from "@/lib/TypeWriter";
import { getRandomTypingDelay } from "@/lib/utils";
import { useEffect } from "react";

export default function PreviousRoles() {
    const { displayText, typeWriter } = useTypeWriter([""], "|");

    useEffect(() => {
        const startAfter = 2000;
        const timer = setTimeout(() => {
            typeWriterAnimation(typeWriter);
        }, startAfter);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="flex flex-col items-center justify-center w-full text-center mb-16 sm:mb-0">

            <div className="inline font-redaction35 italic text-5xl">
                <span className="whitespace-pre-wrap">{displayText}</span>
                <span className="animate-fade-blink relative -top-1">{typeWriter.getCaret()}</span>
            </div>
        </div>
    );
}

type TypeWriter = ReturnType<typeof useTypeWriter>["typeWriter"];

const typeWriterAnimation = (typeWriter: TypeWriter) => {
    const text = "Hey!\nI'm Abhinav.\nA Software Engineer.";
    let index = 0;

    const typeNextCharacter = () => {
        if (index < text.length) {
            const char = text[index];

            if (char === '\n') {
                typeWriter.newLine();
            } else {
                typeWriter.addText(char);
            }

            index++;

            const delay = (char === '!' || char === '.') ? 1000 : getRandomTypingDelay();
            setTimeout(typeNextCharacter, delay);
        }
    };

    typeNextCharacter();
};