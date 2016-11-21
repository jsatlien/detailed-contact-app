import angular from 'angular';
import { routerConfig } from './routes'
import { LayoutController } from './controllers/layout.js'
import { HomeController } from './controllers/home.js'

import 'angular-ui-router';

angular
	.module('app', ['ui.router'])
	.config(routerConfig)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
