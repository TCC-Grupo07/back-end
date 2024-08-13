import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    sector_id: string;
}

class CreateProductService {
    async execute({ name, price, description, banner, sector_id }: ProductRequest) {

        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                sector_id: sector_id
            }
        })

        return product
    }
}

export { CreateProductService }