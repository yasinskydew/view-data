const Queue = (function(EventEmmitterClass){
    class Queue extends EventEmmitterClass {
        constructor() {
            super();
            this._values = [];
        }

        enqueue(value) {
            this._values.push(value)
            this.emit('EnqueueNode', value);
        }

        dequeue(){
            const value = this._values.shift()
            this.emit('DequeueNode', value);
        }

    }

    return Queue;
})(EventEmitter);

const QueueNodeUI = (function (docObj) {
    class QueueNodeUI {
        static createNodeUI(...props) {
            return new QueueNodeUI(...props);
        }

        constructor(parentNode, value) {
            this.nodeEl = docObj.createElement('div');
            this.nodeEl.className = 'queue-node-ui';
            this.nodeEl.innerText = value;
            parentNode.append(this.nodeEl);
        }
    }

    return QueueNodeUI;
})(document);