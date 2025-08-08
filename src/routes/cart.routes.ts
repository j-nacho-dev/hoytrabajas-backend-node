import { Router } from 'express'
import { addToCart, getCart } from '../controllers';

const router = Router();

router.get('/', getCart);

router.post('/', addToCart);

export default router;
