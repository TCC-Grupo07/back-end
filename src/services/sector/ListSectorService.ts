import prismaClient from "../../prisma";

class ListSectorService {
    async execute() {
        const sector = await prismaClient.sector.findMany({
            select: {
                id: true,
                name: true,
                description: true
            }
        })

        return sector

    }
}

export { ListSectorService }