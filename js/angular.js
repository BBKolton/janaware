// Create application
var app = angular.module('janaware', ['ui.router']);


app.config(function($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'home'
	}).state('gallery', {
		url: '/gallery',
		templateUrl: 'templates/gallery.html',
		controller: 'gallery'
	}).state('schedule', {
		url: '/schedule',
		templateUrl: '/templates/schedule.html',
		controller: 'schedule'
	}).state('statement', {
		url: '/statement',
		templateUrl: '/templates/statement.html',
		controller: 'statement'
	}).state('contact', {
		url: '/contact',
		templateUrl: '/templates/contact.html',
		controller: 'contact'
	});
});


app.controller('home', function($scope, $http) {
	$http.get('data/home.json').then(function(response) {
		console.log(response);
		$scope.title = response.data.title;
		$scope.text = response.data.text;
	});

}).controller('gallery', function($scope, $http) {
	$scope.imgs = new Array(16);
	$scope.change = function(num) {
		jQuery('#myCarousel').carousel(parseInt(num));
	} 

}).controller('schedule', function($scope, $http){
	$http.get('data/events.json').then(function(response) {
		console.log(response);
		$scope.events = response.data;
	});

}).controller('statement', function($scope, $http) {
	$http.get('data/statement.json').then(function(response) {
		console.log(response);
		$scope.statement = response.data;
	});

}).controller('contact', function($scope, $http) {
	$http.get('data/contact.json').then(function(response) {
		console.log(response);
		$scope.contact = response.data;
	});
})


app.run(['$state', function ($state) {
	$state.transitionTo('home');
}]);