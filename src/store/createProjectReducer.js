const SET_NAME = 'SET_NAME'
const SET_DESCRIPTION = 'SET_DESCRIPTION'
const SET_KEY = 'SET_KEY'

const initialState = {
	name: '',
	description: '',
	key: '',
}

export const createProjectReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NAME:
			return {
				...state,
				name: action.payload,
			}

		case SET_DESCRIPTION:
			return {
				...state,
				description: action.payload,
			}

		case SET_KEY:
			return {
				...state,
				key: action.payload,
			}

		default:
			return state
	}
}

export const setName = (name) => ({ type: SET_NAME, payload: name })
export const setDescription = (description) => ({
	type: SET_DESCRIPTION,
	payload: description,
})
export const setKey = (key) => ({ type: SET_KEY, payload: key })
