
// import prismaClient from "../../prisma";

// interface EntryRequest {
//     quantidade: number | string; // Permite que quantidade seja um número ou string
//     product_id: string;
// }

// class CreateEntryService {
//     async execute({ quantidade, product_id }: EntryRequest) {
//         // Verifica se o ID do produto foi fornecido
//         if (!product_id) {
//             throw new Error('Product ID is required.');
//         }

//         // Verifica se o produto existe no banco de dados
//         const product = await prismaClient.product.findUnique({
//             where: { id: product_id },
//         });

//         if (!product) {
//             throw new Error('Produto não encontrado.');
//         }

//         // Converte a quantidade para número, se necessário
//         const quantidadeAsNumber = typeof quantidade === 'string' ? parseInt(quantidade, 10) : quantidade;

//         if (isNaN(quantidadeAsNumber)) {
//             throw new Error('Quantidade inválida.');
//         }

//         // Cria a nova entrada (Entry)
//         const entry = await prismaClient.entry.create({
//             data: {
//                 quantidade: quantidadeAsNumber, // Garante que seja um número
//                 product: {
//                     connect: { id: product_id }
//                 }
//             }
//         });

//         return entry;
//     }
// }

// export { CreateEntryService };

import prismaClient from "../../prisma";

interface EntryRequest {
    quantidade: number | string; // Permite que quantidade seja um número ou string
    product_id: string;
}

class CreateEntryService {
    async execute({ quantidade, product_id }: EntryRequest) {
        // Verifica se o ID do produto foi fornecido
        if (!product_id) {
            throw new Error('Product ID is required.');
        }

        // Verifica se o produto existe no banco de dados
        const product = await prismaClient.product.findUnique({
            where: { id: product_id },
        });

        if (!product) {
            throw new Error('Produto não encontrado.');
        }

        // Converte a quantidade para número, se necessário
        const quantidadeAsNumber = typeof quantidade === 'string' ? parseInt(quantidade, 10) : quantidade;

        if (isNaN(quantidadeAsNumber)) {
            throw new Error('Quantidade inválida.');
        }

        // Cria a nova entrada (Entry)
        const entry = await prismaClient.entry.create({
            data: {
                quantidade: quantidadeAsNumber, // Garante que seja um número
                product: {
                    connect: { id: product_id }
                }
            }
        });

        // Atualiza a quantidade de produtos na tabela de produtos
        await prismaClient.product.update({
            where: { id: product_id },
            data: {
                quantidade: {
                    increment: quantidadeAsNumber, // Incrementa a quantidade existente pela quantidade da entrada
                },
            },
        });

        return entry;
    }
}

export { CreateEntryService };
