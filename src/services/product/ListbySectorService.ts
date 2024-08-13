import prismaClient from "../../prisma";

interface ProductRequest {
    sector_id: string
}

class ListByProductService {

    async execute({ sector_id }: ProductRequest) {

        const findByCategory = await prismaClient.product.findMany({
            where: {
                sector_id: sector_id
            }
        })

        return findByCategory

    }

}

export { ListByProductService }