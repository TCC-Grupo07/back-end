import { Response, Request } from 'express';
import { RemoveSectorService } from '../../services/sector/RemoveSectorService';

class RemoveSectorController {
    async handle(req: Request, res: Response) {
        const sector_id = req.query.sector_id as string;
        const removeSector = new RemoveSectorService();

        if (!sector_id) {
            return res.status(400).json({ error: 'Sector ID is required' });
        }

        try {
            const sector = await removeSector.execute({ sector_id });

            if (!sector) {
                return res.status(404).json({ error: 'Sector not found' });
            }

            return res.json({ message: 'Sector removed successfully', sector });
        } catch (error: any) {
            const errorMessage = error.message || 'Internal server error';
            return res.status(500).json({ error: `Error removing sector: ${errorMessage}` });
        }
    }
}

export { RemoveSectorController };
