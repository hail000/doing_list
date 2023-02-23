let text_Input = document.getElementById("text_Input");
let add_bt = document.getElementById("add_bt");
let doList = [];
add_bt.addEventListener("click",add_text);
let menus = document.querySelectorAll(".menus div");
let menu_id='all';
let filter_list = [];
let newline = document.getElementById("menu_ch");



function randomId(){
    return '_' + Math.random().toString(36).substring(2,9);
}

text_Input.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
      add_text(e);
    }
  });

for(let i=0; i<menus.length; i++){
    menus[i].addEventListener("click",function(event){main_mu(event)});
}


function add_text() {
    let doing ={
        id:randomId(),
        work: text_Input.value,
        isComplete:false,
        };
    doList.push(doing);
    text_Input.value= "";
    console.log(menu_id);
    re_mk_list();
}

function mk_list(){
    let list =[];
    console.log(menu_id + "1");
    if(menu_id == "all"){
        list = doList;
    }else{
        list = filter_list;
    }

    let resultHtml ='';
    for(let i=0; i<list.length; i++){
        if(list[i].isComplete == true){
            resultHtml +=`
            <div class="doing">
                <div class="task-done">${list[i].work}</div>
                <div>
                    <button onclick="Complete('${list[i].id}')">완료</button>
                    <button onclick="del('${list[i].id}')">삭제</button>
                </div>
            </div>`
        } else{  resultHtml +=`
        <div class="doing">
            <div>${list[i].work}</div>
            <div>
                <button onclick="Complete('${list[i].id}')">완료</button>
                <button onclick="del('${list[i].id}')">삭제</button>
            </div>
        </div>`
        }
    }console.log(menu_id + "2");
    document.getElementById("list").innerHTML = resultHtml;
}

function Complete(id){
    for(let i=0; i<doList.length; i++){
        if(doList[i].id==id){
            doList[i].isComplete= !doList[i].isComplete;
            break;
        }
    }
    re_mk_list();
}




function del(id){
    for(let i=0; i<doList.length; i++){
        if(doList[i].id==id){
            doList.splice(i,1);
            break;
        }
    }
    re_mk_list();
}


function main_mu(event){
    menu_id = event.target.id;
    filter_list =[];
    if(menu_id == "all"){
    }else if( menu_id =="ing"){
        for(let i=0; i<doList.length; i++){
            if(doList[i].isComplete == false){
                filter_list.push(doList[i])
            }
        }
    }else if(menu_id == "clear"){
        for(let i=0; i<doList.length; i++){
            if(doList[i].isComplete == true){
                filter_list.push(doList[i])
            }
        }
       
    }
    mk_list();
}


function re_mk_list(){
    filter_list =[];
    if(menu_id == "all"){
    }else if( menu_id =="ing"){
        for(let i=0; i<doList.length; i++){
            if(doList[i].isComplete == false){
                filter_list.push(doList[i])
            }
        }
    }else if(menu_id == "clear"){
        for(let i=0; i<doList.length; i++){
            if(doList[i].isComplete == true){
                filter_list.push(doList[i])
            }
        }
       
    }
    mk_list();
}


menus.forEach(menu=>menu.addEventListener("click",(e)=>menulineing(e)));

function menulineing(e){
    if (e) {
        selectedMenu = e.target.id;
        newline.style.width = e.target.offsetWidth + "px";
        newline.style.left = e.target.offsetLeft + "px";
        newline.style.top =
          e.target.offsetTop + (e.target.offsetHeight - 4) + "px";
      }
}