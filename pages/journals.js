import { useRouter } from 'next/router'
import JournalsList from '../components/journals/JournalsList'

function Journals() {

    const router = useRouter()
    console.log(router.query)
    const data = router.query

    return (
        <>
            <JournalsList journalsData={data} />
        </>
    )
}

export default Journals