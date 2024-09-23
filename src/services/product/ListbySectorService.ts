// import prismaClient from "../../prisma";

// interface ProductRequest {
//     sector_id: string
// }

// class ListByProductService {

//     async execute({ sector_id }: ProductRequest) {

//         const findBySector = await prismaClient.product.findMany({
//             where: {
//                 sector_id: sector_id
//             }
//         })

//         return findBySector
//     }

// }
// export { ListByProductService }


import prismaClient from "../../prisma";

interface ProductRequest {
    sector_id: string;
    name: string;
}

class ListByProductService {

  
    async execute({ sector_id, name }: ProductRequest) {
        // Busca produtos filtrados por setor e nome do produto
        const findBySector = await prismaClient.product.findMany({
            where: {
          
                sector_id: sector_id, // Filtrar pelo sector_id
                name: {
                    contains: name, // Filtrar pelo nome do produto (parcial ou completo)
                    mode: "insensitive", // Ignora diferenças de maiúsculas/minúsculas
                }
            },
            include: {
                sector: true, // Inclui informações do setor na resposta
            }
        })
      
        return findBySector;
    }
}

export { ListByProductService }
