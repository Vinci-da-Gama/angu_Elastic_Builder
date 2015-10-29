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