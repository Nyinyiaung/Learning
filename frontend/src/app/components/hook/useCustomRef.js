'use client'

import {useState} from "react";

export default function useCustomRef(initialState) {
    const [state] = useState(
        {
            current: initialState,
        }
    );
    return state;
}