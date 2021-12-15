import { LanguageContext } from '../src/contexts/language';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const globalTypes = {
    language: {
        name: 'Language',
        description: 'Global language context for components',
        defaultValue: 'en',
        toolbar: {
            icon: 'globe',
            // Array of plain string values or MenuItem shape (see below)
            items: [
                { value: 'en', title: 'English' },
                { value: 'zh', title: '中文' },
                { value: 'es', title: 'Español' },
            ],
            // Property that specifies if the name of the item will be displayed
            showName: true,
        },
    },
};

const withLanguageProvider = (Story, context) => {
    const value = {
        language: {
            code: context.globals.language,
        },
        setLanguage: () => {
            // do nothing
        },
    };
    return (
        <LanguageContext.Provider value={value}>
            <Story {...context} />
        </LanguageContext.Provider>
    );
};

export const decorators = [withLanguageProvider];
