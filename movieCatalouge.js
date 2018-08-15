var movieCatalougeDatabase = function () {

  var dataset = [
    {
      movieTitle: "mission Impossible",
      actors: [ "Tom Cruise" ],
      genre: [ "Action", "Drama" ]
    },
    {
      movieTitle: "Forrest Gump",
      actors: [ "Tom Hanks" ],
      genre: [ "Comedy", "Drama" ]
    }
  ];

  var loadDatbase = function () {
    return ["Mission Impossible", "Forrest Gump"];
  };

  var addMovie = function (movieTitle, genre, actors){
    return [movieTitle, genre, actors];
  };

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
