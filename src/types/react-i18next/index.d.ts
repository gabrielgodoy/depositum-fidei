import "react-i18next";

import churchFathers from "../../../public/locales/en/church-fathers.json";
import common from "../../../public/locales/en/common.json";
import home from "../../../public/locales/en/home.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof common;
    resources: {
      common: typeof common;
      home: typeof home;
      "church-fathers": typeof churchFathers;
    };
  }
}
