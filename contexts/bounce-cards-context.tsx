"use client";

import React, { createContext, useContext, useState } from "react";

interface BounceCardsContextType {
    activeInstanceId: string | null;
    setActiveInstanceId: (id: string | null) => void;
}

const BounceCardsContext = createContext<BounceCardsContextType | undefined>(
    undefined
);

export function BounceCardsProvider({ children }: { children: React.ReactNode }) {
    const [activeInstanceId, setActiveInstanceId] = useState<string | null>(null);

    return (
        <BounceCardsContext.Provider value={{ activeInstanceId, setActiveInstanceId }}>
            {children}
        </BounceCardsContext.Provider>
    );
}

export function useBounceCardsContext() {
    const context = useContext(BounceCardsContext);
    if (context === undefined) {
        throw new Error("useBounceCardsContext must be used within a BounceCardsProvider");
    }
    return context;
}
