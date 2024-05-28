let fibonacciSeries = [0,1];

for(let i=2; i<100 ; i++){
    fibonacciSeries[i]=fibonacciSeries[i-1]+fibonacciSeries[i-2];
}

document.write("<b>Fibonacci Series Upto 100th Value: </b>" + fibonacciSeries.join(", "));