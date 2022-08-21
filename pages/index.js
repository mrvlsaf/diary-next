import NewJournalForm from "../components/journals/NewJournalForm"

function CreateJournal(props) {

    const onAddJournal = (JournalData) => {
        console.log(JournalData)
    }

    return (
        <>
            <NewJournalForm
                Date={props.fullDate}
                onAddJournal={onAddJournal}
            />
        </>
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