import _ from "lodash"

const localeInfo: any = {
  ar: {
    label: "عربى",
    key: "ar",
    emoji: "🇦🇪",
  },
  en: {
    label: "English",
    key: "en",
    emoji: "🇬🇧",
  },
  es: {
    label: "Espanyol",
    key: "es",
    emoji: "🇪🇸",
  },
  fr: {
    label: "Francais",
    key: "fr",
    emoji: "🇫🇷",
  },
  ja: {
    label: "日本語",
    key: "ja",
    emoji: "🇯🇵",
  },
  ru: {
    label: "Pусский",
    key: "ru",
    emoji: "🇷🇺",
  },
  zh: {
    label: "中国人",
    key: "zh",
    emoji: "🇨🇳",
  },
  default: "Undefined ❌",
}

const getLocaleInfo: any = (locale: string) => (!_.isEmpty(localeInfo[locale as string]) ? localeInfo[locale] : localeInfo.default)

export default getLocaleInfo
