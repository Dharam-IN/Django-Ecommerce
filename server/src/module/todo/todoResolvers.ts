import { prisma } from "../../config/database.js";

const todoResolvers = {
    Query: {
        todos: async () => await prisma.todo.findMany({orderBy: {id: "desc"}})
    }
}

export default todoResolvers;