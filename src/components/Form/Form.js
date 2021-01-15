import React, {useState} from "react";

const Form = (props) => {
    const [name, setName] = useState("");

    function handleSubmit(ev) {
        ev.preventDefault();
        if(!name.trim()) return;

        props.addTask(name);
        setName("");
    }
    
    function handleOnChange(ev) {
        setName(ev.target.value);
    }

    return (
        <form tasks={task} addTask={addTask} onSubmit={handleSubmit}>
            <h2>
                <label
                    htmlFor="new-todo-input"
                    className=""
                >
                    What needs to be done?
                </label>
            </h2>
            <List tasks={props.tasks} />
            <input
                id="new-todo-input"
                value={name}
                type="text"
                autoComplete="off"
                onChange={handleOnChange}
            />
            <button
                type="submit"
                className="btn btn-primary btn-lg"
            >
                Add
            </button>
        </form>
    );
}

export default Form;
