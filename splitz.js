angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.message = "Add another price";
	//$scope.classname="forthehiddenform";
	$scope.prices=[{amt:""}]
	$scope.counter=0;
	$scope.total=0;

	
	$scope.Submit = function() {
			//event.preventDefault(); //don't need this - angular does this automatically
		   for (var i=0; i<$scope.prices.length; i++){
	   	    $scope.prices[i].amt = $scope.prices[i].amt || 0
					$scope.total+=parseFloat($scope.prices[i].amt)
				
		   }
		  	$scope.total+=parseFloat($scope.tax);
		  
    }

    $scope.Show = function() {
		    	//$scope.classname="forthevisibleform"
		    	if ($scope.counter==0)
		    		$scope.showthis=true;
		    	if ($scope.counter==1)
		    		$scope.showthis1=true; 

		    	$scope.counter++;  
		    	$scope.prices.push({amt:""}); 

    }

}]
);

//I don't know how to bind a color and keep adding fields and then using their inputs 