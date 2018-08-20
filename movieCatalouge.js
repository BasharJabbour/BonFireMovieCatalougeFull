module.exports.addMovie = function (movieTitle, genre, actors){
  dataset.push({movieTitle: movieTitle, genre: genre, actors: actors});
};

module.exports.movieSearch = function (searchInput, dataset) {
  var results = [];
  var pattern = new RegExp (searchInput, 'i');
  dataset.forEach(function(movie) {
    var found = Object.keys(movie).some(function(item) {
      if (movie[item].search) {
        return !!((movie[item].match(pattern)));
      } else {
        return movie[item].some(function(element) {
          return (element.match(pattern));
        });
      }
    });
    if (found) { results.push(movie); }
  });
  return results;
};
