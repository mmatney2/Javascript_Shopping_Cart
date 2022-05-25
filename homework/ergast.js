addErgastField1()
addErgastField2()
addSubmitButton()
createErgastTable()

function addErgastField1(){
    input = document.createElement('input');
    input.placeholder="Enter a Year";
    input.name="year";
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
// document.getElementById("my_button").addEventListener('click',(event)=>{handleClick(event)})


function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    let year = document.querySelector("[name='year']").value
    let round = document.querySelector("[name='round']").value
    doAPICall(year,round)    
}
function addSubmitButton(){
    button = document.createElement("button");
    document.body.appendChild(button);
    button.innerText="Submit";
    button.classList.add('btn', 'btn-primary', "form-control");
    button.addEventListener('click', (e)=>handleSubmit(e) )
}
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
    let result = await axios.get(`http://ergast.com/api/f1/${year}/${r}/driverStandings.json`)
    console.log(result)
    result=result.data
 
    
    
    let driverStandings=result.MRData.StandingsTable.StandingsLists[0].DriverStandings

    let tbody=document.querySelector("tbody")
    tbody.innerHTML="" //empties the table and adds the new rows

    for(let i = 0; i <driverStandings.length; i++){ 
        let obj=driverStandings[i]
        let firstName=obj.Driver.givenName
        let lastName=obj.Driver.familyName
        let dateOfBirth=obj.Driver.dateOfBirth
        let nationality=obj.Driver.nationality
        let position=obj.position
        let wins=obj.wins
        let constructor=obj.Constructors[0].name
        
        // console.log(firstName, lastName, nationality, dateOfBirth, position, wins, constructor)
    


    let tr=document.createElement('tr')
    tbody.appendChild(tr)

    th=document.createElement('td');
    th.scope="row";
    th.innerHTML= firstName;
    tr.appendChild(th);

    td=document.createElement('td');
    td.innerText=lastName;
    tr.appendChild(td);

    td=document.createElement('td');
    td.innerText=dateOfBirth;
    tr.appendChild(td);

    td=document.createElement('td');
    td.innerText=position;
    tr.appendChild(td);

    td=document.createElement('td');
    td.innerText=wins;
    tr.appendChild(td);

    td=document.createElement('td');
    td.innerText=nationality;
    tr.appendChild(td);

    td=document.createElement('td');
    td.innerText=constructor;
    tr.appendChild(td);

    tbody.append(tr)
}    
}