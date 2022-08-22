export const addJournal = (data) => {
    return {
        type: "ADD_JOURNAL",
        payload: data
    }
}

// {
//     data
//     // id: new Date().getTime().toString(),
//     // date: data.date,
//     // title: data.title,
//     // description: data.description
// }