import React from "react";
import { observer } from "mobx-react";

export default observer(({ potato }: { potato: number[] }) => (
    <div>
        Hello,{" "}
        {potato.map(p => (
            <li>{p}</li>
        ))}
    </div>
));
