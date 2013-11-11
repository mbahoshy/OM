//a test view for a user
var userView = Backbone.View.extend({
        tagName: 'div',
        events: {
                "click": "expandView",
        },
        initialize: function () {
        	this.collection.on('add', this.addOne, this);
        },

        addOne: function (){
                var todoView = new TodoView({model: todoItem});
                this.$el.append(todoView.render().el);
        },
     
        render : function () {
	       this.collection.forEach(this.addOne, this);
        }
});