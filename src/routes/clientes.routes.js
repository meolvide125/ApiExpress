import {Router} from 'express'
import { getClientes,getCliente,postClientes,putClientes,patchClientes,deleteClientes } from '../controllers/clientes.controllers.js'
const router = Router()

router.get('/cliente',getClientes)
router.get('/cliente/:id',getCliente)
router.post('/cliente',postClientes)
router.put('/cliente/:id',putClientes)
router.patch('/cliente/:id',patchClientes)
router.delete('/cliente/:id',deleteClientes)
export default router