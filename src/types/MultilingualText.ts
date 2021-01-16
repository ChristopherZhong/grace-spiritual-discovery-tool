export interface MultilingualText {
  [language: string]: string;
}

export function getText(text: MultilingualText, language: string): [string, boolean] {
  let result = text[language];
  const missing = !result;
  if (missing) {
    const [first] = Object.keys(text);
    result = text[first];
    console.warn(`The "${language}" language is not available for the "${result}" text; defaulting to the "${first}" language`);
  }
  return [result, !missing];
}
