// Usually the controller instantiates the view and the model in the constructor or, in certain implementations, are injected by the main application class via dependency injection.
// The relation between a controller and the views could be one to many, so a controller could handle multiple views: the same relationship is valid for the models as well.
// When we want to scale up this architecture for large projects usually we try to split up these relationships in order to have almost a 1 to 1 relation between these three objects so we can reuse components that are self-contained and architected in the same way the entire application works, like a Russian doll.

// VIEW
var view = {
    showNumber: function (n) {
        var el = document.getElementById('showResult');
        el.innerHTML = n;
    }
};

// MODEL
var model = {
    number: 0,
    calculate: function (x, y) {
        this.number = x * y;
        var result = this.number;
        view.showNumber(result);
    }
};

// CONTROLLER
var controller = {
    handleClick: function () {
        model.calculate(3, 4);
    }
};

// INITIALIZE FUNCTION
(function () {
    var app = {
        init: function () {
            this.event();
        },

        event: function () {
            var el = document.getElementById('calcUser');
            el.onclick = controller.handleClick;
        }

    };

    app.init();
}());