const todoSchema = `#graphql 

    scalar Date

    type ResponseType{
        message: String
    }

    type Todo{
        id: Int!
        title: String
        completed: Boolean
        created_at: Date
    }

    type Query{
        todos: [Todo],
        getTodo(id: Int): Todo
    }

    type Mutation{
        createTodo(title: String): Todo,
        updateTodo(id: Int, title: String): ResponseType,
        completedUpdate(id: Int, completed: Boolean): ResponseType,
        deleteTodo(id: Int): ResponseType
    }

`;
export default todoSchema;
