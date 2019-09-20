import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { rand } from "./util";
import {
  injectMocks,
  Scenarios,
  extractScenarioFromLocation
} from "data-mocks";

if (environment.production) {
  enableProdMode();
}

if (!environment.production) {
  const scenarios: Scenarios = {
    default: [
      {
        url: /widgets/,
        method: "GET",
        response: [...Array(10)].map((_, id) => ({ id: ++id })),
        delay: 200,
        responseCode: 200
      },
      {
        url: /new-widget/,
        method: "GET",
        response: { id: rand() },
        delay: 2000,
        responseCode: 200
      }
    ],
    badWidget: [
      {
        url: /new-widget/,
        method: "GET",
        response: { id: 101 },
        delay: 2000,
        responseCode: 200
      }
    ]
  };

  injectMocks(scenarios, extractScenarioFromLocation(window.location));
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
