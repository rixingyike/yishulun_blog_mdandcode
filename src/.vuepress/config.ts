import { defineUserConfig } from "vuepress";
import rootConfig from "./global_config.js";

import theme from "./theme.js";
rootConfig["theme"] = theme;

export default defineUserConfig(rootConfig);
