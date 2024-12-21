import winston from "winston";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ message, timestamp }) => {
      return `${timestamp}: ${message}`;
    })
  ),
  transports: [new winston.transports.Console()],
});

export const logInfo = (message: string) => {
  logger.info(message);
};

export const logError = (message: string) => {
  logger.error(message);
};

export default logger;
