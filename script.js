

function sumFinder(arr, num) {
  //grab a single element from the array to be our first addend
  for (let i = 0; i < arr.length; i++) {
    // add every element to the single element we grabbed from the array in the outer loop
    //(arr[i]) will be our first addend
    //our second addend will be (arr[i+1]) which we will contain in a variable called j
    // j will be incremented within the inner loop
     //arr[i] will only be incremented once we break out of the inner loop  
    for (let j = i + 1; j < arr.length; j++) {
      //check to see whether any of the resulting sums equal the number provided to us
      //by our second argument. If so we return true.
      if (arr[i] + arr[j] === num) {
        console.log(true);
        return true;
      }
    }
  }
  //if none of the sums have equaled the given number(num),
  // our code will continue to execute to this point 
  // where it is safe to assume we can return false
  console.log(false);
  return false;
}
// I understand that using nested loops results in an unfavorable run time
// I am not at the point in my coding journey, where I know how to optimize this solution
// on the fly for a more favorable runtime efficiency
sumFinder([6, 4, 3, 2, 1, 7], 2);
sumFinder([6, 4, 3, 2, 1, 7], 9);
