var log4js = require("log4js").configure(require("./logConf.json"));
console.log("log_start start!");

var LogFile = log4js.getLogger('log_date');

LogFile.trace('This is a Log4js-Test');
LogFile.debug('We Write Logs with log4js');
LogFile.info('You can find logs-files in the log-dir');
LogFile.warn('log-dir is a configuration-item in the log4js.json');
LogFile.error('In This Test log-dir is : \'./logs/log_test/\'');