import angular from 'angular';
import { routerConfig } from './routes'

import 'angular-ui-router';

angular
	.module('app', ['ui.router'])
	.config(routerConfig)
