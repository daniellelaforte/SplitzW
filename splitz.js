angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.message = "Add another price";
	$scope.prices=[{amt:"Enter Item Price", color:""}]
	$scope.totals={};
	$scope.sum=0;
	
	
    $scope.removePrice = function(price) {
    	price.amt = "";
    	$scope.darker = "morevisible";
    }
	
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

  	if ($scope.totals['red'] != 0  && ($scope.totals['red'] != null && $scope.totals['red'] != NaN))
   		$scope.redtotal = "Red: " + ($scope.totals.red + ($scope.totals.red/$scope.sum)*($scope.tax));
  	else
  		$scope.redtotal = "";

  	if ($scope.totals['orange'] != 0 && ($scope.totals['orange'] != null && $scope.totals['orange'] != NaN))
    	$scope.orangetotal = "Orange: " + ($scope.totals.orange + ($scope.totals.orange/$scope.sum)*($scope.tax));
	else
  		$scope.orangetotal = "";

	if ($scope.totals['yellow'] != 0 && ($scope.totals['yellow'] != null && $scope.totals['yellow'] != NaN))
    	$scope.yellowtotal = "Yellow: " + ($scope.totals.yellow + ($scope.totals.yellow/$scope.sum)*($scope.tax));
	else
  		$scope.yellowtotal = "";

	if ($scope.totals['green'] != 0 && ($scope.totals['green'] != null && $scope.totals['green'] != NaN))
    	$scope.greentotal = "Green: " + ($scope.totals.green + ($scope.totals.green/$scope.sum)*($scope.tax));
	else
  		$scope.greentotal = "";

	if ($scope.totals['blue'] != 0 && ($scope.totals['blue'] != null && $scope.totals['blue'] != NaN))
    	$scope.bluetotal = "Blue: " + ($scope.totals.blue + ($scope.totals.blue/$scope.sum)*($scope.tax));
	else
  		$scope.bluetotal = "";

	if ($scope.totals['purple'] != 0 && ($scope.totals['purple'] != null && $scope.totals['purple'] != NaN))
    	$scope.purpletotal = "Purple: " + ($scope.totals.purple + ($scope.totals.purple/$scope.sum)*($scope.tax));
	else
  		$scope.purpletotal = "";

	if ($scope.totals['black'] != 0 && ($scope.totals['black'] != null && $scope.totals['black'] != NaN))
    	$scope.blacktotal = "Black: " + ($scope.totals.black + ($scope.totals.black/$scope.sum)*($scope.tax));
	else
  		$scope.blacktotal = "";

	if ($scope.totals['skyblue'] != 0 && ($scope.totals['skyblue'] != null && $scope.totals['skyblue'] != NaN))
    	$scope.skybluetotal = "Skyblue: " + ($scope.totals.skyblue + ($scope.totals.skyblue/$scope.sum)*($scope.tax));
	else
  		$scope.skybluetotal = "";


		  
		  
    }

     $scope.clickOrange = function(index, str) {
 	 	
		    $scope.prices[index].color=str;


		    if (str==="orange"){
		    	 $scope.menuorange = function(bug) {
		    	 if (index == bug)
		    	  	return "lightorange";}

		    }
	}
	 $scope.clickYellow = function(index, str) {
 	 	
		    $scope.prices[index].color=str;


		    if (str==="yellow"){
		    	 $scope.menuyellow = function(bug) {
		    	 if (index == bug)
		    	  	return "lightyellow";}

		    }
	}
	 $scope.clickGreen = function(index, str) {
 	 	
		    $scope.prices[index].color=str;


		    if (str==="green"){
		    	 $scope.menugreen = function(bug) {
		    	 if (index == bug)
		    	  	return "lightgreen";}

		    }
	}
	 $scope.clickBlue = function(index, str) {
 	 	
		    $scope.prices[index].color=str;


		    if (str==="blue"){
		    	 $scope.menublue = function(bug) {
		    	 if (index == bug)
		    	  	return "lightblue";}

		    }
	}
	 $scope.clickPurple = function(index, str) {
 	 	
		    $scope.prices[index].color=str;


		    if (str==="purple"){
		    	 $scope.menupurple = function(bug) {
		    	 if (index == bug)
		    	  	return "lightpurple";}

		    }
	}
	 $scope.clickBlack = function(index, str) {
 	 	
		    $scope.prices[index].color=str;


		    if (str==="black"){
		    	 $scope.menublack = function(bug) {
		    	 if (index == bug)
		    	  	return "lightblack";}

		    }
	}
	 $scope.clickSkyblue = function(index, str) {
 	 	
		    $scope.prices[index].color=str;


		    if (str==="skyblue"){
		    	 $scope.menuskyblue = function(bug) {
		    	 if (index == bug)
		    	  	return "lightskyblue";}

		    }
	}

 	 $scope.clickRed = function(index, str) {
 	 	
		    $scope.prices[index].color=str;

		    if (str==="red"){   //these functions make sure to set the correct classes depending on the index and which color is clicked
		    	 $scope.menured = function(bug) {
		    	 if (index == bug)
		    	  	return "lightred";}
		    	 	
		    }

		    // if (str==="orange"){
		    // 	 $scope.menuorange = function(bug) {
		    // 	 if (index == bug)
		    // 	  	return "lightorange";}

		    // }

		    //  if (str==="yellow"){
		    // 	 $scope.menuyellow = function(bug) {
		    // 	 if (index == bug)
		    // 	  	return "lightyellow"; }	

		    // }

		    //  if (str==="green"){
		    // 	 $scope.menugreen = function(bug) {
		    // 	 if (index == bug)
		    // 	  	return "lightgreen";}
		    	
		    // }

		    //  if (str==="blue"){
		    // 	 $scope.menublue = function(bug) {
		    // 	 if (index == bug)
		    // 	  	return "lightblue";}
		    	 
		    // }

		    //  if (str==="purple"){
		    // 	 $scope.menupurple = function(bug) {
		    // 	 if (index == bug)
		    // 	  	return "lightpurple";}
		    	 	
		    // }

		    //  if (str==="black"){
		    // 	 $scope.menublack = function(bug) {
		    // 	 if (index == bug)
		    // 	  	return "lightblack"; }  	 	

		    // }

		    //  if (str==="skyblue"){
		    // 	 $scope.menuskyblue = function(bug) {
		    // 	 if (index == bug)
		    // 	  	return "lightskyblue";}
	
		    // }
		    	
		           
		    	
		    	

    }
    $scope.Show = function() {
		    	
		    	$scope.prices.push({amt:"Enter Item Price", color:""}); 

    }

}]
);

