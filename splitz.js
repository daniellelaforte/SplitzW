angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.message = "Add another price";
	//$scope.classname="forthehiddenform";
	$scope.prices=[{amt:"", color:""}]
	$scope.counter=0;
	$scope.total=0;
	$scope.totals=[];
	$scope.redtotal="";
	$scope.orangetotal="";
	$scope.yellowtotal="";
	$scope.greentotal="";
	

	
	$scope.Submit = function() {
			//event.preventDefault(); //don't need this - angular does this automatically
		   // for (var i=0; i<$scope.prices.length; i++){
	   	//     $scope.prices[i].amt = $scope.prices[i].amt || 0
					// $scope.total+=parseFloat($scope.prices[i].amt)
				
		   // }
		  	
		  	for ($scope.price in $scope.prices){
		  		    if (!$scope.totals[$scope.price.color])
		  		    	$scope.totals[$scope.price.color] = 0;
					$scope.totals[$scope.price.color]+=$scope.price.amt;    
				
		   }
           
           $scope.totals['red'] = $scope.totals['red'] || 0 ;
           $scope.totals['orange'] = $scope.totals['orange']  || 0;
           $scope.totals['yellow'] = $scope.totals['yellow'] || 0;
           $scope.totals['green'] = $scope.totals['green'] || 0;

           $scope.redtotal = parseFloat($scope.totals['red']);
           $scope.orangetotal = $scope.totals['orange'];
           $scope.yellowtotal = $scope.totals['yellow'];
           $scope.greentotal = $scope.totals['green'];

           console.log(parseFloat($scope.totals['red']));

		  
		  
    }
 	 $scope.clickLittle = function(index, str) {
		    	//$scope.classname="forthevisibleform"
		    	if (str==="red"){
		    		$scope.littleredboxclicked = "littleredbox";
		    		$scope.littleorangeboxclicked = "lightorange";
		    		$scope.littleyellowboxclicked = "lightyellow";
		   		    $scope.littlegreenboxclicked = "lightgreen";
		            $scope.littleblueboxclicked = "lightblue";
		            $scope.littlepurpleboxclicked = "lightpurple";
		            $scope.littleblackboxclicked = "lightblack";
		            $scope.littleskyblueboxclicked = "lightskyblue";}

		        if (str==="orange"){
		    		$scope.littleredboxclicked = "lightred";
		    		$scope.littleorangeboxclicked = "littleorangebox";
		    		$scope.littleyellowboxclicked = "lightyellow";
		   		    $scope.littlegreenboxclicked = "lightgreen";
		            $scope.littleblueboxclicked = "lightblue";
		            $scope.littlepurpleboxclicked = "lightpurple";
		            $scope.littleblackboxclicked = "lightblack";
		            $scope.littleskyblueboxclicked = "lightskyblue";}

		            if (str==="yellow"){
		    		$scope.littleredboxclicked = "lightred";
		    		$scope.littleorangeboxclicked = "lightorange";
		    		$scope.littleyellowboxclicked = "littleyellowbox";
		   		    $scope.littlegreenboxclicked = "lightgreen";
		            $scope.littleblueboxclicked = "lightblue";
		            $scope.littlepurpleboxclicked = "lightpurple";
		            $scope.littleblackboxclicked = "lightblack";
		            $scope.littleskyblueboxclicked = "lightskyblue";}

		            if (str==="green"){
		    		$scope.littleredboxclicked = "lightred";
		    		$scope.littleorangeboxclicked = "lightorange";
		    		$scope.littleyellowboxclicked = "lightyellow";
		   		    $scope.littlegreenboxclicked = "littlegreenbox";
		            $scope.littleblueboxclicked = "lightblue";
		            $scope.littlepurpleboxclicked = "lightpurple";
		            $scope.littleblackboxclicked = "lightblack";
		            $scope.littleskyblueboxclicked = "lightskyblue";}

		            if (str==="blue"){
		    		$scope.littleredboxclicked = "lightred";
		    		$scope.littleorangeboxclicked = "lightorange";
		    		$scope.littleyellowboxclicked = "lightyellow";
		   		    $scope.littlegreenboxclicked = "lightgreen";
		            $scope.littleblueboxclicked = "littlebluebox";
		            $scope.littlepurpleboxclicked = "lightpurple";
		            $scope.littleblackboxclicked = "lightblack";
		            $scope.littleskyblueboxclicked = "lightskyblue";}

		            if (str==="purple"){
		    		$scope.littleredboxclicked = "lightred";
		    		$scope.littleorangeboxclicked = "lightorange";
		    		$scope.littleyellowboxclicked = "lightyellow";
		   		    $scope.littlegreenboxclicked = "lightgreen";
		            $scope.littleblueboxclicked = "lightblue";
		            $scope.littlepurpleboxclicked = "littlepurplebox";
		            $scope.littleblackboxclicked = "lightblack";
		            $scope.littleskyblueboxclicked = "lightskyblue";}

		            if (str==="black"){
		    		$scope.littleredboxclicked = "lightred";
		    		$scope.littleorangeboxclicked = "lightorange";
		    		$scope.littleyellowboxclicked = "lightyellow";
		   		    $scope.littlegreenboxclicked = "lightgreen";
		            $scope.littleblueboxclicked = "lightblue";
		            $scope.littlepurpleboxclicked = "lightpurple";
		            $scope.littleblackboxclicked = "littleblackbox";
		            $scope.littleskyblueboxclicked = "lightskyblue";}

		            if (str==="skyblue"){
		    		$scope.littleredboxclicked = "lightred";
		    		$scope.littleorangeboxclicked = "lightorange";
		    		$scope.littleyellowboxclicked = "lightyellow";
		   		    $scope.littlegreenboxclicked = "lightgreen";
		            $scope.littleblueboxclicked = "lightblue";
		            $scope.littlepurpleboxclicked = "lightpurple";
		            $scope.littleblackboxclicked = "lightblack";
		            $scope.littleskyblueboxclicked = "littleskybluebox";}
		           
		    	$scope.prices[index].color=str;
		    	

    }
    $scope.Show = function() {
		    	//$scope.classname="forthevisibleform"
		    	

		    	$scope.counter++;  
		    	$scope.prices.push({amt:"", color:""}); 

    }

}]
);

//I don't know how to bind a color and keep adding fields and then using their inputs 