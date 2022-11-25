import Document, { Html, Main, NextScript, Head, DocumentContext, DocumentInitialProps } from "next/document"
import cn from "classnames"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, locale: ctx?.locale || "en" }
  }

  render() {
    return (
      <Html dir={this.props.locale === "ar" ? "rtl" : "ltr"} lang={this.props.locale}>
        <Head />
        <body className={cn({ "!text-right": this.props.locale === "ar" })}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
