import { Request, Response } from "express";
import {  CreateSectorService} from '../../services/sector/CreateSectorService'

class CreateSectorController {
    async handle(req: Request, res: Response) {
        const { name, description } = req.body

        const createSectorService = new CreateSectorService()

        const sector = await createSectorService.execute({
            name,
            description
        });

        return res.json(sector)

    }
}

export { CreateSectorController }