
import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController"

import { AuthUserController } from "./controllers/user/AuthUserController"

import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateSectorController } from "./controllers/sector/CreateSectorController"

import { ListSectorController } from "./controllers/sector/ListSectorController"

const router = Router();

// -- ROTAS USERS --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

// -- ROTAS SECTOR --

router.post('/sector', isAuthenticated, new CreateSectorController().handle)

router.get('/sector', isAuthenticated, new ListSectorController().handle)

export { router } 