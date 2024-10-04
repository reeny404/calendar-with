export const ParamUtil = {
  parseString: (str: string): Record<string, string> => {
    const params: Record<string, string> = {};
    str.split('&')
      .forEach((str) => {
        const [key, value] = str.split('=');
        params[key] = value;
      });
    return params;
  }
};