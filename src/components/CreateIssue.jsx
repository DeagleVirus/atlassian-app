import React, { useState } from 'react'
import '../styles/style.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schemaCreateIssue from '../additional/schemaCreateIssue'
import { onSubmit } from '../DAL/onSubmit'
import { useDispatch, useSelector } from 'react-redux'
import {
	setDescription,
	setSummary,
	setTaskType,
} from '../store/createIssueReducer'

export const CreateIssue = () => {
	const dispatch = useDispatch()
	const summary = useSelector((state) => state.createIssue.summary)
	const description = useSelector((state) => state.createIssue.description)
	const taskType = useSelector((state) => state.createIssue.taskType)

	const onSummaryClick = (event) => {
		dispatch(setSummary(event))
	}

	const onDescriptionClick = (event) => {
		dispatch(setDescription(event))
	}

	const onTaskTypeClick = (event) => {
		dispatch(setTaskType(event))
	}

	const {
		register,
		handleSubmit,
		formState: { errors, submitCount },
	} = useForm({
		resolver: yupResolver(schemaCreateIssue),
	})

	const body = (summary, description, taskType) => {
		switch (taskType) {
			case 'task': {
				taskType = '10002'
				break
			}
			case 'bug': {
				taskType = '10003'
				break
			}
			case 'story': {
				taskType = '10001'
				break
			}
			default: {
				taskType = '10002'
			}
		}
		return {
			fields: {
				project: {
					id: '10000',
				},
				summary: summary,
				issuetype: {
					id: taskType,
				},
				reporter: {
					id: '619b60986d002b006b5c26f1',
				},
				description: description,
			},
		}
	}

	return (
		<>
			{taskType}
			<div className="App">
				<form
					onSubmit={handleSubmit(() =>
						onSubmit(
							body(summary, description, taskType),
							`/rest/api/2/issue`,
							'POST',
						),
					)}
				>
					<div>
						<label>
							Summary
							<div>
								<input
									type="text"
									className="inputField"
									placeholder="Enter your summary..."
									{...register('summary', {
										onChange: (e) => onSummaryClick(e.target.value),
									})}
								/>
							</div>
						</label>
					</div>
					<div>
						<label>
							Description
							<div>
								<input
									type="text"
									className="inputField"
									placeholder="Enter your description..."
									{...register('description', {
										onChange: (e) => onDescriptionClick(e.target.value),
									})}
								/>
							</div>
						</label>
					</div>

					<div>
						<label>
							Select the type of issue
							<div>
								<select
									className="select"
									{...register('taskType', {
										onChange: (e) => onTaskTypeClick(e.target.value),
									})}
								>
									<option value="task">Task</option>
									<option value="bug">Bug</option>
									<option value="story">Story</option>
								</select>
							</div>
						</label>
					</div>

					<div>
						<input
							className="inputButton"
							type="submit"
							{...register('enter')}
						/>
					</div>
					{submitCount}
					<div>summary: {summary}</div>
					<div>description: {description}</div>
				</form>
			</div>
		</>
	)
}
