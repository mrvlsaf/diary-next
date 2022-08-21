import Card from '../ui/Card';
import classes from './JournalsListItem.module.css';

function JournalsListItem(props) {
    if (props.data.length)
        return (
            <li className={classes.item}>
                <Card>
                    <form className={classes.form}>
                        <div className={classes.control}>
                            <label htmlFor='date'>Date</label>
                            <span>{props.data[2]}</span>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='title'>Title</label>
                            <span>{props.data[0]}</span>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='description'>Description</label>
                            <span className={classes.desc}>{props.data[1]}</span>
                        </div>
                    </form>
                </Card>
            </li>
        );
}

export default JournalsListItem;