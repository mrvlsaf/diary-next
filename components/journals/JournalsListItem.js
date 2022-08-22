import Card from '../ui/Card';
import classes from './JournalsListItem.module.css';

function JournalsListItem(props) {
    return (
        <li className={classes.item}>
            <Card>
                <form className={classes.form}>
                    <div className={classes.control}>
                        <label htmlFor='date'>Date</label>
                        <span>{props.date}</span>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='title'>Title</label>
                        <span>{props.title}</span>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='description'>Description</label>
                        <span className={classes.desc}>{props.description}</span>
                    </div>
                </form>
            </Card>
        </li>
    );
}

export default JournalsListItem;