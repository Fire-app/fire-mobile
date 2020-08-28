import Joi from '@hapi/joi';
import { HOTLINE_OPTIONS } from './hotlineOptions';

const HotlineOptionSchema = Joi.object({
  name: Joi.string().min(1).required(),
  phoneNumber: Joi.string().length(10).regex(/^\d+$/).required(),
}).required();

describe('Hotline Options Validation', () => {
  HOTLINE_OPTIONS.forEach((option, i) => {
    describe(`${i}: ${option.name}`, () => {
      test('Must match schema', () => {
        const { error } = HotlineOptionSchema.validate(option);
        if (error) throw error;
      });
    });
  });
});
