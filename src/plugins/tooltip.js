import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css';

const defaultProps = {
  delay: [0, null],
  allowHTML: true,
};

export default {
  install(app) {
    app.use(
      VueTippy, // optional
      {
        defaultProps,
        directive: 'tippy',
        //directive: 'tooltip',
        component: 'tippy',
      },
    );
  },
};
