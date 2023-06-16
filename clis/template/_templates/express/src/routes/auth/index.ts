import { Router } from 'express';
import { signIn, signUp } from './controller';

export const router = Router();

router.post('sign-in', signIn);
router.post('sign-up', signUp);
