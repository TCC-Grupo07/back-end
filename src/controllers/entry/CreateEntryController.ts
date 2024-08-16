

import prismaClient from "../../prisma";

interface EntryRequest {
    quantidade: number;
    product_id: string;
}

class CreateEntryService {
    async execute({ quantidade, product_id }: EntryRequest) {
        // Verifica se o produto existe no banco de dados
        const product = await prismaClient.product.findUnique({
            where: { id: product_id },
        });

        if (!product) {
            throw new Error('Produto não encontrado');
        }

        // Cria a nova entrada (Entry)
        const entry = await prismaClient.entry.create({
            data: {
                quantidade: quantidade,
                product: {
                    connect: { id: product_id }
                }
            }
        });

        return entry;
    }
}

export { CreateEntryService };
