/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Composables
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { createPinia } from "pinia";

// Plugins
import { registerPlugins } from "@/plugins";
import { createRulesPlugin } from "vuetify/labs/rules";

// Components
import App from "./App.vue";

// Styles
import "unfonts.css";

const pinia = createPinia();
const app = createApp(App);
const vuetify = createVuetify();

registerPlugins(app);

app.use(pinia)
app.use(createRulesPlugin({}, vuetify.locale));

app.mount("#app");

