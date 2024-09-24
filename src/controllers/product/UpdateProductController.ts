// import { Request, Response } from "express";
// import {UpdateProduct} from "../../services/product/UpdateProductService"

// class SendOrderController {
//     async handle(req: Request, res: Response) {
//         const { id } = req.body
//         const updateProduct = new UpdateProduct()

//         const product = await updateProduct.execute({
//             id
//         })

//         return res.json(product)
//     }
// }

// export { SendOrderController }

import { Request, Response } from "express";
import { UpdateProduct } from "../../services/product/UpdateProductService"; // Ajuste o caminho conforme necessário

class ProductUpdate {
    async handle(req: Request, res: Response) {
        const { product_id, name, price, quantidadeMin } = req.body; // Extraia todos os parâmetros necessários

        // Verifique se todos os campos obrigatórios foram fornecidos
        if (!product_id || !name || !price || quantidadeMin === undefined) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }

        const updateProduct = new UpdateProduct();

        try {
            const product = await updateProduct.execute({
                product_id,
                name,
                price,
                quantidadeMin: Number(quantidadeMin) // Converta para número
            });

            return res.status(200).json(product); // Retorne o produto atualizado com status 200
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao atualizar o produto." });
        }
    }
}

export { ProductUpdate };
