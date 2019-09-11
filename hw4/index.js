const addButton = function(clas, text){
    const el = document.createElement("button");
    el.textContent = text;
    el.className = clas;
    return el
}

const addElementID = function(tag, id, text){
    const el = document.createElement(tag);
    el.id = id;
    el.textContent = text; 
}

const container = document.createElement('div')
document.body.append(container)
container.id = "container"
document.body.append(container)