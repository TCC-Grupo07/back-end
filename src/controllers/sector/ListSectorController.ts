import { Response, Request } from 'express'
import { ListSectorService } from '../../services/sector/ListSectorService'

class ListSectorController {

    async handle(req: Request, res: Response) {

        const listSectorService = new ListSectorService()

        const sector = await listSectorService.execute()

        return res.json(sector)

    }
}

export { ListSectorController }