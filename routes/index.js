import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimonios, 
    paginaViajes, 
    paginaDetalleViaje } from '../controllers/paginasControllers.js';

import {
    guardarTestimonial
} from '../controllers/testimonialControler.js'

const router = express.Router();

router.get('/nosotros', paginaNosotros)

router.get('/inicio', paginaInicio)

router.get('/viajes',paginaViajes);

router.get('/viajes/:slug',paginaDetalleViaje);

router.get('/testimoniales', paginaTestimonios);

router.post('/testimoniales', guardarTestimonial);


export default router;