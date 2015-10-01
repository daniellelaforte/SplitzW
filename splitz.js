angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.message = "Add another price";
	$scope.prices=[{amt:"", color:""}]
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
		$scope.prices=[{amt:"", color:""}]
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
		$scope.tax = "";
    }
	
	$scope.Submit = function() {
			//event.preventDefault(); //don't need this - angular does this automatically
	$scope.totals={};
	$scope.sum = 0;
	

    for (var i = 0; i<$scope.prices.length; i++){
        if (!$scope.totals[$scope.prices[i].color]) 
        	$scope.totals[$scope.prices[i].color] = 0;

        if (!isNaN(Number(parseFloat($scope.prices[i].amt))))
        	$scope.totals[$scope.prices[i].color] += parseFloat($scope.prices[i].amt);
    }
 
    $scope.tax = parseFloat($scope.tax) || 0;
    

    for (var j = 0; j<$scope.prices.length; j++){
    	if (!isNaN(Number(parseFloat($scope.prices[j].amt))))
    		$scope.sum += parseFloat($scope.prices[j].amt);
    }

  	if ($scope.totals['red'] != 0  && ($scope.totals['red'] != null && $scope.totals['red'] != NaN)) {
   		$scope.redtotal =($scope.totals.red + ($scope.totals.red/$scope.sum)*($scope.tax));
   		$scope.redtotal1 = true;
   		$scope.redtotal15 = $scope.redtotal*(.15)+$scope.redtotal
   		$scope.redtotal20 = $scope.redtotal*(.20)+$scope.redtotal

  	}
  	else{
  		$scope.redtotal1 = false;
  		$scope.redtotal = "";}

  	if ($scope.totals['orange'] != 0 && ($scope.totals['orange'] != null && $scope.totals['orange'] != NaN)){
    	$scope.orangetotal = ($scope.totals.orange + ($scope.totals.orange/$scope.sum)*($scope.tax));
    	$scope.orangetotal1 = true;
    	$scope.orangetotal15 = $scope.orangetotal*(.15)+$scope.orangetotal
   		$scope.orangetotal20 = $scope.orangetotal*(.20)+$scope.orangetotal
  	}
 
	else{
  		$scope.orangetotal1 = false;
  		$scope.orangetotal = "";}

	if ($scope.totals['yellow'] != 0 && ($scope.totals['yellow'] != null && $scope.totals['yellow'] != NaN)){
    	$scope.yellowtotal =  ($scope.totals.yellow + ($scope.totals.yellow/$scope.sum)*($scope.tax));
    	$scope.yellowtotal1 = true;
    	$scope.yellowtotal15 = $scope.yellowtotal*(.15)+$scope.yellowtotal
   		$scope.yellowtotal20 = $scope.yellowtotal*(.20)+$scope.yellowtotal
  	}
	
	else{
  		$scope.yellowtotal1 = false;
  		$scope.yellowtotal = "";}

	if ($scope.totals['green'] != 0 && ($scope.totals['green'] != null && $scope.totals['green'] != NaN)){
    	$scope.greentotal = ($scope.totals.green + ($scope.totals.green/$scope.sum)*($scope.tax));
    	$scope.greentotal1 = true;
    	$scope.greentotal15 = $scope.greentotal*(.15)+$scope.greentotal
   		$scope.greentotal20 = $scope.greentotal*(.20)+$scope.greentotal
  	}
	
	else{
  		$scope.greentotal1 = false;
  		$scope.greentotal = "";}

	if ($scope.totals['blue'] != 0 && ($scope.totals['blue'] != null && $scope.totals['blue'] != NaN)){
    	$scope.bluetotal = ($scope.totals.blue + ($scope.totals.blue/$scope.sum)*($scope.tax));
    	$scope.bluetotal1 = true;
    	$scope.bluetotal15 = $scope.bluetotal*(.15)+$scope.bluetotal
   		$scope.bluetotal20 = $scope.bluetotal*(.20)+$scope.bluetotal
  	}
	
	else{
  		$scope.bluetotal1 = false;
  		$scope.bluetotal = "";}

	if ($scope.totals['purple'] != 0 && ($scope.totals['purple'] != null && $scope.totals['purple'] != NaN)){
    	$scope.purpletotal = ($scope.totals.purple + ($scope.totals.purple/$scope.sum)*($scope.tax));
    	$scope.purpletotal1 = true;
    	$scope.purpletotal15 = $scope.purpletotal*(.15)+$scope.purpletotal
   		$scope.purpletotal20 = $scope.purpletotal*(.20)+$scope.purpletotal
  	}
	
	else{
  		$scope.purpletotal1 = false;
  		$scope.purpletotal = "";}

	if ($scope.totals['black'] != 0 && ($scope.totals['black'] != null && $scope.totals['black'] != NaN)){
    	$scope.blacktotal = ($scope.totals.black + ($scope.totals.black/$scope.sum)*($scope.tax));
    	$scope.blacktotal1 = true;
    	$scope.blacktotal15 = $scope.blacktotal*(.15)+$scope.blacktotal
   		$scope.blacktotal20 = $scope.blacktotal*(.20)+$scope.blacktotal
  	}
	
	else{
  		$scope.blacktotal1 = false;
  		$scope.blacktotal = "";}

	if ($scope.totals['skyblue'] != 0 && ($scope.totals['skyblue'] != null && $scope.totals['skyblue'] != NaN)){
    	$scope.skybluetotal = ($scope.totals.skyblue + ($scope.totals.skyblue/$scope.sum)*($scope.tax));
    	$scope.skybluetotal1 = true;
    	$scope.skybluetotal15 = $scope.skybluetotal*(.15)+$scope.skybluetotal
   		$scope.skybluetotal20 = $scope.skybluetotal*(.20)+$scope.skybluetotal
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
	
	var Priceobj = function () {
		this.amt = "";
		this.color = "";
	}	

	var priceobjagain = new Priceobj();    	 
    
    $scope.Show = function() {
		    	
		    	$scope.prices.push(angular.copy(priceobjagain));

    }

}]
);

