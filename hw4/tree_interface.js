const btnTree = document.createElement("button")
btnTree.id = "btn-tree";
btnTree.textContent = "TREE"
container.append(btnTree)
btnTree.onclick = () => {
    const formTree = document.createElement("div")
    document.body.append(formTree)
    const label = document.createElement('h3')
    label.innerHTML = 'tree'
    formTree.append(label)
    const btnClose = addButton("btn", "close")
    const btnAdd = addButton("btn", "add")
    const btnFindMax = addButton("btn", "find-max")
    const btnFindMin = addButton("btn", "find-min")
    const btnRemove = addButton("btn", "remove")
    const TreeView = document.createElement('div');
    TreeView.id = 'tree-view'
    formTree.append(TreeView)
    TreeView.append(btnAdd, btnRemove, btnFindMin, btnFindMax, btnClose)
    const bst = new BST()
    function createTreeDom(obj) {
        let ul = document.createElement('ul');
        for (let key in obj) {
            
            if(obj[key] instanceof Object){
                if(key === 'left'){
                    let li = document.createElement('li'); 
                    li.innerHTML = 'left';
                    let childrenUl = createTreeDom(obj[key]);
                    if (childrenUl) {
                        li.append(childrenUl);
                    }
                    ul.append(li);
                }
                if(key === 'right'){
                    let li = document.createElement('li'); 
                    li.innerHTML = 'right';
                    let childrenUl = createTreeDom(obj[key]);
                    if (childrenUl) {
                        li.append(childrenUl);
                    }
                    ul.append(li);
                }
               
               
            } else if(key === 'data'){
                let li = document.createElement('li'); 
                li.innerHTML = obj[key];
                ul.append(li);  
            }     
        } 
        return ul;
      }

    function getTree(parentEl){
        const tree = createTreeDom(bst.root)
        if(parentEl.lastChild.id === 'treeV'){
            parentEl.lastChild.remove()
        }
        const treeV = document.createElement('div')
        treeV.id = 'treeV'
        TreeView.append(treeV)
        treeV.append(tree)
    }

    function onAddNode(value) {
        TreeNodeUI.createNodeUI(TreeView, value);
    }
    function onRemoveNode(value) {
        TreeNodeUI.createNodeUI(TreeView, value);
    }
    bst.on('AddNode', onAddNode);
    bst.on('RemoveNode', onRemoveNode);
    btnClose.onclick = () => {
        formTree.parentNode.removeChild(formTree)
    }

    btnAdd.onclick = () => {
        const value = prompt('Введите число')
        if(value) {
            bst.add(value)
            const el = btnAdd.parentNode
            getTree(el)
        } else {
            alert('не ввели число')
        } 
        
    }
    btnRemove.onclick = () => {
        const value = prompt('Введите число')
        if(value){
            bst.remove(value)
            const el = btnRemove.parentNode
            getTree(el)
        } else {
            alert('не ввели число')
        } 
    }
    btnFindMax.onclick = () => {
        if(bst.root){
            alert('max value ' + bst.findMax())
        } else {
            alert('tree is empty')
        }
        
    }
    btnFindMin.onclick = () => {
        if(bst.root){
            alert('min value ' + bst.findMin())
        } else {
            alert('tree is empty')
        }
    }
}
    