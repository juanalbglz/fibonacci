function showVal(newVal){
  document.getElementById("valBox").innerHTML='Get the '+newVal+' first fibonacci numbers';
}

function get_first_fibonacci(){
	var newVal = document.getElementById('fibonumbers').value;
	var first_nums = [0,1];
	for (i = 2; i <= newVal; i++){
		first_nums.push(first_nums[i-2]+first_nums[i-1]);
	}
	if (document.getElementById('check').checked) {
		document.getElementById("results").innerHTML = first_nums.join('<br>');
	} else {
  document.getElementById("results").innerHTML = first_nums.join();
	}
}
/*var fibonacci = (function () {
    var arr = [0, 1];
    return function () {
	    var num = arr[arr.length - 1],
        len = arr.length;
        arr.push(arr[len - 1] + arr[len - 2]);
        alert (num);
        return num;
    };
}());

function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
}
function fibonacci_print (max) {
	this.max = max;
	for (i = 0; i < this.max; i++) {
		document.getElementById('results').innerHTML+= fibonacci()+', ';
	}
};*/