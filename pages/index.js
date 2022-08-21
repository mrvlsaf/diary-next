import NewJournalForm from "../components/journals/NewJournalForm"
import { useRouter } from 'next/router'

function CreateJournal(props) {

    const router = useRouter()
    
    const onAddJournal = (JournalData) => {
        console.log(JournalData)
        router.push({
            pathname: '/journals',
            query: JournalData,
        }, '/journals')
    }

    return (
        <NewJournalForm
            Date={props.fullDate}
            onAddJournal={onAddJournal}
        />
    )
}

export async function getStaticProps() {
    const date = new Date()
    const day = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    const fullDate = day + ' ' + time

    return {
        props: {
            fullDate: fullDate
        },
        revalidate: 10
    }
}

export default CreateJournal
