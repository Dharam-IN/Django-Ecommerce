const todoSchema = `#graphql 

    scalar Date

    type Todo{
        id: Int!
        title: String
        completed: Boolean
        created_at: Date
    }

    type Query{
        todos: [Todo]
    }

`