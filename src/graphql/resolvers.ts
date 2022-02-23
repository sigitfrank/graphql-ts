import { addUser, getAssignments, getProjects, getUser, getUsers } from '../utils'

interface AddUserInterface {
    name: string
    email: string
    password: string
}

export const resolvers = (() => {
    return {
        Query: {
            users: () => getUsers(),
            projects: () => getProjects(),
            assigments: () => getAssignments(),

        },
        Mutation: {
            AddUser: async (parent: any, { name, email, password }: AddUserInterface, context: any) => {
                const res = await addUser(name, email, password)
                return res
            },
            GetUser: async (parent: any, { id }: any, context: any, info: any) => {
                const res = await getUser(id)
                return res
            },
        }
    }
})()