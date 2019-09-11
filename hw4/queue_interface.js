const btnQueue = document.createElement("button");
btnQueue.id = "btn-queue";
btnQueue.textContent = "QUEUE"
container.append(btnQueue)
btnQueue.onclick = () => {
    const formQueue = document.createElement("div");
    document.body.append(formQueue)
    const label = document.createElement('h3')
    label.innerHTML = 'queue'
    formQueue.append(label)
    const btnClose = addButton("btn", "close")
    const btnPlus = addButton("btn", "+")
    const btnMinus = addButton("btn", "-")
    const QueueView = document.createElement('div')
    QueueView.className = `queue-view`
    formQueue.append(QueueView)
    QueueView.append(btnPlus, btnMinus, btnClose)
    const queue = new Queue();
    function onEnqueueNode(value) {
        QueueNodeUI.createNodeUI(QueueView, value);
    }
    function onDequeueNode() {
        const el = btnMinus.parentNode;
        if(el.querySelector('div')){
            el.querySelector('div').remove()
        }

    }
    queue.on('EnqueueNode', onEnqueueNode);
    queue.on('DequeueNode', onDequeueNode);

    btnClose.onclick = () => {
        formQueue.parentNode.removeChild(formQueue)
    }

    btnPlus.onclick = () => {
        queue.enqueue(queue._values.length)
    }
    btnMinus.onclick = () => {
        queue.dequeue()
    }
}