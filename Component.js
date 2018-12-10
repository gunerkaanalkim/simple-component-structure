function Component(options) {
    this.container = options.container;
    this.render = options.render;
    this.actions = options.actions;
    this.state = options.state;

    this._renderedHTML = null;

    this._initialize();
}

Component.prototype._initialize = function () {
    this._render();
    this._handleEvents(this._renderedHTML, this.actions);
};

Component.prototype._render = function () {
    var renderedHTML = this.render.call(this, this.state);

    var containerElement = document.querySelector(this.container);

    this._renderedHTML = renderedHTML;

    containerElement.append(renderedHTML);
};

Component.prototype._handleEvents = function (renderedHTML, actions) {
    //  Walk in tags
    for (var tag in actions) {
        if (actions.hasOwnProperty(tag)) {
            var events = actions[tag];

            //  Walk in events
            for (var eventName in events) {
                if (events.hasOwnProperty(eventName)) {
                    var method = events[eventName];

                    var elements = renderedHTML.querySelectorAll(tag);

                    //  Walk in elements
                    for (var i = 0; i < elements.length; i++) {
                        var element = elements[i];

                        element.addEventListener(eventName, method);
                    }
                }
            }
        }
    }
};



