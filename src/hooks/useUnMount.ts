

import { useEffect, useState } from "react";


export default function useUnMount(cb: () => void) {
    useEffect(() => {
        return () => {
            cb();
        }
    }, []);
}