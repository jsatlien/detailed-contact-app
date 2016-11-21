function routerConfig ($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('root', {
			url: '/',
			templateUrl: '',
			controller: '',


	$urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
