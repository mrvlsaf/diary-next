import JournalsListItem from './JournalsListItem';
import classes from './JournalsList.module.css';

function JournalsList(props) {

    // console.log(Object.values(props.journalsData))
    return (
        <ul className={classes.list}>
            {/* {Object.values(props.journalsData).map((value, index) => {
                return ( */}
            <JournalsListItem
                // key={index}
                // title={value.title}
                // description={value}
                data={Object.values(props.journalsData)}
            />
            {/* );
            })} */}
        </ul>
    );
}

export default JournalsList;