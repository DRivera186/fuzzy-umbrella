
function budgetController($scope) {

          $scope.totalExpenses = function(){
              var rent = $scope.rent;
              var utilities = $scope.utilities;
              var autoPayment = $scope.autoPayment;
              return rent + utilities + autoPayment;
          };


          $scope.difference = function(){
              var totalExpenses = $scope.totalExpenses ();
              var income = $scope.income;
              return income - totalExpenses;
          };

          $scope.rate = function(){
              var apr = $scope.apr;
              var div = apr / 100;
              var r = div / 12;
                return r;
          };

          $scope.value = function(){
            var pvalue = $scope.pv;
            var downp = $scope.downp;
            var totalvalue = null;
            if (downp == null){
                totalvalue = pvalue;
            }
            else{
              totalvalue = pvalue - downp;
            }

            return totalvalue;
          };

          $scope.presentValue = function(){
              var pv = $scope.value();
              var rate = $scope.rate();
              var mult = pv * rate;

              return mult;
          };

           $scope.years = function(){
              var yr = $scope.yr;
              var month = [-12];
              var yrs = yr * month[0];

              return yrs;
          };

          $scope.bottomVal = function(){
              var aprs = $scope.rate();
              var periods = $scope.years();
              var bottom = aprs + 1;
              var bvalue = Math.pow(bottom, periods);

              return 1 - bvalue;
          };

          $scope.totalPayment = function(){
            var top = $scope.presentValue();
            var botval = $scope.bottomVal();
            var payment = top / botval;

            return payment;

          };

          $scope.totalInterest = function(){
            var totalpay = $scope.totalPayment() * 12;
            var negone = [-1];
            var meses = $scope.years() * negone[0];
            var years = meses / 12; 
            var presval = $scope.value();
            var intertest = totalpay * years;
            var allinterest = intertest - presval;

            return allinterest;

          };

           $scope.arrayMonths = function(){
            var n = [-1];
            var mes = $scope.years() * n[0];
            var array = [];

            for (var i = 1; i <= mes; i++){
                array.push(i);
            }

            return array;

          };

          // $scope.info = [
          //             {interest: 0, principal: 0, new_balance: 0}  
          //         ];

          // $scope.month = function() {
          //   var monn = 0;

          //   return monn;
          // }
          // $scope.prince = function() {
          //   var prince = 0;

          //   return prince;
          // }


          // $scope.allInfo = function(){
          //   var pay = $scope.totalPayment();
          //   var ar = $scope.arrayMonths();
          //   var tb = $scope.value();
          //   var aprs = $scope.rate() * 12;
          //   var mon_it = $scope.month();
          //   var p_month = $scope.prince();
          //   var new_b = tb;
          //   var aray_in = [];
          //   var aray_p = [];
          //   var aray_new = [];

          //   for (var i = 1; i <= ar.length-1; i++){
          //     mon_it = new_b * aprs / 12;
          //     aray_in.push(mon_it.interest);
          //     p_month = pay - mon_it;
          //     aray_p.push(p_month);
          //     temp = new_b;
          //     new_b = temp - p_month;
          //     aray_new.push(new_b);
          //   }

          //   return aray_in;
          // };
           
          //  $scope.arrays = function(){
          //     var array1 = $scope.allInfo();

          //     for (var i = 0; i < array1; i++){
          //       return array1[i];
          //     }



          //  };
           
          
          // $scope.allMonthinterest = function(){
          //   var pay = $scope.totalPayment();
          //   var ar = $scope.arrayMonths();
          //   var tb = $scope.value();
          //   var aprs = $scope.rate() * 12;
          //   var mon_it = 0;
          //   var p_month = 0;
          //   var new_b = tb;

          //   var aray_in = $scope.aray_in;
          //   var aray_p = $scope.aray_p;
          //   var aray_new = $scope.aray_new;

          //   for (var i = 1; i <= ar.length-1; i++){
          //     mon_it = new_b * aprs / 12;
          //     aray_in.push(mon_it);
          //     p_month = pay - mon_it;
          //     aray_p.push(p_month);
          //     temp = new_b;
          //     new_b = temp - p_month;
          //     aray_new.push(new_b);
          //   }
          //   if(aray_in !== null){

          //       return { interest: aray_in }; 
          //     }else{
          //       console.log('There is nothing');
          //     }

            // {
            //   monthly_interest: aray_in, 
            //   monthly_principal: aray_p, 
            //   new_balance: aray_new
            // };

          // };

          //           var all = allMonthinterest();
          // var inter = all.monthly_interest;
          // var prin = all.monthly_principal;
          // var balance_new = all.new_balance;

      };