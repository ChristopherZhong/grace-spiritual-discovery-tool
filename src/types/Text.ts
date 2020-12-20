export interface Text {
  [language: string]: string;
}

export function getText(text: Text, language: string): string {
  let result = text[language];
  if (!result) {
    const [first] = Object.keys(text);
    result = text[first];
    console.warn(`The "${language}" language is not available for the "${result}" text; defaulting to the "${first}" language`);
  }
  return result;
}
