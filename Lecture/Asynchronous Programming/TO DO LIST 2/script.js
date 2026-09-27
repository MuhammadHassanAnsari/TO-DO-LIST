let inputvalue = document.querySelector('#taskInput');
let addbtn = document.querySelector('.addBtn');
let todocontainer = document.querySelector('.todoContainer');


addbtn.addEventListener("click", postdata)

let API = 'https://6ab814599b03155d08090e23.mockapi.io/api/v1/Todos';

async function fetchdata() {
    let response = await fetch(API);
    let data = await response.json();

    if (data) {
        todocontainer.innerHTML = '';
        data.forEach(obj => {

            let div = document.createElement('div')
            div.className = 'todo';
            div.innerHTML = `
            <p>${obj.text}</p>

            <div>
                <button class="delete">Delete</button>
                <button class="edit">Edit</button>
            </div>
            `
            let deleteBtn = div.querySelector('.delete')
            deleteBtn.addEventListener("click", function(){
                deletedata(obj.id); 
            })


            todocontainer.append(div)

        });

    }



}



async function postdata() {
    let value = inputvalue.value;

    let objdata = {
        text: value.trim()
    }


    let response = await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objdata),

    })

    if (response.status === 201) {
        fetchdata();
    }

}


async function deletedata(){
    let response = await fetch(`${API}/${id}`, {
        method: 'DELETE',
    })
}

fetchdata();
