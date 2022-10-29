import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import Todo from "../components/Todo";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <Todo
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
