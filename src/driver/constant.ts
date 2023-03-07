export const githubId = process.env.NEXT_PUBLIC_GITHUB_ID;
export const dbRepository = process.env.NEXT_PUBLIC_DATABASE_REPOSITORY;
export const dictRepository = process.env.NEXT_PUBLIC_DICTIONARY_REPOSITORY;
export const dbUrl = `https://${githubId}.github.io/${dbRepository}`;
export const dictUrl = `https://${githubId}.github.io/${dictRepository}`;
export const dbArcUrl = `https://github.com/${githubId}/${dbRepository}`;
export const dictArcUrl = `https://github.com/${githubId}/${dictRepository}`;
