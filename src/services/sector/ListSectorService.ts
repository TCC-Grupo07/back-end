import prismaClient from "../../prisma";

class ListSectorService {
    async execute() {
        const category = await prismaClient.sector.findMany({
            select: {
                id: true,
                name: true,
                description: true
            }
        })

        return category

    }
}

export { ListSectorService }