import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import { injectMocks, Scenarios } from "data-mocks";

if (!environment.production) {
  const scenarios: Scenarios = {
    default: [
      {
        url: /random-widget/,
        method: "GET",
        response: {},
        delay: 200,
        responseCode: 200
      }
    ]
  };

  injectMocks(scenarios);
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
