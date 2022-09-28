import type { NextApiRequest, NextApiResponse } from 'next'
import path from "path"
import { promises as fs } from "fs"

export default async function handler(req: NextApiRequest, res: NextApiRequest): Promise<void> {
  // Find the absolute path of the json directory
  const markdownDirectory = path.join(process.cwd(), "markdown")
  // Read the json data file data.json
  const fileContents = await fs.readFile(`${markdownDirectory}/terms.md`, "utf8")
  // Return the content of the data file in json format
  res.status(200).send(fileContents)
}
