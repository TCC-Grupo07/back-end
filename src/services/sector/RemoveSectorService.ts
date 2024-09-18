import prismaClient from "../../prisma";

interface SectorRequest {
    sector_id: string;
}

class RemoveSectorService {
    async execute({ sector_id }: SectorRequest) {
        // Verificar se o setor existe
        const existingSector = await prismaClient.sector.findUnique({
            where: {
                id: sector_id,
            },
            include: {
                products: true, // Incluir os produtos associados ao setor
            },
        });

        if (!existingSector) {
            throw new Error("Setor não encontrado");
        }

        // Verificar se há produtos associados ao setor
        if (existingSector.products.length > 0) {
            // Excluir todos os produtos associados ao setor antes de deletar o setor
            await prismaClient.product.deleteMany({
                where: {
                    sector_id: sector_id,
                },
            });
        }

        // Remover o setor
        const sector = await prismaClient.sector.delete({
            where: {
                id: sector_id,
            },
        });

        return sector;
    }
}

export { RemoveSectorService };
