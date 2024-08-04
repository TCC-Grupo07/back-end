import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface AuthRequest {
    email: string;
    password: string
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        //Verificar se o Email existe
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("Usuário ou senha incorreto")
        }

        // Precisa verifficar se a senha que o usuário digitou está correta
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Usuário ou senha incorreto")
        }

        //Gerar um Tokem JWT e devolver os dados do usuário: id, name e email // Se deu tudo certo, vamos gerar o Token do usuário
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService }