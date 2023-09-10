import { useEffect, useState } from "react";


export default function useDidUpdate(cb: () => void, dependencies: any[]) {
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        if (firstRender) setFirstRender(false);
        if (!firstRender) {
            cb();
        }

    }, [dependencies]);

}