import {useEffect, useState} from "react";
import axios from "axios";

function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);
    const API = "http://localhost:4000/a5/todos";
    // const [todo, setTodo] = useState({});
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todos, setTodos] = useState([]);
    // getting items from ana rray
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    useEffect(() => {
        fetchTodos();
    }, []);
    //deleting items from an array
    const removeTodo = async (todo) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    // creating new array items
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(
            `${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };


    const deleteTodo = async (todo) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        }catch(error){
            console.log(error);
            setErrorMessage(error.response.data.message);

        }
    };

    const updateTodo = async () => {
        try{
            const response = await axios.put(
                `${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (
                t.id === todo.id ? todo : t)));
            setTodo({});
        }catch(error){
            console.log(error);
            setErrorMessage(error.response.data.message);
        }

    };


    return (
        <div style={{"background-color": "#f9f1f1"}}>
            <h3>Working with Arrays</h3>
            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value
                })}
                className="form-control mb-2"
                type="number"
            />


            {/*Post button */}
            <textarea
                onChange={(e) => setTodo({ ...todo,
                    description: e.target.value })}
                value={todo.description} type="text"
            />
            <input
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value })}
                value={todo.due} type="date"
            />
            <label>
                <input
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked })}
                    value={todo.completed} type="checkbox"
                />
                Completed
            </label>
            <button onClick={postTodo} >
                Post Todo
            </button>
            <button onClick={updateTodo}>
                Update Todo
            </button>

            <div>
                {/*updating an item in an array*/}
                <input
                    value={todo.title}
                    onChange={(e) => setTodo({
                        ...todo, title: e.target.value
                    })}
                    className="form-control mb-2"
                    type="text"
                />

                <button onClick={updateTitle}
                        className="btn btn-success mb-2 w-100">
                    Update Title
                </button>

                <ul className="list-group">
                    <button onClick={createTodo}
                            className="btn btn-primary mb-2 w-100">
                        Create Todo
                    </button>
                    <button
                        onClick={() => removeTodo(todo)}
                        className="btn btn-danger float-end"
                        style={{"margin-left":"10px"}}>
                        Remove
                    </button>

                    {todos.map((todo) => (
                        <li key={todo.id}
                            className="list-group-item"
                            key={todo.id}>



                            <button
                                onClick={() => deleteTodo(todo)}
                                className="btn btn-danger float-end ms-2">
                                Delete
                            </button>
                            <button
                                onClick={() => fetchTodoById(todo.id)}
                                className="btn btn-warning me-2 float-end" >
                                Edit
                            </button>
                            <input
                                checked={todo.completed}
                                type="checkbox" readOnly
                            />



                            {todo.title}
                            <p>{todo.description}</p>
                            <p>{todo.due}</p>

                            {todo.title}
                        </li>
                    ))}
                </ul>

                {/*the error message*/}
                {errorMessage && (
                    <div className="alert alert-danger mb-2 mt-2">
                        {errorMessage}
                    </div>
                )}

                <h3>Updating an Item in an Array</h3>
                <div>

                    <h4>Update the title:</h4>
                    <a
                        href={`${API}/${todo.id}/title/${todo.title}`}
                        className="btn btn-primary me-2">
                        Update Title to {todo.title}
                    </a>
                </div>

            </div>



            {/*updating the completed*/}
            <div>

                <h3>Marking an item in the array as completed</h3>
                <div>
                    <input
                        value={!todo.completed}
                        onChange={(e) => setTodo({
                            ...todo, completed: e.target.value
                        })}
                        className="form-control mb-2 "
                        style={{"width": "50px"}}
                        type="checkbox"
                    />
                </div>
                <a
                    href={`${API}/${todo.id}/completed/${todo.completed}`}
                    className="btn btn-primary me-2">
                    Update Title to {todo.completed}
                </a>

            </div>
            <div>

                <h3>Updating the description of an  Item in an Array</h3>
                <input
                    value={todo.description}
                    onChange={(e) => setTodo({
                        ...todo, description: e.target.value })}
                    className="form-control mb-2"
                    type="text"
                />
                <a
                    href={`${API}/${todo.id}/description/${todo.description}`}
                    className="btn btn-primary me-2" >
                    Update Description to {todo.description}
                </a>

            </div>

            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`}
               className="btn btn-primary me-2">
                Delete Todo with ID = {todo.id}
            </a>

            <h3>Retrieving Arrays</h3>
            <a href={API}
               className="btn btn-primary me-2">
                Get All Todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input
                className="form-control"
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: e.target.value
                })}/>
            <a href={`${API}/${todo.id}`}
               className="btn btn-primary me-2">
                Get Todo by ID
            </a>


            <h3>Filtering Array Items</h3>
            <a href={`${API}/${todo.id}?completed=true`}
               className="btn btn-primary me-2">
                Get Completed Todos
            </a>
            <h4>Creating new Items in an Array</h4>
            <a href={`${API}/create`}
               className="btn btn-primary me-2">
                Create Todo
            </a>


        </div>
    );
}

export default WorkingWithArrays;