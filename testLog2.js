const log4js = require('log4js');
//log4js.configure('./logConf.json')
log4js.configure({
    appenders: {
        out: {type: 'console'},
        log_date: {type: 'dateFile', filename: 'logs/log_date/', pattern:" yyyy-MM-dd.log", alwaysIncludePattern: true},
        log_file: {type: 'file', filename: '/logs/log_file/file.log', maxLogSize: 104800, backups: 100}
    },
    categories: {
        default: {appenders: ['out'], level: 'info'},
        log_date: {appenders: ['log_date'], level: 'info'},
        log_file: {appenders: ['log_file'], level: 'info'}
    }
});
const logger = log4js.getLogger('log_file');
logger.debug('This little thing went to market');
logger.info('This little thing stayed at home');
logger.error('This little thing had roast beef');
logger.fatal('This little thing had none');
logger.trace('and this little thing went wee, wee, wee, all the way home.');
