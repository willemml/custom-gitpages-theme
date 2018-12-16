var posts = new Posts();

posts.fetch();

$('.some-search-input').on('change', function() {
  var results = posts.filter($(this).val().trim()),
    $resultsContainer = $('.search-results').empty();

  _(results).each(function(r) {
    $resultsContainer.append(new SearchResult({
      model: r
    }).render().$el);
  });
});
