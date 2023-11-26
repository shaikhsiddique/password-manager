



// variable declaration

const submit=document.getElementById('submit');
const search=document.getElementById('search-button')
const view=document.getElementById('view');
const remove=document.getElementById('delete');
const searched=document.getElementById('searched');
let search_username;
let check;
let itteration=0;
let username_list=[];
let password_list=[];
let index=-1;



    // function
    function find_index_of(string){
        if(search_username===''){
            alert('Enter the username');
            return 0;
        }
       if((username_list.indexOf(search_username))!==-1){
        index=(username_list.indexOf(search_username));
        console.log(index);
        display();
        check=0;
       }
       else{
        alert('no such user-name');
       }
    }

    function display (){
        
        document.getElementById('display-sr-no').innerText=index+1;
        document.getElementById('display-username').innerText=username_list[index];
        document.getElementById('display-password').innerText=".........."
        check=0;
    }
    function show_password(){
        console.log(index,itteration);
        if(index===-1 || itteration===0){
            return 0;
        }
        if(check===0)
        {
            document.getElementById('display-password').innerText=password_list[index];
            check=1;
        }
        else{
            document.getElementById('display-password').innerText=".........."
            check=0;
        }
        
    }



    view.addEventListener("click",()=>{
        console.log('working');
        show_password();
    })
    remove.addEventListener("click",()=>{
        if(itteration===0||index===-1){
            return 0;
        }
        username_list.splice(index,1);
        password_list.splice(index,1);
        index=-1;
        itteration--;
        document.getElementById('display-password').innerText=".........."
        document.getElementById('display-sr-no').innerText=0
        document.getElementById('display-username').innerText="Data Delete Sucessfully";
        

    })
    search.addEventListener("click",(e)=>{
        console.log('work');
    search_username=searched.value;
    find_index_of(search_username)
    searched.value='';
    
    })
    searched.addEventListener("keydown",(event)=>{
        if(event.key==='Enter'){
            search_username=searched.value;
            find_index_of(search_username)
            searched.value='';
            
        }
    })

    submit.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log('working');
    username_list.push(Username.value)
    password_list.push(password.value)
    Username.value='';
    password.value='';
    itteration++;
    })


