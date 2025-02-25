// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movies) => movies.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const moviesCount = movies.filter(function (movies) {
    return (
      movies.director === 'Steven Spielberg' &&
      movies.genre.indexOf('Drama') != -1
    );
  });
  return moviesCount.length;
}

// const stevenMovies = movies.filter(
//   (movies) => movies.director === 'Steven Spielberg' && movies.genre.indexOf != ('Drama'));

// return stevenMovies.length;

// }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

   if (movies.length === 0) {
    return 0
  }
  
  const sum = movies.reduce (function (acc, v) {
    
    return acc + (v.score || 0)
  }, 0)
  
  const average = sum / movies.length
  return Math.round((average + Number.EPSILON) * 100) / 100

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

const contD = movies.filter(function(movies){ return movies.genre.indexOf('Drama') != -1})

return scoresAverage (contD);}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
