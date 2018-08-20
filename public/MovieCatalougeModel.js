var movieCatalouge = function (htmlElement) {
  ko.options.deferUpdates = true;

  var updateUrl = function (data) {
    if (window.location.search) {
        return window.location.toString().split('?')[0] + '?searchTerm=' +  data;
    } else {
      return window.location + '/search?searchTerm=' +  data;
    }
  };

  var movieCatalougeModel = function () {
    var self = {};

    self.movies = ko.observableArray([]);
    self.searchQuery = ko.observable('');
    self.addMovieViewModel =  {
      title: ko.observable(''),
      actors: ko.observable(''),
      genres: ko.observable('')
    };

    self.addMovie = function (data) {
      var movie = {
        movieTitle: self.addMovieViewModel.title(),
        actors: self.addMovieViewModel.actors().split(','),
        genres: self.addMovieViewModel.genres().split(',')
      };

      $.ajax({
        url: '/add',
        type : 'POST',
        data: movie,
        success: function (results) {
          console.log(results);
        },
        error: function (results) {
          console.log(results);
        }
      });
    };

    self.search = function (data) {
      self.movies.removeAll();
      updateUrl(data);
      window.history.pushState(null, null, updateUrl(data));
      $.ajax({
        url: '/search',
        type : 'GET',
        data: { search: data },
        success: function (results) {
          if (results){
            results.forEach(function(movie){
              self.movies.push(movieViewModel(movie));
            });
          }
        },
        error: function(){
        }
      });
    };

    self.searchQuery.subscribe(self.search);

    return self;
  };

  var movieViewModel = function (movie) {
    var self = {};

    self.title = movie.movieTitle;
    self.actors = movie.actors;
    self.genres = movie.genre;

    return self;
  };

  ko.applyBindings(movieCatalougeModel(), htmlElement);

};
