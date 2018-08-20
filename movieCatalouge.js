module.exports.movieSearch = function (searchInput, dataset) {
  var results = [];

  var trimmedInput = searchInput.trim();
  var tokens = trimmedInput.indexOf(' ') > 0 ? trimmedInput.split(' ') : [trimmedInput];

  var tokenPatterns = tokens.map(function(token){
    return new RegExp(token, 'i');
  });

  var findString = function (str, pattern) {
    return !!(str.match(pattern));
  }

  dataset.forEach(function(movie) {
    var found = tokenPatterns.every(function(pattern) {
      return Object.keys(movie).some(function(item) {
        if (movie[item].match) {
          return findString(movie[item], pattern);
        }
        else {
          return movie[item].some(function(element) {
            return findString(element, pattern);
          });
        }
      });
    });
    if (found) { results.push(movie); }
  });

  return results;
};
