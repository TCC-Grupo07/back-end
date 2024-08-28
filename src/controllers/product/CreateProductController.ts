import { Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, sector_id, quantidadeMin} = req.body


        const createProductService = new CreateProductService()

        if (!req.file) {
            throw new Error("error upload file")
        } else {

            const { originalname, filename: banner } = req.file;


            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                sector_id,
                quantidadeMin
            })

            return res.json(product)

        }
    }
}

export { CreateProductController }