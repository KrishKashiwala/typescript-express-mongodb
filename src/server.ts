import { app } from './index';
import { router } from './routes/routes';
app.use('/', router);
app.listen(5000, () => console.log('port listening on -> 5000'));
