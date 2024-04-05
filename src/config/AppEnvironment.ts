interface EnvVariables {
  Url: string;
  apiUrl: string;
}

interface Environments {
  development: EnvVariables;
  production: EnvVariables;
}

const appConfig: Environments = {
  development: {
    Url: "http://localhost:3000",
    apiUrl: "http://localhost:3000/api/trpc",
  },
  production: {
    Url: "https://lintellect.gpdev.me",
    apiUrl: "https://lintellect.gpdev.me/api/trpc",
  },
};

export const Env: EnvVariables = appConfig.development;
