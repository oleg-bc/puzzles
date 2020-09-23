/*Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory*/
////my soloution
function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // Determine if two movie runtimes add up to the flight length
    for (let i = 0;i<movieLengths.length;i++){
        let ml = movieLengths[i];
        movieLengths[i]='x'
        if(movieLengths.includes(flightLength-ml)){return true;}
        movieLengths[i]=ml;
    }
  
    return false;
  }
  