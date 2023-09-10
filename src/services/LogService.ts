import * as Sentry from 'sentry-expo';
import { HttpError } from '../utils/types';
import { SENTRY_DSN } from '../utils/constants';


export default class LogService {
    constructor() {
        this.init();
    }

    init() {
        Sentry.init({
            dsn: SENTRY_DSN,
            enableInExpoDevelopment: true,
            debug: false,
        });

        console.log('Sentry initialized');
    }

    logError(error: Error | HttpError) {
        Sentry.Native.captureException(error);
    }
}
