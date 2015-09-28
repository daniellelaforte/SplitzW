angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.message = "Add another price";
	$scope.prices=[{amt:"Enter Amount", color:""}]
	$scope.totals={};
	$scope.sum=0;
	$scope.bug=[];
	$scope.red=[];
	$scope.orange=[];
	$scope.yellow=[];
	$scope.green=[];
	$scope.blue=[];
	$scope.purple=[];
	$scope.black=[];
	$scope.skyblue=[];
	$scope.red[0]=1000;
	$scope.orange[0]=1000;
	$scope.yellow[0]=1000;
	$scope.green[0]=1000;
	$scope.blue[0]=1000;
	$scope.purple[0]=1000;
	$scope.black[0]=1000;
	$scope.skyblue[0]=1000;
	$scope.redtotal1 = false;
	$scope.orangetotal1 = false;
	$scope.yellowtotal1 = false;
	$scope.greentotal1 = false;
	$scope.bluetotal1 = false;
	$scope.purpletotal1 = false;
	$scope.blacktotal1 = false;
	$scope.skybluetotal1 = false;

	
	
    $scope.removePrice = function(price, index) {
    	price.amt = "";
    	$scope.bug[index] = index;
    	
    }

    $scope.Reset = function() {
    	$scope.redtotal1 = false;
		$scope.orangetotal1 = false;
		$scope.yellowtotal1 = false;
		$scope.greentotal1 = false;
		$scope.bluetotal1 = false;
		$scope.purpletotal1 = false;
		$scope.blacktotal1 = false;
		$scope.skybluetotal1 = false;
		$scope.prices=[{amt:"Enter Amount", color:""}]
		$scope.totals={};
		$scope.sum=0;
    }
	
	$scope.Submit = function() {
			//event.preventDefault(); //don't need this - angular does this automatically
	$scope.totals={};
	

    for (var i = 0; i<$scope.prices.length; i++){
        if (!$scope.totals[$scope.prices[i].color]) 
        	$scope.totals[$scope.prices[i].color] = 0;

        if (!isNan(Number(parseFloat($scope.prices[i].amt))))
        	$scope.totals[$scope.prices[i].color] += parseFloat($scope.prices[i].amt);
    }
   
    $scope.tax = parseFloat($scope.tax) || 0;
    

    for (var j = 0; j<$scope.prices.length; j++){
    	if (!isNan(Number(parseFloat($scope.prices[j].amt))))
    		$scope.sum += parseFloat($scope.prices[j].amt);
    }

  	if ($scope.totals['red'] != 0  && ($scope.totals['red'] != null && $scope.totals['red'] != NaN)) {
   		$scope.redtotal =($scope.totals.red + ($scope.totals.red/$scope.sum)*($scope.tax));
   		$scope.redtotal1 = true;
  	}
  	else{
  		$scope.redtotal1 = false;
  		$scope.redtotal = "";}

  	if ($scope.totals['orange'] != 0 && ($scope.totals['orange'] != null && $scope.totals['orange'] != NaN)){
    	$scope.orangetotal = ($scope.totals.orange + ($scope.totals.orange/$scope.sum)*($scope.tax));
    	$scope.orangetotal1 = true;
  	}
 
	else{
  		$scope.orangetotal1 = false;
  		$scope.orangetotal = "";}

	if ($scope.totals['yellow'] != 0 && ($scope.totals['yellow'] != null && $scope.totals['yellow'] != NaN)){
    	$scope.yellowtotal =  ($scope.totals.yellow + ($scope.totals.yellow/$scope.sum)*($scope.tax));
    	$scope.yellowtotal1 = true;
  	}
	
	else{
  		$scope.yellowtotal1 = false;
  		$scope.yellowtotal = "";}

	if ($scope.totals['green'] != 0 && ($scope.totals['green'] != null && $scope.totals['green'] != NaN)){
    	$scope.greentotal = ($scope.totals.green + ($scope.totals.green/$scope.sum)*($scope.tax));
    	$scope.greentotal1 = true;
  	}
	
	else{
  		$scope.greentotal1 = false;
  		$scope.greentotal = "";}

	if ($scope.totals['blue'] != 0 && ($scope.totals['blue'] != null && $scope.totals['blue'] != NaN)){
    	$scope.bluetotal = ($scope.totals.blue + ($scope.totals.blue/$scope.sum)*($scope.tax));
    	$scope.bluetotal1 = true;
  	}
	
	else{
  		$scope.bluetotal1 = false;
  		$scope.bluetotal = "";}

	if ($scope.totals['purple'] != 0 && ($scope.totals['purple'] != null && $scope.totals['purple'] != NaN)){
    	$scope.purpletotal = ($scope.totals.purple + ($scope.totals.purple/$scope.sum)*($scope.tax));
    	$scope.purpletotal1 = true;
  	}
	
	else{
  		$scope.purpletotal1 = false;
  		$scope.purpletotal = "";}

	if ($scope.totals['black'] != 0 && ($scope.totals['black'] != null && $scope.totals['black'] != NaN)){
    	$scope.blacktotal = ($scope.totals.black + ($scope.totals.black/$scope.sum)*($scope.tax));
    	$scope.blacktotal1 = true;
  	}
	
	else{
  		$scope.blacktotal1 = false;
  		$scope.blacktotal = "";}

	if ($scope.totals['skyblue'] != 0 && ($scope.totals['skyblue'] != null && $scope.totals['skyblue'] != NaN)){
    	$scope.skybluetotal = ($scope.totals.skyblue + ($scope.totals.skyblue/$scope.sum)*($scope.tax));
    	$scope.skybluetotal1 = true;
  	}
	
	else{
  		$scope.skybluetotal1 = false;
  		$scope.skybluetotal = "";}

		  
		  
    }

 //     $scope.clickOrange = function(index, str) {
 	 	
	// 	    $scope.prices[index].color=str;


	// 	    if (str==="orange"){
	// 	    	 $scope.menuorange = function(bug) {
	// 	    	 if (index == bug)
	// 	    	  	return "lightorange";}

	// 	    }
	// }

 	 $scope.clickTheColor = function(index, str) {
 	 	
		    $scope.prices[index].color=str;

		    if (str==='red'){
		    	if ($scope.red[index] !== index)
		    		$scope.red[index] = index;
		    	else 
		    		$scope.red[index] = 1000;
		    		$scope.orange[index] = 1000;
		    		$scope.yellow[index] = 1000;
		    		$scope.green[index] = 1000;
		    		$scope.blue[index] = 1000;
		    		$scope.purple[index] = 1000;
		    		$scope.black[index] = 1000;
		    		$scope.skyblue[index] = 1000;
		    		}


		    if (str==='orange'){
		    	if ($scope.orange[index] !== index)
		    		$scope.orange[index] = index;
		    	else 
		    		$scope.orange[index] = 1000;
		    		$scope.red[index] = 1000;
		    		$scope.yellow[index] = 1000;
		    		$scope.green[index] = 1000;
		    		$scope.blue[index] = 1000;
		    		$scope.purple[index] = 1000;
		    		$scope.black[index] = 1000;
		    		$scope.skyblue[index] = 1000;
		    		}

		    if (str==='yellow'){
		    	if ($scope.yellow[index] !== index)
		    		$scope.yellow[index] = index;
		    	else 
		    		$scope.yellow[index] = 1000;
		    		$scope.red[index] = 1000;
		    		$scope.orange[index] = 1000;
		    		$scope.green[index] = 1000;
		    		$scope.blue[index] = 1000;
		    		$scope.purple[index] = 1000;
		    		$scope.black[index] = 1000;
		    		$scope.skyblue[index] = 1000;
		    		}

		    if (str==='green'){
		    	if ($scope.green[index] !== index)
		    		$scope.green[index] = index;
		    	else 
		    		$scope.green[index] = 1000;
		    		$scope.red[index] = 1000;
		    		$scope.orange[index] = 1000;
		    		$scope.yellow[index] = 1000;
		    		$scope.blue[index] = 1000;
		    		$scope.purple[index] = 1000;
		    		$scope.black[index] = 1000;
		    		$scope.skyblue[index] = 1000;
		    		}

		    if (str==='blue'){
		    	if ($scope.blue[index] !== index)
		    		$scope.blue[index] = index;
		    	else 
		    		$scope.blue[index] = 1000;
		    		$scope.red[index] = 1000;
		    		$scope.orange[index] = 1000;
		    		$scope.yellow[index] = 1000;
		    		$scope.green[index] = 1000;
		    		$scope.purple[index] = 1000;
		    		$scope.black[index] = 1000;
		    		$scope.skyblue[index] = 1000;
		    		}

		    if (str==='purple'){
		    	if ($scope.purple[index] !== index)
		    		$scope.purple[index] = index;
		    	else 
		    		$scope.purple[index] = 1000;
		    		$scope.red[index] = 1000;
		    		$scope.orange[index] = 1000;
		    		$scope.yellow[index] = 1000;
		    		$scope.green[index] = 1000;
		    		$scope.blue[index] = 1000;
		    		$scope.black[index] = 1000;
		    		$scope.skyblue[index] = 1000;
		    		}

		    if (str==='black'){
		    	if ($scope.black[index] !== index)
		    		$scope.black[index] = index;
		    	else 
		    		$scope.black[index] = 1000;
		    		$scope.red[index] = 1000;
		    		$scope.orange[index] = 1000;
		    		$scope.yellow[index] = 1000;
		    		$scope.green[index] = 1000;
		    		$scope.blue[index] = 1000;
		    		$scope.purple[index] = 1000;
		    		$scope.skyblue[index] = 1000;
		    		}

		    if (str==='skyblue'){
		    	if ($scope.skyblue[index] !== index)
		    		$scope.skyblue[index] = index;
		    	else 
		    		$scope.skyblue[index] = 1000;
		    		$scope.red[index] = 1000;
		    		$scope.orange[index] = 1000;
		    		$scope.yellow[index] = 1000;
		    		$scope.green[index] = 1000;
		    		$scope.blue[index] = 1000;
		    		$scope.purple[index] = 1000;
		    		$scope.black[index] = 1000;
		    		}


	}
		    	 
    
    $scope.Show = function() {
		    	
		    	$scope.prices.push({amt:"Enter Amount", color:""}); 

    }

}]
);

