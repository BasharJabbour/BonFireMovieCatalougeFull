var movieCatalougeDatabase = function () {

  var loadDatbase = function () {
    return ["Mission Impossible", "Forrest Gump"];
  };

  var addMovie = function (movieTitle, genre, actors){
    dataset.push({movieTitle: movieTitle, genre: genre, actors: actors});
  };

  //this search presume the shape of data: JSON array, with first order strings or arrays only
  var movieSearch = function (searchInput) {
    var results = [];
    dataset.forEach(function(movie) {
      var found = Object.keys(movie).some(function(item) {
        if (movie[item].search) {
          return (movie[item].search(searchInput, "i")) > -1;
        } else {
          return movie[item].some(function(element) {
            return element.search(searchInput, "i") > -1;
          });
        }
      });
      if (found) { results.push(movie); }
    });
    return results;
  };

  return {
    addMovie: addMovie,
    search: movieSearch
  };
};
