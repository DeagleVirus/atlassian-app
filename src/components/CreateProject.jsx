import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schemaCreateProject from '../additional/schemaCreateProject'
import '../styles/style.css'
import { useDispatch, useSelector } from 'react-redux'
import { setDescription, setKey, setName } from '../store/createProjectReducer'
import { onSubmit } from '../DAL/onSubmit'

export const CreateProject = () => {
	const dispatch = useDispatch()

	const name = useSelector((state) => state.createProject.name)
	const description = useSelector((state) => state.createProject.description)
	const key = useSelector((state) => state.createProject.key)

	const onNameClick = (event) => {
		dispatch(setName(event))
	}

	const onDescriptionClick = (event) => {
		dispatch(setDescription(event))
	}

	const onKeyClick = (event) => {
		dispatch(setKey(event))
	}

	const {
		register,
		handleSubmit,
		formState: { errors, submitCount },
	} = useForm({
		resolver: yupResolver(schemaCreateProject),
	})

	const body = (name, description, key) => {
		return {
			key: key,
			name: name,
			projectTypeKey: 'software',
			projectTemplateKey:
				'com.pyxis.greenhopper.jira:gh-simplified-agility-scrum',
			description: description,
			leadAccountId: '619b60986d002b006b5c26f1',
			url: 'http://atlassian.com',
			assigneeType: 'PROJECT_LEAD',
			avatarId: 10200,
		}
	}

	return (
		<div className='App'>
			<form
				onSubmit={handleSubmit(() =>
					onSubmit(
						body(name, description, key),
						`https://oleksandr1.atlassian.net/rest/api/2/project`,
						'POST',
					),
				)}
			>
				<div>
					<label>
						Name
						<div>
							<input
								type="text"
								className="inputField"
								placeholder="Enter the project name"
								{...register('name', {
									onChange: (e) => onNameClick(e.target.value),
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
								placeholder="Enter the description of the project"
								{...register('description', {
									onChange: (e) => onDescriptionClick(e.target.value),
								})}
							/>
						</div>
					</label>
				</div>

				<div>
					<label>
						Key
						<div>
							<input
								type="text"
								className="inputField"
								placeholder="Enter the key"
								{...register('key', {
									onChange: (e) => onKeyClick(e.target.value),
								})}
							/>
						</div>
					</label>
				</div>

				<div>
					<input className="inputButton" type="submit" {...register('enter')} />
				</div>
			</form>
		</div>
	)
}
