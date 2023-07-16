import languages, { flagCodes } from "../languages/languages.data";

export const getFlagByName = (langCode: flagCodes): JSX.Element => {
  const language = languages.find((lang) => lang.code === langCode);
  if (!language) return <></>;
  return language.flag;
};
