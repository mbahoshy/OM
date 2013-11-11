//a view for the model in a list form. This view will be used to display search results
var modelListView = Backbone.View.extend({
        tagName: 'div',
        events: {
                "click": "expandView",
        },
        initialize: function () {


        },

        expandView: function () {},
     
        render : function () {
        }
});

//a view for displaying detailed information about a single model
var modelFullView = Backbone.View.extend({
        tagName: 'div',
        events: {},
        initialize: function () {

        },
     
        render : function () {
        }
});