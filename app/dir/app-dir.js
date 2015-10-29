(function () {
	var dM = angular.module('eblvm.dir');

	dM.directive('lightBox', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/light-box.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				var lightAttrsObj = {
					// 'alwaysShowNavOnTouchDevices': true,
					// 'maxWidth': 100,
					// 'maxHeight': 100,
					'fadeDuration': 500,
					'resizeDuration': 500,
					'wrapAround': true
				};

				lightbox.option(lightAttrsObj);
			}
		};
	}]);

})();