import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewJournalForm.module.css';

function NewJournalForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const JournalData = {
      title: enteredTitle,
      description: enteredDescription,
      date: props.Date,
    };

    props.onAddJournal(JournalData);
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
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='10'
            ref={descriptionInputRef}
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