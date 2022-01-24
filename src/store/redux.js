import { combineReducers } from "redux";
import { createStore } from "redux";
import { createIssueReducer } from "./createIssueReducer";
import { createProjectReducer } from "./createProjectReducer";

const rootReducer = combineReducers({
    createIssue: createIssueReducer,
    createProject: createProjectReducer
})

const store = createStore(rootReducer)

export default store