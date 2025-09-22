import assert from 'assert';
export const validateNonEmptyStringProp = (config, errorLabel, propName) => {
  const prop = config[propName];
  if (typeof prop !== 'undefined') {
    assert.strictEqual(typeof prop, 'string', `${errorLabel}: ${propName} must be a string`);
    assert.ok(prop.length > 0, `${errorLabel}: ${propName} must have more then 0 characters`);
  }
};
export const validateRequiredStringProp = (config, errorLabel, propName) => {
  const prop = config[propName];
  assert.ok(typeof prop !== 'undefined' && prop !== null, `${errorLabel}: ${propName} is required`);
  assert.strictEqual(typeof prop, 'string', `${errorLabel}: ${propName} must be a string`);
  assert.ok(prop.length > 0, `${errorLabel}: ${propName} must have more then 0 characters`);
};
export const validateBooleanProp = (config, errorLabel, propName) => {
  const prop = config[propName];
  if (typeof prop !== 'undefined') {
    assert.strictEqual(typeof prop, 'boolean', `${errorLabel}: ${propName} must be a boolean`);
  }
};
//# sourceMappingURL=validation.js.map