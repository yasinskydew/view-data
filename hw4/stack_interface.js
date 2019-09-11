const btnStack = document.createElement("button");
btnStack.id = "btn-stack";
btnStack.textContent = "STACK"
container.append(btnStack)
btnStack.onclick = () => {
    const formStack = document.createElement("div");
    document.body.append(formStack)
    const label = document.createElement('h3')
    label.innerHTML = 'stack'
    formStack.append(label)
    const btnClose = addButton("btn", "close")
    const btnPlus = addButton("btn", "+")
    const btnMinus = addButton("btn", "-")
    const stackView = document.createElement('div')
    stackView.className = `stack-view`
    formStack.append(stackView)
    stackView.append(btnPlus, btnMinus, btnClose)
    const stack = new Stack();
    function onPushNode(value) {
        StackNodeUI.createNodeUI(stackView, value);
    }
    function onPopNode() {
        const el = btnMinus.parentNode;
        if(el.lastChild.className === 'stack-node-ui'){
            el.lastChild.remove()
        }
    }
    stack.on('pushStackNode', onPushNode);
    stack.on('popStackNode', onPopNode);

    btnClose.onclick = () => {
        formStack.parentNode.removeChild(formStack)
    }

    btnPlus.onclick = () => {
        stack.push(stack._values.length)
    }
    btnMinus.onclick = () => {
        stack.pop()
    }
}