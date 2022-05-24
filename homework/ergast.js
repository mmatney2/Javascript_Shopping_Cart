addErgastField1()
addErgastField2()
// addSubmitButton()
createErgastTable()

function addErgastField1(){
    input = document.createElement('input');
    input.placeholder="Enter a Year";
    input.name="season";
    input.classList.add("form-control");
    document.body.appendChild(input)
}
function addErgastField2(){
    input = document.createElement('input');
    input.placeholder="Enter a Round";
    input.name="round";
    input.classList.add("form-control");
    document.body.appendChild(input)
}
document.getElementById("my_button").addEventListener('click',(event)=>{handleClick(event)})

// function handleSubmit(event){
//     event.stopPropagation();
//     event.preventDefault();
//     console.log(document.getElementsByName("season")["MRData"]["StandingsTable"].value);//[0]["StandingsLists"][0]?.value)
    
// }
// function handleSubmit(event){
//     event.stopPropagation();
//     event.preventDefault();
//     doAPICall(document.getElementsByName("round")["MRData"]["StandingsTable"].value);//[1]["StandingsLists"][1]?.value)
    
// }
// function addSubmitButton(){
//     button = document.createElement("button");
//     document.body.appendChild(button);
//     button.innerText="Submit";
//     button.classList.add('btn', 'btn-primary', "form-control");
//     button.addEventListener('click', (e)=>handleSubmit(e) )
// }
function createErgastTable(){
    table=document.createElement('table');
    table.classList.add('table', 'table-striped')
    document.body.appendChild(table)

    thead=document.createElement('thead');
    table.appendChild(thead);

    tr = document.createElement('tr');
    thead.appendChild(tr);

    th=document.createElement('th');
    th.innerText="First Name:" ;
    th.scope="col";
    tr.appendChild(th);
    

    th=document.createElement('th');
    th.innerText="Last Name: ";
    th.scope="col";
    tr.appendChild(th);


    th=document.createElement('th');
    th.innerText="DOB: ";
    th.scope="col";
    tr.appendChild(th);

    th=document.createElement('th');
    th.innerText="Positions: ";
    th.scope="col";
    tr.appendChild(th);

    th=document.createElement('th');
    th.innerText="Wins: ";
    th.scope="col";
    tr.appendChild(th);

    th=document.createElement('th');
    th.innerText="Nationality: ";
    th.scope="col";
    tr.appendChild(th);

    th=document.createElement('th');
    th.innerText="Constructors: ";
    th.scope="col";
    tr.appendChild(th);

    let tbody=document.createElement('tbody');
    table.appendChild(tbody);

}
async function doAPICall(year, r){
    let result = await axios.get(`http://ergast.com/api/f1/${year}/${r}driverStandings.json`)
    console.log(result)
    result=result.data
    for(let i = 0; i <result.length; i++){ 
        let new_result=result[i]
        console.log(new_result[i])
    }
    
    


    let tbody=document.getElementsByTagName('tbody')["MRData"].value;//["StandingsTable"]["StandingsLists"][0]["DriverStandings"];  //[1]["Driver"];

    let tr=document.createElement('tr')
    tbody.appendChild(tr)

    th=document.createElement('th');
    th.scope="row";
    th.innerHTML= result.Driver.givenName;
    tr.appendChild(th);

    td=document.createElement('td');
    td.innerText=result.Driver.lastName;
    tr.appendChild(td);

    td=document.createElement('td');
    td.innerText=result.Driver.dateOfBirth;
    tr.appendChild(td);

    td=document.createElement('td');
    td.innerText=result.DriverStandings.position;
    tr.appendChild(td);

    td=document.createElement('td');
    td.innerText=result.DriverStandings.wins;
    tr.appendChild(td);

    td=document.createElement('td');
    td.innerText=result.Driver.Nationality;
    tr.appendChild(td);

    td=document.createElement('td');
    td.innerText=result.DriverStandings.Constructors;
    tr.appendChild(td);
    
}