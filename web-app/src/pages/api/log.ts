import type { NextApiRequest, NextApiResponse } from "next";
import { logInfo, logError } from "../../lib/logger";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = JSON.parse(req.body);

  logInfo(`API log.ts отримав запит: метод=${req.method}, шлях=${req.url}`);

  if (typeof message === "string") {
    logInfo(`Повідомлення для логування: ${message}`);
    res.status(200).json({ status: "Log added" });
  } else {
    logError("Неправильний формат повідомлення");
    res.status(400).json({ error: "Invalid log message" });
  }
}
