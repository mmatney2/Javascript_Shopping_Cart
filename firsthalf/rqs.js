const APIKEY='a1516c99e27f93edf46aeb6cde0fb4ba'
//Fetch is built into JS (WebAPIS)

// fetch with call and promises
const fetchCallWithCallBack=(fcb)=>{
    const response=fetch("https://favqs.com/api/qotd",
    headers={
        Authorization:`Token token=${APIKEY}`, 
        "Content-Type":"application/json"})
            .then((response)=>response.json())
                .then((data)=>fcb(data))
                    .catch((error)=>console.error(error))
    }

callBackFetch=(data)=>{
    console.log("Fetch Callback", data)
    // do stuff with data
}
fetchCallWithCallBack(callBackFetch)


// fetch async and await
const fetchCallWithAsyncAwait = async () =>{
    const response = await fetch("https://favqs.com/api/qotd",
    headers={
        Authorization:`Token token=${APIKEY}`, 
        "Content-Type":"application/json"});
    data = await response.json()
    console.log("Fetch async await", data)
    // do stuff with data

}
fetchCallWithAsyncAwait()

// axios with call and promises
const axiosCallWithCallBack=(acb)=>{
    axios.get("https://favqs.com/api/qotd",
        headers={
            Authorization:`Token token=${APIKEY}`, 
            "Content-Type":"application/json"
        }).then((response)=>acb(response.data))
            .catch((error)=>console.error(error));
}

callBackAxios=(data)=>{
    console.log("Axios Callback", data)
}
axiosCallWithCallBack(callBackAxios)



// axios async and await
const axiosCallWithAsyncAwait = async () => {
    const response = await axios.get("https://favqs.com/api/qotd",
        headers={
            Authorization:`Token token=${APIKEY}`, 
            "Content-Type":"application/json"
        })
    data = response.data
    console.log("Axios Async await", data)
    //do stuff with data
}
axiosCallWithAsyncAwait()

// async function call()


// to copy a list in JS
myList=[1,2,3,4]
mylist2=mylist.slice() // a new list that is the same and mylist

mylist2 = mylist // both lists are actually the same list in memory