export const githubId = process.env.GITHUB_ID;
export const dbRepository = process.env.DATABASE_REPOSITORY;
export const dictRepository = process.env.DICTIONARY_REPOSITORY;
export const dbUrl = `https://${githubId}.github.io/${dbRepository}`;
export const dictUrl = `https://${githubId}.github.io/${dictRepository}`;
export const dbArcUrl = `https://github.com/${githubId}/${dbRepository}`;
export const dictArcUrl = `https://github.com/${githubId}/${dictRepository}`;
