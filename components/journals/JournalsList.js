import JournalsListItem from './JournalsListItem';
import classes from './JournalsList.module.css';

function JournalsList(props) {

    return (
        <ul className={classes.list}>
            {
                props.journalsData.map((item, index) => {
                    return (
                        <JournalsListItem
                            key={index}
                            date={item.date}
                            title={item.title}
                            description={item.description}
                        />
                    )
                })
            }
        </ul>
    );
}

export default JournalsList;