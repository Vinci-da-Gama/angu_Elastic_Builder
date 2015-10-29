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