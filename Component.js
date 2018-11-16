function Component(options) {
    this.container = options.container;
    this.render = options.render;
    this.actions = options.actions;
    this.state = options.state;

    this._render();
}

Component.prototype._render = function () {
    var renderedHTML = this.render.call(this, this.state);

    var containerElement = document.querySelector(this.container);

    containerElement.append(renderedHTML);
};



