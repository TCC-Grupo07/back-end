import { Response, Request } from 'express'
import { ListByProductService } from '../../services/product/ListbySectorService'

class ListByProductController {
    async handle(req: Request, res: Response) {
        const sector_id = req.query.sector_id as string

        const listBySector = new ListByProductService()
        const products = await listBySector.execute({
            sector_id
        })

        return res.json(products)

    }
}

export { ListByProductController }