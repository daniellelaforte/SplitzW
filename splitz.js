angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.message = "Add another price";
	$scope.prices=[{amt:"", color:""}]
	$scope.totals={};
	$scope.sum=0;
	
	

	
	$scope.Submit = function() {
			//event.preventDefault(); //don't need this - angular does this automatically
		 

    for (var i = 0; i<$scope.prices.length; i++){
     	console.log($scope.prices[i].color);
        console.log($scope.prices[i].amt);

        if (!$scope.totals[$scope.prices[i].color])
        	$scope.totals[$scope.prices[i].color] = 0;
        $scope.totals[$scope.prices[i].color] += parseFloat($scope.prices[i].amt);
    }

    $scope.tax = parseFloat($scope.tax);

    for (var j = 0; j<$scope.prices.length; j++){
    	$scope.sum += parseFloat($scope.prices[j].amt);}

    $scope.redtotal = $scope.totals.red + ($scope.totals.red/$scope.sum)*($scope.tax);
    $scope.orangetotal = $scope.totals.orange;
    $scope.yellowtotal = $scope.totals.yellow;
    $scope.greentotal = $scope.totals.green;
    $scope.bluetotal = $scope.totals.blue;
    $scope.purpletotal = $scope.totals.purple;
    $scope.blacktotal = $scope.totals.black;
    $scope.skybluetotal = $scope.totals.skyblue;


		  
		  
    }




 	 $scope.clickLittle = function(index, str) {
 	 	
		    $scope.prices[index].color=str;
 
      

		    if (str==="red"){
		    	 $scope.menured = function(index) {
		    	 if (index === 0)
		    	  	return "lightred";
		    	 }

		    }

		    if (str==="orange"){
		    	 $scope.menuorange = function(index) {
		    	 if (index === 1)
		    	  	return "lightorange";
		    	  }

		    }

		     if (str==="yellow"){
		    	 $scope.menuyellow = function(index) {
		    	 if (index === 2)
		    	  	return "lightyellow";
		    	  }

		    }

		     if (str==="green"){
		    	 $scope.menugreen = function(index) {
		    	 if (index === 3)
		    	  	return "lightgreen";
		    	  }

		    }

		     if (str==="blue"){
		    	 $scope.menublue = function(index) {
		    	 if (index === 4)
		    	  	return "lightblue";
		    	  }

		    }

		     if (str==="purple"){
		    	 $scope.menupurple = function(index) {
		    	 if (index === 5)
		    	  	return "lightpurple";
		    	  }

		    }

		     if (str==="black"){
		    	 $scope.menublack = function(index) {
		    	 if (index === 6)
		    	  	return "lightblack";
		    	  }

		    }

		     if (str==="skyblue"){
		    	 $scope.menuskyblue = function(index) {
		    	 if (index === 7)
		    	  	return "lightskyblue";
		    	  }

		    }
		    	
		           
		    	
		    	

    }
    $scope.Show = function() {
		    	
		    	$scope.prices.push({amt:"", color:""}); 

    }

}]
);

