import { useEffect, useState } from "react";


export default function useOnMount(cb: () => void) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        cb();
    }, []);

    return mounted;
}