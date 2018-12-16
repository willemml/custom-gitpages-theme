$(document).on('ready', function() {
  bindLinks()
  loadSearch()
})

function bindLinks() {
  $("a[href^='/']").on('click', function(e) {
    // Stop link from activating
    e.preventDefault()

    // Start the NProgress bar
    NProgress.start()

    // Get the URL to load
    url = $(this).attr('href')

    // Send a Get request to the URL
    $.get(url, function(data) {
      // Get the title of the new page
      regex = /<title>(.*)<\/title>/g
      newTitle = regex.exec(data)[1]

      // Set the title to the new title
      $('title').html(newTitle)

      // Replace the content
      $('#content').html($(data).find('#content').html())

      // Push a new state to the browser
      history.pushState({}, newTitle, url)

      // Update Google Analytics
      ga('set', 'location', window.location.href);
      ga('send', 'pageview');

      // Update disqus
      // If there is a disqus_thread on the page?
      if ($('#disqus_thread').length !== 0) {
        // Has Disqus been loaded before
        if ('undefined' !== typeof DISQUS) {
          // Reset Disqus
          DISQUS.reset({
            reload: true,
            config: function() {
              this.page.identifier = disqus_identifier
              this.page.url = disqus_url
            }
          });
        }
      }

      // Make NProgress finish
      NProgress.done()

      // Re Bind to all the links on the page
      bindLinks()
    })
  })
}

function loadSearch() {
  idx = lunr(function() {
    this.field('id')
    this.field('title', {
      boost: 10
    })
    this.field('summary')
  })

  $.getJSON('/content.json', function(data) {
    window.searchData = data
    $.each(data, function(index, entry) {
      idx.add($.extend({
        "id": index
      }, entry))
    })
  })

  $('#search').on('click', function() {
    $('.searchForm').toggleClass('show')
  })

  $('#searchForm').on('submit', function(e) {
    e.preventDefault()

    results = idx.search($('#searchField').val())

    $('#content').html('<h1>Search Results (' + results.length + ')</h1>')
    $('#content').append('<ul id="searchResults"></ul>')

    $.each(results, function(index, result) {
      entry = window.searchData[result.ref]
      $('#searchResults').append('<li><a href="' + entry.url + '">' + entry.title + '</li>')
    })
  })
}
