const initialData = {
    list: []
}

const journalReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_JOURNAL":
            const {date, title, description} = action.payload
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: new Date().getTime().toString(),
                        date: date,
                        title: title,
                        description: description
                    }
                ]
            }

        default: return state
    }
}

export default journalReducer