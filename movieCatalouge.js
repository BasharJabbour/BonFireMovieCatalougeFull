module.exports.addMovie = function (movieTitle, genre, actors){
  dataset.push({movieTitle: movieTitle, genre: genre, actors: actors});
};

module.exports.movieSearch = function (searchInput, dataset) {
  var results = [];
  dataset.forEach(function(movie) {
    var found = Object.keys(movie).some(function(item) {
      if (movie[item].search) {
        return (movie[item].search(searchInput, 'i')) > -1;
      } else {
        return movie[item].some(function(element) {
          return element.search(searchInput, 'i') > -1;
        });
      }
    });
    if (found) { results.push(movie); }
  });
  return results;
};
