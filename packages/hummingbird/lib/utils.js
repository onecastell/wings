export const parseBool = str => (str === 'false' ? false : str === '0' ? false : !!str);

export const dataToObject = data =>
  data.reduce((a, c) => ({ ...a, [c.key]: JSON.parse(c.data) }), {});

export const enumerate = (...args) => {
  const obj = {};
  args.forEach((arg, i) => {
    obj[(obj[arg] = i)] = arg;
  });
  return obj;
};

export function parseJSON(value, { defaultValue = {}, errorMessage = "Couldn't parse JSON" } = {}) {
  let result;

  try {
    result = value ? JSON.parse(value) : defaultValue;
  } catch (e) {
    console.log(errorMessage);
    result = defaultValue;
  }
  return result;
}
