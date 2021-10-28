import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/scss/argon.scss";
// import "../assets/js/sweetalert.min.js";
import SidebarPlugin from "../components/SidebarPlugin";
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>



export default {
  install(app) {
    app.use(SidebarPlugin);
    app.use(GlobalComponents);
    app.use(GlobalDirectives);
  },
};
