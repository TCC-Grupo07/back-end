// import prismaClient from "../../prisma";

// interface OrderRequest {
//     product_id: string,
//     quantidadeMin: string,
//     price: number,
//     name: string,
// }

// class UpdateProduct {
//     async execute({ product_id, name, price, quantidadeMin }: OrderRequest) {

//         const product = await prismaClient.product.update({
//             where: {
//                 id: product_id
//             }, data: {
//                 name: name,
//                 price: prismaClient,
//                 quantidadeMin: quantidadeMin,
//             }
//         })

//         return product
//     }
// }

// export { UpdateProduct }
import prismaClient from "../../prisma";

interface OrderRequest {
    product_id: string;
    quantidadeMin: number;
    price: string;
    name: string;
}

class UpdateProduct {
    async execute({ product_id, name, price, quantidadeMin }: OrderRequest) {
        const product = await prismaClient.product.update({
            where: {
                id: product_id
            },
            data: {
                name: name,
                price: price,
                quantidadeMin: quantidadeMin.toString(),
            }
        });

        return product;
    }
}

// Certifique-se de que a classe está sendo exportada corretamente
export { UpdateProduct };
