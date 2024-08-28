import { Router } from "express";


import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController"

import { AuthUserController } from "./controllers/user/AuthUserController"

import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateSectorController } from "./controllers/sector/CreateSectorController"

import { ListSectorController } from "./controllers/sector/ListSectorController"

import { CreateProductController } from "./controllers/product/CreateProductController";

import uploadConfig from "./config/multer"

import { ListByProductController } from "./controllers/product/ListBySectorController";

import { CreateEntryController } from "./controllers/entry/CreateEntryController";
import { CreateExitController } from "./controllers/exit/CreateExitController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// -- ROTAS USERS --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

// -- ROTAS SECTOR --

router.post('/sector', isAuthenticated, new CreateSectorController().handle)

router.get('/sector', isAuthenticated, new ListSectorController().handle)

// --ROTAS PRODUCT --
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

router.get('/product', isAuthenticated, new ListByProductController().handle)

// -- ROTAS ENTRY --
router.post('/entry', isAuthenticated, new CreateEntryController().handle)

// -- ROTA EXIT --
router.post('/output', isAuthenticated, new CreateExitController().handle)

export { router } 