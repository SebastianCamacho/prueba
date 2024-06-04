export const environment = {
  production: false,

  backendBaseUrl:
  (window as any)['env']['URL_NET'] || 'http://localhost:2500',

  URL_PHYTON: 'http://localhost:8000',
};
