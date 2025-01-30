import prismaClient from "../../prisma";

interface ProductRequest {
    codigo: string,
    name: string;
    price: string;
    description: string;
    banner: string;
    sector_id: string;
    quantidadeMin: string;
}

class CreateProductService {
    async execute({ codigo, name, price, description, banner, sector_id, quantidadeMin }: ProductRequest) {

        const codigoAlreadyExists = await prismaClient.product.findFirst({
            where: {
                codigo: codigo
            }
        })

        if (codigoAlreadyExists) {
            throw new Error("o Código já existe")
        }


        const product = await prismaClient.product.create({
            data: {
                codigo: codigo,
                name: name,
                price: price,
                description: description,
                banner: banner,
                sector_id: sector_id,
                quantidadeMin: quantidadeMin,
            },
        });

        return product;
    }
}

export { CreateProductService };
