export const isNull = (val: unknown) => {
  return val === undefined || val === null;
};

export const isInt = (o: unknown) => {
  const n = Number(o);
  return !isNaN(n) && Math.floor(n) === n;
};

export const removeChars = (str: string) => {
  // eslint-disable-next-line no-control-regex
  return str.replace(/[^\x00-\x7F]/g, '');
};

export const sanitize = (potentialString: string) => {
  enum entityMap {
    '&' = '&amp;',
    '<' = '&lt;',
    '>' = '&gt;',
    '"' = '&quot;',
    "'" = '&#x27;',
    '/' = '&#47;'
  }

  return potentialString.replace(/[&<>"'/]/gi, (s) => {
    return entityMap[s as keyof typeof entityMap];
  });
};
