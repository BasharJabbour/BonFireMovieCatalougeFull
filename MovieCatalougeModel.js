var movieCatalouge = function (htmlElement) {
  ko.options.deferUpdates = true;
  var movieCatalougeViewModel = function () {
    var self = {};
    var url = 'localhost:8080';
    self.movies = ko.observableArray();
    self.addMovie = function () {};
    self.search = function () {};

    return self;
  };

  var movieViewModel = function () {
    var self = {};

    self.title = ko.observable();
    self.actors = ko.observableArray();
    self.genres = ko.observableArray();

    return self;
  };

};
