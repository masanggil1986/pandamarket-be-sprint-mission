import * as Sentry from '@sentry/node';
import server from './app';
import { PORT } from './lib/constants';

Sentry.init({
  dsn: 'https://7adf11f619afa125511c3079bd9a182f@o4509603829579776.ingest.us.sentry.io/4511063777411072',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
