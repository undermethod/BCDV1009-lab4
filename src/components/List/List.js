import React from "react";
import {nanoid} from "nanoid";

const List = (props) => {
    return (
        <ul>
            {props.tasks.map(t => <li key={nanoid()}>{t.name}</li>)}
        </ul>
    );
};

export default List;
