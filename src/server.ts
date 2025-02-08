import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import cors from "cors";
import path from 'path'

import { router } from "./routes";

const app = express();
app.use(express.json())
app.use(cors())

app.use(router)

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server erro'
    })
})

app.listen(3333, () => console.log("SERVIDOR RODANDO ⏳"))




































// import express, { Request, Response, NextFunction } from "express";
// import 'express-async-errors';
// import cors from "cors";
// import path from 'path'

// import { router } from "./routes";

// import 'dotenv/config'
// import { MercadoPagoConfig, Payment } from 'mercadopago';

// const app = express();
// app.use(express.json())
// app.use(cors())

// app.use(router)

// app.use(
//     '/files',
//     express.static(path.resolve(__dirname, '..', 'tmp'))
// )












// const client = new MercadoPagoConfig({
//     accessToken: process.env.accessToken,
//     options: {
//         timeout: 5000
//     }
// });


// const payment = new Payment(client);

// const body = {
//     transaction_amount: 1.10,
//     description: 'Teste',
//     payment_method_id: 'pix',
//     payer: {
//         email: 'ericolivealvarenga@gmail.com'
//     },
// };

// payment.create({ body }).then(console.log).catch(console.log);




















// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     if (err instanceof Error) {
//         return res.status(400).json({
//             error: err.message
//         })
//     }
//     return res.status(500).json({
//         status: 'error',
//         message: 'Internal server erro'
//     })
// })

// app.listen(3333, () => console.log("SERVIDOR RODANDO ⏳"))

































































