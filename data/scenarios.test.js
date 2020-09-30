import Joi from '@hapi/joi';
import { SCENARIO_MAP, SCENARIOS_LIST } from './scenarios';
import EN_JSON from '../lang/en.json';

const ScenarioMapElementSchema = Joi.object({
  scenarioItems: Joi.array().items(
    Joi.object({
      bullets: Joi.array().items(Joi.string().required()),
      subtitle: Joi.string(),
      title: Joi.string().required(),
    }).required()
  ),
  tips: Joi.array().items(Joi.string().required()),
  title: Joi.string().required(),
  warning: Joi.object({
    subtitle: Joi.string().required(),
    title: Joi.string().required(),
  }).required(),
}).required();

const ScenarioListElementSchema = Joi.object({
  iconName: Joi.string().required(),
  scenarios: Joi.array().items(Joi.string().min(1).required()).required(),
  title: Joi.string().required(),
});

function validateLocalized(key) {
  if (!key) throw new Error('Cannot validate localized for non-existent key');
  test(key, () => {
    if (!EN_JSON[key]) throw new Error(`${key} not found in en.json`);
  });
}

describe('Resource Map Validation', () => {
  Object.entries(SCENARIO_MAP).forEach(([key, value]) => {
    describe(key, () => {
      test('Must match schema', () => {
        const { error } = ScenarioMapElementSchema.validate(value);
        if (error) throw error;
      });
      describe('Localization checks', () => {
        describe('tips', () => {
          const { tips } = value;
          if (!tips) return;
          tips.forEach(validateLocalized);
        });
        describe('scenarioItems', () => {
          const { scenarioItems } = value;
          if (!scenarioItems) return;
          scenarioItems.forEach(({ title, subtitle, bullets }) => {
            validateLocalized(title);
            if (subtitle) validateLocalized(subtitle);
            if (bullets) bullets.forEach(validateLocalized);
          });
        });
      });
    });
  });
});

describe('Scenario List Validation', () => {
  SCENARIOS_LIST.forEach((scenario, i) => {
    describe(`${i}: ${scenario.title}`, () => {
      test('Must match schema', () => {
        const { error } = ScenarioListElementSchema.validate(scenario);
        if (error) throw error;
      });
      describe('Ensure each scenario is in Scenario Map', () => {
        scenario.scenarios.forEach((scenarioId) => {
          test(scenarioId, () => {
            if (!SCENARIO_MAP[scenarioId])
              throw new Error('element not found in SCENARIO_MAP');
          });
        });
      });
      describe('Localization checks', () => {
        validateLocalized(scenario.title);
      });
    });
  });
});
