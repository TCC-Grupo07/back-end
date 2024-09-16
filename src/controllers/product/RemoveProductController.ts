import { Response, Request } from 'express';
import { RemoveProductService } from '../../services/product/RemoveProductService';

class RemoveProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;
        const removeProduct = new RemoveProductService();

        if (!product_id) {
            return res.status(400).json({ error: 'Product ID is required' });
        }

        try {
            const product = await removeProduct.execute({
                product_id,
            });

            return res.json(product);
        } catch (error) {
            return res.status(500).json({ error: `Error removing product: ${error.message}` });
        }
    }
}

export { RemoveProductController };
