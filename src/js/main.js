import angular from 'angular';
import { routerConfig } from './routes'
import { LayoutController } from './controllers/layout.js'
import { HomeController } from './controllers/home.js'
import { SingleController } from './controllers/single.js'
import { AddController } from './controllers/add.js'
import { ContactService } from './services/service.js'

import 'angular-ui-router';

angular
	.module('app', ['ui.router'])
	.config(routerConfig)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .controller('SingleController', SingleController)
  .service('ContactService', ContactService)
