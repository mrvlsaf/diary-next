import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addJournal } from '../../actions/index'
import Card from '../ui/Card';
import classes from './NewJournalForm.module.css';

function NewJournalForm(props) {

  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function submitHandler(event) {
    event.preventDefault();
    const data = { date: props.Date, title: title, description: description }
    dispatch(addJournal(data))
    setTitle("")
    setDescription("")
    alert("Your journal has been submitted.")
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='date'>Date</label>
          <span>{props.Date}</span>
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' required value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea required rows='10' value={description} onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Journal</button>
        </div>
      </form>
    </Card>
  );
}

export default NewJournalForm;