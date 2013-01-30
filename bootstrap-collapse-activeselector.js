!function ($) {
  var extensionMethods = {
    actives: function() {
      return this.$parent && this.$parent.find(this.options.activeselector);
    },

    show: function() {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.actives();

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }
  }

  $.extend(true, $.fn.collapse.Constructor.prototype, extensionMethods);
  $.extend(true, $.fn.collapse.defaults, {
    activeselector: '> .accordion-group > .in'
  })
}(window.jQuery);