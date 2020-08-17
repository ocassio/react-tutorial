import React, { useState } from "react";
import { useWindowEvent } from "../hooks/use-window-event.hook";

function MouseCoordinates() {
    const [{ x, y }, setCoords] = useState({ x: 0, y: 0 });

    useWindowEvent(
        'mousemove',
        e => setCoords({ x: e.x, y: e.y }),
        [setCoords]
    );

    return (
        <div>
            {x}:{y}
        </div>
    );
}

export default MouseCoordinates;
