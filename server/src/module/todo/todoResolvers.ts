import { prisma } from "../../config/database.js";

const todoResolvers = {
    Query: {
        todos: async () => await prisma.todo.findMany({orderBy: {id: "desc"}}),
        getTodo: async (_, {id}) => {
            return await prisma.todo.findUnique({where: {id: id}})
        }
    },
    Mutation: {
        createTodo: async (_, {title}) => {
            console.log("this is todoo", title)
            const newTodo = await prisma.todo.create({
                data: {
                    title: title,
                    completed: false
                }
            })
            return newTodo;
        },
        updateTodo: async (_, {id, title}) => {
            await prisma.todo.update({
                data: {
                    title: title
                },
                where: {
                    id: id
                }
            })
    
            return {message: "Update Successfully"};
        },
        completedUpdate: async(_, {id, completed}) => {
            await prisma.todo.update({
                where: {
                    id: id
                },
                data: {
                    completed: completed
                }
            })

            return {message: "You are a human!"}
        },
        deleteTodo: async(_, {id}) => {
            await prisma.todo.delete({
                where: {
                    id: id
                }
            });

            return {message: "Todo Successfully deleted!"}
        }
    }
}

export default todoResolvers;