// /**
//  * i18n.js
//  *
//  * This will setup the i18n language files and locale data for your app.
//  *
//  */
// import ReactNativeI18n from 'react-native-i18n';
// import '../I18n/I18n';
// import { DEFAULT_LOCALE } from '../app/containers/App/constants';
//
// export const deviceLocale = ReactNativeI18n.locale ? ReactNativeI18n.locale : DEFAULT_LOCALE;
//
// export const formatTranslationMessages = (locale, messages) => {
//   const defaultFormattedMessages = locale !== DEFAULT_LOCALE
//     ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
//     : {};
//   return Object.keys(messages).reduce((formattedMessages, key) => {
//     const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
//       ? defaultFormattedMessages[key]
//       : messages[key];
//     return Object.assign(formattedMessages, { [key]: formattedMessage });
//   }, {});
// };
//
// export const translationMessages = {
//   en: formatTranslationMessages('en', enTranslationMessages),
//   de: formatTranslationMessages('de', deTranslationMessages),
// };
