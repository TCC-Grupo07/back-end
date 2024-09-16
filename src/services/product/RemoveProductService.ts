import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string;
}

class RemoveProductService {
    async execute({ product_id }: ProductRequest) {
        // Verifica se o produto tem entradas ou saídas associadas
        const productWithEntriesOrOutputs = await prismaClient.product.findFirst({
            where: {
                id: product_id,
            },
            include: {
                Entry: true,
                Output: true,
            },
        });

        if (!productWithEntriesOrOutputs) {
            throw new Error("Produto não encontrado");
        }

        const product = await prismaClient.product.delete({
            where: {
                id: product_id,
            },
        });

        return product;
    }
}

export { RemoveProductService };
