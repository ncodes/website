/* eslint-disable */
import fs from "fs"
import path from "path"
import { locales } from "./locales"

const { Translate } = require("@google-cloud/translate").v2
const source = require("./source.json")
require("dotenv").config()

const translate = new Translate()

;(async () => {
  for (const localesKey of locales) {
    console.log("Source -> ", localesKey)
    const data: any = {}
    for (const sourceKey in source) {
      console.log("Translating:", sourceKey)
      if (localesKey === "en") {
        data[sourceKey] = (<any>source)[sourceKey]
        continue
      }
      const [translation] = await translate.translate((<any>source)[sourceKey], localesKey)
      data[sourceKey] = translation
    }
    fs.mkdirSync(path.join(__dirname, "locales", localesKey), {
      recursive: true,
    })
    fs.writeFileSync(path.join(__dirname, "locales", localesKey, "common.json"), JSON.stringify(data))
  }
})()
