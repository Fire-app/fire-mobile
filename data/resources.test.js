import Joi from '@hapi/joi';
import { RESOURCES_MAP, RESOURCES_LIST } from './resources';
import EN_JSON from '../lang/en.json';

// eslint-disable-next-line no-useless-escape
const URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
const PHONE_REGEX = /^tel:\/\/([0-9]+)$/; // e.g. tel://1234567890
const TWITTER_URL = /https:\/\/www\.twitter\.com\/([a-zA-Z0-9_]+)/;
const FACEBOOK_URL = /https:\/\/www\.facebook\.com\/([a-zA-Z0-9_]+)/;
const INSTAGRAM_URL = /https:\/\/www\.instagram\.com\/([a-zA-Z0-9_]+)/;
const YOUTUBE_URL = /https:\/\/www\.youtube\.com\/(?:user|channel)\/([a-zA-Z0-9_]+)/;

const ResourceMapElementSchema = Joi.object({
  description: Joi.string().min(1).required(),
  // TODO: validate via explicit enum types
  facebookUrl: Joi.string().regex(FACEBOOK_URL).allow(null),
  fullName: Joi.string().min(1).required(),
  instagramUrl: Joi.string().regex(INSTAGRAM_URL).allow(null),
  languages: Joi.string().min(1).required(),
  legalServices: Joi.array().items(Joi.string().required()),
  nonlegalServices: Joi.array().items(Joi.string().required()),
  phone: Joi.string().regex(PHONE_REGEX).required(),
  shortName: Joi.string().min(1).required(),
  twitterUrl: Joi.string().regex(TWITTER_URL).allow(null),
  website: Joi.string().regex(URL_REGEX).required(),
  youtubeUrl: Joi.string().regex(YOUTUBE_URL).allow(null),
}).required();

const ResourceListElementSchema = Joi.object({
  fullName: Joi.string().min(1).required(),
  imageName: Joi.any().required(),
  shortName: Joi.string().min(1).required(),
});

describe('Resource Map Validation', () => {
  Object.entries(RESOURCES_MAP).forEach(([key, value]) => {
    describe(key, () => {
      test('Must match schema', () => {
        const { error } = ResourceMapElementSchema.validate(value);
        if (error) throw error;
      });
      test('Description must be in en.json', () => {
        if (!EN_JSON[value.description])
          throw new Error('description not found in en.json');
      });
    });
  });
});

describe('Resource List Validation', () => {
  RESOURCES_LIST.forEach((resource, i) => {
    describe(`${i}: ${resource.shortName}`, () => {
      test('Must match schema', () => {
        const { error } = ResourceListElementSchema.validate(resource);
        if (error) throw error;
      });
      test('Must exist in Resources Map', () => {
        if (!RESOURCES_MAP[resource.shortName])
          throw new Error('element not found in RESOURCES_MAP');
      });
    });
  });
});
