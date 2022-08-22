import JournalsList from '../components/journals/JournalsList'
import { useSelector } from 'react-redux'

function Journals(props) {

    const list = useSelector((state) => state.journalReducer.list)

    if (list.length)
        return (
            <>
                <JournalsList journalsData={list} />
            </>
        )
    else
        return (
            <h2 className="noData">No Journals created yet.</h2>
        )
}

export default Journals