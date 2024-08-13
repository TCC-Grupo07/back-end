import prismaClient from "../../prisma";

interface ProductRequest {
    sector_id: string
}

class ListByProductService {

    async execute({ sector_id }: ProductRequest) {

        const findBySector = await prismaClient.product.findMany({
            where: {
                sector_id: sector_id
            }
        })

        return findBySector

    }

}

export { ListByProductService }