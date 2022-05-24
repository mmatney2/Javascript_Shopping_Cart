addPokeField()
addSubmitButton()
createPokeTable()

function addPokeField(){
    input = document.createElement('input');
    input.placeholder="Enter A pokemon name";
    input.name="poke_name";
    input.classList.add("form-control");
    document.body.appendChild(input)
}

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(document.getElementsByName("poke_name")[0].value)
    doAPICall(document.getElementsByName("poke_name")[0].value)
}

function addSubmitButton(){
    button = document.createElement("button");
    document.body.appendChild(button);
    button.innerText="Submit";
    button.classList.add('btn', 'btn-primary', "form-control");
    button.addEventListener('click', (e)=>handleSubmit(e) )
}

function createPokeTable(){
    table=document.createElement('table');
    table.classList.add('table', 'table-striped')
    document.body.appendChild(table)

    thead=document.createElement('thead');
    table.appendChild(thead);

    tr = document.createElement('tr');
    thead.appendChild(tr);

    th=document.createElement('th');
    th.innerText="Sprite: ";
    th.scope="col";
    tr.appendChild(th);
    

    th=document.createElement('th');
    th.innerText="Pokemon Name: ";
    th.scope="col";
    tr.appendChild(th);


    th=document.createElement('th');
    th.innerText="Pokemon Ability: ";
    th.scope="col";
    tr.appendChild(th);

    let tbody=document.createElement('tbody');
    table.appendChild(tbody);

}
async function doAPICall(pokeName){
    let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`)
    console.log(result)
    result=result.data

    let tbody=document.getElementsByTagName('tbody')[0];

    let tr=document.createElement('tr')
    tbody.appendChild(tr)

    th=document.createElement('th');
    th.scope="row";
    th.innerHTML=`<img src=${result.sprites.front_default} height="50px">`
    tr.appendChild(th);

    td=document.createElement('td');
    td.innerText=result.name;
    tr.appendChild(td);

    td=document.createElement('td');
    td.innerText=result.abilities[0].ability.name;
    tr.appendChild(td);


}
