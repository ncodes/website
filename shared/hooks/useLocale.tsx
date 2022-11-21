/* eslint-disable react/jsx-filename-extension, no-shadow, @typescript-eslint/no-shadow */
import { setCookie } from "cookies-next"

import Link from "next/link"
import { useRouter } from "next/router"
import getLocaleInfo from "../libs/getLocaleInfo"

const styles = { card: "" }

function useLocale() {
  const { locale, locales, asPath } = useRouter()

  function setLocale(locale) {
    setCookie("NEXT_LOCALE", locale)
  }

  function localeInfo(locale) {
    return getLocaleInfo(locale)
  }

  function LocaleLink({ locale, children }) {
    return (
      <Link href={asPath} locale={locale}>
        <a onClick={() => setLocale(locale)} role="button" tabIndex={0} className={styles.card} aria-hidden="true" href={asPath}>
          {children}
        </a>
      </Link>
    )
  }

  return {
    locale,
    locales,
    localeInfo,
    LocaleLink,
    setLocale,
  }
}

export default useLocale
