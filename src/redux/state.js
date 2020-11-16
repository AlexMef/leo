let rerender = () => {};

let state = {
    header: {
        siteTitle: "Leo/-",
        navBar: {
            solutions: "Solutions",
            products: "Products",
            portfolio: "Portfolio",
            contacts: "Contacts",
        }
    },
    data: "somedata",
    buttonPressed: 0,
    textArea: "",
}

export let observer = (subscriber) => {
    rerender = subscriber;
}

export let onButtonPressed = () => {
    state.buttonPressed += 1;
    rerender();
}

export let onTextAreaChange = (event) => {
    state.textArea = event.target.value;
    rerender();
}

export default state;