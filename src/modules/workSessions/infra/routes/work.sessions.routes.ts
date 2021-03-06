import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { WorkSessionsController } from '../controllers/WorkSessionsController';

export const workSessionsRouter = Router();

const workSessionsController = new WorkSessionsController();

workSessionsRouter.get('/', workSessionsController.index);

workSessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
    },
  }),
  workSessionsController.create,
);

workSessionsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  workSessionsController.show,
);

workSessionsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().optional(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  workSessionsController.update,
);

workSessionsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  workSessionsController.delete,
);
