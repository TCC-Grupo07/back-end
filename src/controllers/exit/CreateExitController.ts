import { Request, Response } from 'express'

import { CreateExitService } from "../../services/exit/CreateExitService"



class CreateExitController {
    async handle(req: Request, res: Response) {
        const { quantidade, product_id } = req.body

        const createExitService = new CreateExitService()


        const exit = await createExitService.execute({
            quantidade,
            product_id

        })



        return res.json(exit)
    }
}

export { CreateExitController }

