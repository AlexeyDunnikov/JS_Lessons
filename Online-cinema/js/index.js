import { initializeSlideMenu } from "./menu.js";
import { renderVideo } from "./render_video.js";
import { menuLinks } from "./menu_links.js";

initializeSlideMenu({
  menu: ".navigation",
  classActiveMenu: "navigation_active",
  openBtn: ".header__burger-btn",
  closeTrigger: [".navigation__close", ".navigation__link"],
});

menuLinks();

renderVideo();
