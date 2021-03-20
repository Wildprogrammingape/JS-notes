const addForm = document.querySelector('.add'); 

const ul = document.querySelector('.todos');

const search = document.querySelector('.search input');

const generateTemplate = (todo) =>{

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    ul.innerHTML += html;
}

addForm.addEventListener('submit', event =>{

    event.preventDefault();

    const todo = addForm.add.value.trim(); // trim white space
    
    if (todo.length > 0){
        generateTemplate(todo);
        addForm.reset();
    }
});

// delete todos
// event delegation

ul.addEventListener('click', event =>{
    if (event.target.classList.contains('delete')){ // event.target.classList[2] === 'delete'
        event.target.parentNode.remove();   // event.target.parentElement.remove()
    }
});

// filter todo
// .contains()只用于DOM Node/element， .includes()用于array和string等数据类型

const filterTodos = (term) =>{
    Array.from(ul.children)  // convert HTML Collection to Array(数组的每个数据都是li element)
        .filter((todo) => !todo.innerText.includes(term))   // 保存不包含term的li在数组中
        .forEach((todo) => todo.classList.add('filtered')); // 将每一个不含term的li加上class 'filtered'

    // 将每一个含term的li去掉class 'filtered'
    Array.from(ul.children) 
        .filter((todo) => todo.innerText.includes(term))   
        .forEach((todo) => todo.classList.remove('filtered')); 
};


// keyup event
search.addEventListener('keyup',e => {
    const term = e.target.value.trim();
    filterTodos(term);
});









// ul.addEventListener('click', event =>{
//     console.log(event.target.classList);
// });
// click icon :
// DOMTokenList(3) ["far", "fa-trash-alt", "delete", value: "far fa-trash-alt delete"]