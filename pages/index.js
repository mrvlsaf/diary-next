import NewJournalForm from "../components/journals/NewJournalForm"

function CreateJournal(props) {
    return (
        <NewJournalForm
            Date={props.fullDate}
        />
    )
}

export async function getStaticProps() {
    const date = new Date()
    const day = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()

    return {
        props: {
            fullDate: day
        },
        revalidate: 10
    }
}

export default CreateJournal