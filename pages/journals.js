import JournalsList from '../components/journals/JournalsList'
import { useSelector } from 'react-redux'
import SearchBar from '../components/ui/SearchBar'

function Journals(props) {

    const list = useSelector((state) => state.journalReducer.list)

    if (list.length)
        return (
            <>
                <SearchBar />
                <JournalsList journalsData={list} />
            </>
        )
    else
        return (
            <h2 className="noData">No Journals created yet.</h2>
        )
}

export default Journals