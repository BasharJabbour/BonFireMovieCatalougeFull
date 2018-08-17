var movieCatalouge = function (htmlElement) {
  var movieCatalougeViewModel = function () {
    var self = {};
    var url = 'localhost:8080';
    self.movies = ko.observableArray();
    self.addMovie = function () {};
    self.search = function () {};

    return self;
  };

};
