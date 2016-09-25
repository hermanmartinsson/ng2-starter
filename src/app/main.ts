import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// Uncomment the following two lines to enable production mode (removes debug asserts etc.)
// import {enableProdMode} from '@angular/core';
// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
