import { sessionsRouter } from '@modules/users/routes/sessions.routes';
import { userRouter } from '@modules/users/routes/users.routes';
import { Router } from 'express';

export const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
