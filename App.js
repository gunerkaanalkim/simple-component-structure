new Component({
    container: "#myDiv",
    render: function (state) {
        var listItemContainer = document.createElement("ul");

        state.forEach(function (item) {
            var listItem = document.createElement("li");
            listItem.textContent = item.text;

            listItemContainer.append(listItem);
        });

        return listItemContainer;
    },
    state: [
        {
            text: "First Item"
        },
        {
            text: "Second Item"
        },
        {
            text: "Third Item"
        }
    ],
    actions: {}
});




