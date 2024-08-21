import { Request, Response } from 'express'

import { CreateEntryService } from "../../services/entry/CreateEntryService"



class CreateEntryController {
    async handle(req: Request, res: Response) {
        const { quantidade, product_id } = req.body

        const createEntryService = new CreateEntryService()


        const entry = await createEntryService.execute({
            quantidade,
            product_id

        })

             

        return res.json(entry)
    }
}

export { CreateEntryController }

