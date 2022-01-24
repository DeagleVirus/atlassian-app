const SET_SUMMARY = 'SET_SUMMARY'
const SET_DESCRIPTION = 'SET_DESCRIPTION'
const SET_TASK_TYPE = 'SET_TASK_TYPE'

const initialState = {
	summary: '',
	description: '',
	taskType: '',
}

export const createIssueReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SUMMARY:
			return {
				...state,
				summary: action.payload,
			}

		case SET_DESCRIPTION:
			return {
				...state,
				description: action.payload,
			}

		case SET_TASK_TYPE:
			return {
				...state,
				taskType: action.payload,
			}

		default:
			return state
	}
}

export const setSummary = (summary) => ({ type: SET_SUMMARY, payload: summary })
export const setDescription = (description) => ({
	type: SET_DESCRIPTION,
	payload: description,
})
export const setTaskType = (taskType) => ({
	type: SET_TASK_TYPE,
	payload: taskType,
})
