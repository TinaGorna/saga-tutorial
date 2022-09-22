const initial = {
    people: []
}
export default function reducer(state = initial, action: any) {
    switch (action.type) {
        case "SET_PEOPLE": {
            return {
                ...state,
                people: [
                    ...state.people,
                    ...action.payload,
                ]
            }
        }
    }
    return state;
}