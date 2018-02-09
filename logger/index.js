import winston from 'winston';
import fs from 'fs';
import nconf from 'nconf';

const logDir = 'logs';
const tsFormat = () => (new Date()).toLocaleTimeString();

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: 'debug',
    }),
    new (require('winston-daily-rotate-file'))({ // eslint-disable-line global-require
      filename: `${logDir}/-server.log`,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd',
      prepend: true,
      level: nconf.get('NODE_ENV') === 'development' ? 'verbose' : 'info',
    }),
  ],
});

export default logger;
