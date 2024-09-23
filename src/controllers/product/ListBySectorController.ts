// import { Response, Request } from 'express'
// import { ListByProductService } from '../../services/product/ListbySectorService'

// class ListByProductController {
//     async handle(req: Request, res: Response) {
//         const sector_id = req.query.sector_id as string

//         const listBySector = new ListByProductService()
//         const products = await listBySector.execute({
//             sector_id
//         })

//         return res.json(products)

//     }
// }

// export { ListByProductController }

import { Request, Response } from "express";
import { ListByProductService } from "../../services/product/ListbySectorService";

class ListByProductController {
    async handle(req: Request, res: Response) {
        const { sector_id, name } = req.body;

        const listByProductService = new ListByProductService();

        try {
            const products = await listByProductService.execute({ sector_id, name });
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao listar produtos." });
        }
    }
}

export { ListByProductController };
