import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

export default {
  install(app /*, option */) {
    //달력
    app.use(setupCalendar, {});
    app.component('VCalendar', Calendar);
    app.component('VDatePicker', DatePicker);
  },
};
