var SearchResult = Backbone.View.extend({
  template: _.template($('#search-result').html().trim()),
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
