import { DateTime } from 'luxon';

const error = (message) => {
    console.error({
        error: message,
        timestamp: DateTime.local().toISO()
    });
};

const info = (message) => {
    console.info({
        info: message,
        timestamp: DateTime.local().toISO()
    });
};

const warn = (message) => {
    console.warn({
        warning: message,
        timestamp: DateTime.local().toISO()
    });
};

const log = (message) => {
    console.log({
        log: message,
        timestamp: DateTime.local().toISO()
    });
};

export default {
    error,
    info,
    warn,
    log
}
