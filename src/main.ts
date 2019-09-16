import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import {
  injectMocks,
  extractScenarioFromLocation,
  Scenarios
} from "data-mocks";

if (!environment.production) {
  const scenarios: Scenarios = {
    default: [
      {
        url: /widgets/,
        method: "GET",
        response: [...Array(10)].map((_, i) => ({ id: ++i })),
        delay: 200,
        responseCode: 200
      },
      {
        url: /new-widget/,
        method: "GET",
        response: { id: Math.floor(Math.random() * 100 + 1) },
        delay: 2000,
        responseCode: 200
      }
    ]
  };

  injectMocks(scenarios, extractScenarioFromLocation(window.location));
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
