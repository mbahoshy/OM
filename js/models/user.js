//models a new user
APP.User = Backbone.Model.extend({
	defaults: function () {
		return {
			name: "",
			email: "",
			favorites: ""
		};
	}
	
});

//models a new manual
APP.Manual = Backbone.Model.extend({
	defaults: {
		id: "",
		category: "",
		subcategory: "",
		brand: "",
		series: "",
		model: "",
		snippet: "",
		description: "",
		image: ""
	}
});