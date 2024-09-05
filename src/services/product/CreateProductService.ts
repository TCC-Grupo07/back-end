// import prismaClient from "../../prisma";

// interface ProductRequest {
//     name: string;
//     price: string;
//     description: string;
//     banner: string;
//     sector_id: string;
//     quantidadeMin: string;
// }

// class CreateProductService {
//     async execute({ name, price, description, banner, sector_id, quantidadeMin }: ProductRequest) {

//         const product = await prismaClient.product.create({
//             data: {
//                 name: name,
//                 price: price,
//                 description: description,
//                 banner: banner,
//                 sector_id: sector_id,
//                 quantidadeMin: quantidadeMin,


//             }
//         })


//         return product
//     }
// }

// export { CreateProductService }

import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    sector_id: string;
    quantidadeMin: string;
}

class CreateProductService {
    async execute({ name, price, description, banner, sector_id, quantidadeMin }: ProductRequest) {

        const product = await prismaClient.product.create({
            data: {
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
