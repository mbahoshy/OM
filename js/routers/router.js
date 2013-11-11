APP.Router = Backbone.Router.extend({
    routes: {
        "first": "firstRoute",
        "second": "secondRoute"
    },

    firstRoute: function() {
        console.log("firstRoute() was hit.");
        APP.usersCollection = new APP.Users();
        APP.usersCollection.create({name:"colin", email:"555-555-5555"});
        APP.usersCollection.create({name:"dan", email:"seattle"});
    },

    secondRoute: function() {
        console.log("secondRoute() was hit.");
        APP.usersCollection = new APP.Users();
        console.dir(APP.usersCollection);
        APP.usersCollection.create({name:"jamama", email:"5dkdkkd55"});
    }
});

APP.router = new APP.Router();
Backbone.history.start({root: "/"});