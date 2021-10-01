


// part 1
/*
* computes force, where 'x' is the mass, 'y' is the acceleration.
*/
function computeForce() {
    {
            
        var x = document.getElementById("mass").value;
        var y = document.getElementById("AccelerationF").value;
        if(isNaN(x)||isNaN(y)|| x== '' || y ==''){
          document.getElementById("Force").innerHTML = "Incorrect inputs";
}else{
  document.getElementById("Force").innerHTML = x*y;
}
      }

}


// part 2
/*
* computes average displacement, where 'x' is the velocity, 'y' is the time, and 'z' is the acceleration.
*/
function computeAvgVelocity() {
    {
            
        var x = document.getElementById("Velocity").value;
        var y = document.getElementById("Time").value;
        var z = document.getElementById("AccelerationD").value;
        if(isNaN(x)||isNaN(y)|| isNaN(z)|| x== '' || y ==''||z==''){
          document.getElementById("Displacement").innerHTML = "Incorrect inputs";
}else{
  document.getElementById("Displacement").innerHTML = x*y-(1/2)*z*y^2;
}
      }

}


// part 3
/*
* computes f(x), where 'x' is side "A" of a triangle, 'y' is side "B" of a triangle, and 'z' is side "C" of a triangle
*/
function computePrincipal() {
    
            
    var x = document.getElementById("A").value;
    var y = document.getElementById("B").value;
    var z = document.getElementById("C").value;
    var a = Math.pow(y, 2) - (4 * x * z)

        if(isNaN(x)||isNaN(y)|| isNaN(z)|| x=='' || y ==''||z=='')
        {
          document.getElementById("Quad").innerHTML = "Incorrect inputs";
}
else if(a < 0)
{
    document.getElementById("Quad").innerHTML = "Negative Square root";
}
else{
    var one = (-1*y + Math.sqrt(a)) / (2 * x);
    var two = (-1*y - Math.sqrt(a)) / (2 * x);

  document.getElementById("Quad").innerHTML = one + " and " + two;
                                                 
      }

}

// part 4
/*
* computes present value of an annuity stream, where 'x' is the dollar amount of each annuity payment, 
* 'y' is the intrest rate, and 'z' is the number of periods in which the payment will be made.
*/
function computePresentValue() {
    
            
  var x = document.getElementById("PMT").value;
  var y = document.getElementById("Rate").value;
  var z = document.getElementById("NoY").value;
  var a = Math.pow(y, 2) - (4 * x * z)

      if(isNaN(x)||isNaN(y)|| isNaN(z)|| x=='' || y ==''||z=='')
      {
        document.getElementById("P").innerHTML = "Incorrect inputs";
}

else{

document.getElementById("P").innerHTML = x*(1-(1/(Math.pow(++y,z))/y));
                                               
    }

}
