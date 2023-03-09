const container0Elm = document.querySelector('.container0');
let containerId = 0;
let containerList = [];

class container{
    constructor(container0Elm){
        this.target = container0Elm;
        this.p = container0Elm.querySelector('p');
        this.alert = container0Elm.querySelector('.alert');
        this.add = container0Elm.querySelector('.add');
    }

    check_number(){
        this.alert.addEventListener('mousedown', ()=> {
            alert(this.p.textContent);
            console.log(this.p);
        })
    }
    add_container(){
        this.add.addEventListener('click', ()=>{
            containerId++;
            let template = `<div class="container${containerId} container"><p>${containerId}番コンテナ</p><button class="alert">番号を確認</button><button class="add">追加</button></div>`
            this.target.insertAdjacentHTML('afterend', template);
            let newContainerElm =  document.querySelector(`.container${containerId}`);
            containerList[containerId] = new container(newContainerElm);
            containerList[containerId].check_number();
            containerList[containerId].add_container();
        })
    }
}


containerList[0] = new container(container0Elm);

containerList[0].check_number();
containerList[0].add_container();
