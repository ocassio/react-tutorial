import { useEffect } from "react";

export const useWindowEvent = (type, handler, deps) => {
    useEffect(() => {
        window.addEventListener(type, handler);
        return () => window.removeEventListener(type, handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, ...deps]);
}
