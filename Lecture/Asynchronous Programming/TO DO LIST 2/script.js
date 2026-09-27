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
            <p class = 'paratext'>${obj.text}</p>
            <input id="editinput"  type="text"  placeholder="Enter Your Task" value = '${obj.text}'>


            <div>
                <button class="delete">Delete</button>
                <button class="edit">Edit</button>
                <button class="save">Save</button>
                
            </div>
            `
            let deleteBtn = div.querySelector('.delete')
            let editBtn = div.querySelector('.edit')
            let saveBtn = div.querySelector('.save')
            let paratext = div.querySelector('.paratext')
            let editinput = div.querySelector('#editinput')

            deleteBtn.addEventListener("click", function () {
                deletedata(obj.id);
            })


            editBtn.addEventListener("click", function () {

                editBtn.style.display = 'none';
                saveBtn.style.display = 'inline';
                paratext.style.display = 'none';
                editinput.style.display = 'inline'

            })

            saveBtn.addEventListener("click", async function () {
                let editvalue = editinput.value
                await updatedata(obj.id, editvalue)
                if (response.status === 200) {
                    editBtn.style.display = 'inline';
                    saveBtn.style.display = 'none';
                    paratext.style.display = 'inline';
                    editinput.style.display = 'none';

                    fetchdata();
                }


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
        inputvalue.value = '';
    }

}


async function updatedata(id, value) {
    // let value = inputvalue.value;
    // console.log(id, value)

    let objdata = {
        text: value.trim()
    }


    let response = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objdata),

    })

    if (response.status === 200) {
        fetchdata();
        // inputvalue.value = '';
    }

    return response;

    console.log(response)
}


async function deletedata(id) {
    let response = await fetch(`${API}/${id}`, {
        method: 'DELETE',
    })

    if (response.status === 200) {
        fetchdata();
    }
    // console.log(response);
}

fetchdata();
