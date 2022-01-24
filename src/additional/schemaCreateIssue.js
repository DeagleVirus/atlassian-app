import * as yup from 'yup'

const schemaCreateIssue = yup.object().shape({
    summary: yup.string().required(),
    description: yup.string().notRequired(),
})

export default schemaCreateIssue