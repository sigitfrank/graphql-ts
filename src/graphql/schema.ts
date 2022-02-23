import { gql } from 'apollo-server'

export const typeDefs = gql`
    type User {
      id: String
      name: String
      email: String
      password: String
    }
    type UserProject {
      id: String
      name: String
      email: String
      password: String
      projects: [Project]
    }
    type Project {
        id: Int
        title: String
        active: Boolean
        members: [User]
    }
    type Assignment {
        id: Int
        project_id: Int
        user_id: String
        name: String
        title: String
        status: String
    }
    
    type Query {
      users: [UserProject]
      projects: [Project]
      assigments: [Assignment]
    }
    type Mutation {
        AddUser(name: String, email: String, password: String): String
        GetUser(id: String):User
    }
  `
