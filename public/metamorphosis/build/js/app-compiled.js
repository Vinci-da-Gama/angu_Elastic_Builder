(function () {

	var angu = ['ui.bootstrap', 'ngSanitize', 'ngAria', 'RecursionHelper', 'angular-elastic-builder', 'ngAnimate', 'mgcrea.ngStrap', 'angularMoment'];
	var routerCtrl = ['eblvm.router', 'eblvm.ctrl'];
	var cons = ['eblvm.constant'];
	var serv = ['eblvm.sig.service', 'eblvm.service'];
	var dir = ['eblvm.dir', 'eblvm.cust.dir'];

	var depedencyArr = angu.concat(routerCtrl, cons, serv, dir);
	/**
	* eblvm Module
	*
	* The main module of this application...
	*/
	angular.module('eblvm', depedencyArr);

	angular.module('eblvm.router', ['ui.router']);
	angular.module('eblvm.constant', []);
	angular.module('eblvm.sig.service', []);
	angular.module('eblvm.service', []);
	angular.module('eblvm.ctrl', []);
	angular.module('eblvm.dir', ['eblvm.service', 'eblvm.sig.service']);
	angular.module('eblvm.cust.dir', ['eblvm.service', 'eblvm.sig.service']);

})();
(function () {
	var rM = angular.module('eblvm.router');

	// rM

})();
(function () {
	var cosM = angular.module('eblvm.constant');

	cosM.constant('Aisle', {
		prefixer: "./partials/"
	});

})();
(function () {
	var ctrlM = angular.module('eblvm.ctrl');

	ctrlM.controller('ElasticBuilderCtrl', ['$scope', function($scope){
		$scope.elasticBuilderData = {};
		$scope.elasticBuilderData.query = [];

		$scope.elasticBuilderData.fields = {
			'some.number.field': { type: 'number' },
			'some.term.field': { type: 'term' },
			'some.boolean.field': { type: 'term', subType: 'boolean' },
			'multi.selector': { type: 'multi', choices: [ 'AZ', 'CA', 'CT' ]}
		};
	}]);

})();
(function () {
	var cdM = angular.module('eblvm.cust.dir');

	// cdM

})();
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
// service js Document
// $log.log("sigSrevice error line -- 15 --- data : "+data+" config: "+config+" status: "+status+".---");
	/*sM.service('verifyNumStrObjArrUndefinedElem', ['$log', function($log){
		
		this.IsNumberAndGreaterThanZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure > 0;
			return numBool;
		};

		this.IsNumberAndGreaterThanWhileEqualZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure >= 0;
			return numBool;
		};

		this.IsStringAndNotNull = function (str) {
			var strBool = angular.isString(str) && str.length > 0 && str !== null && str !== '';
			return strBool;
		};

		this.IsUndefined = function (testimony) {
			var refBool = angular.isUndefined(testimony);
			return refBool;
		};

		this.IsJqOrDomElem = function (jqdomElem) {
			var argBool = angular.isElement(jqdomElem) && typeof(jqdomElem) !== 'undefined';
			return argBool;
		};

		this.IsObjAndNotEmpty = function (obj) {
			var objBool = angular.isObject(obj) && Object.keys(obj).length > 0 && typeof(obj) !== 'undefined';
			return objBool;
		};

		this.IsArrayAndNotUnfilled = function (arr) {
			var arrBool = angular.isArray(arr) && arr.length > 0 && typeof(arr) !== 'undefined';
			return arrBool;
		}

	}]);*/
(function () {
	var sM = angular.module('eblvm.service');

	// sM

})();
// service js Document
// $log.log("sigSrevice error line -- 14 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sigM.service('inquireInfo', ['$http', '$log', 'appnameDb', function($http, $log, appnameDb){
	var dbPath = appnameDb.dbDot+appnameDb.delimiter+appnameDb.dbPrefix+appnameDb.delimiter+appnameDb.dbName+appnameDb.dbExtension;

	this.obtainDossier = function (func) {
		$http.get(dbPath)
		.then(function (testimony) {
			func(testimony.data);
			$log.log('get data successfully. '+dbPath);
		})
		.catch(function (data, config, status) {
			$log.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
		})
		.finally(function () {
			$log.log('sigSrevice line 19, finally method.');
		});
	};

}]);*/
(function () {
	var ssM = angular.module('eblvm.sig.service');

	// ssM

})();
// jQuery Js Document
$(document).ready(function() {
	// lightBoxTrigger ();
});

// function lightBoxTrigger () {
// }