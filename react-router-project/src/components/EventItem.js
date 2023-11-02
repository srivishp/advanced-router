import classes from "./EventItem.module.css";
import { Link, useSubmit } from "react-router-dom";
function EventItem({ event }) {
  // useSubmit hook helps in submitting data programmatically
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      // We can pass 2 args to this submit()
      // 1st arg is data we wanna submit, which will automatically be wrapped in a Form data object
      // 2nd arg allows to set the same values, we could set on a form
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
