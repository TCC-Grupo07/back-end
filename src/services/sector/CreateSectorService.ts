import prismaClient from "../../prisma";

interface SectorRequest {
    name: string,
    description: string
}

class CreateSectorService {
    async execute({ name, description }: SectorRequest) {

        if (name === "" || description ==="") {
            throw new Error('Name invalid')
        }

        const sector = await prismaClient.sector.create({
            data: {
                name: name,
                description: description
            },
            select: {
                id: true,
                name: true,
                description: true
            }
        })

        return sector

    }

}


export { CreateSectorService }