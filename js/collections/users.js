APP.Users = Backbone.Collection.extend({
	model: APP.User,
	url: "/users"
});