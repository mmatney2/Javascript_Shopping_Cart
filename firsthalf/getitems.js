const token="M3QYkHppiMN2IfObdJaIW8ZamylgzeboPcB58tJ-iuU"
fetch('http://127.0.0.1:5000/api/item',{
    method:"GET",
    headers:{
        Authorization:`Bearer ${token}`
        }
    }
    ).then((res)=>res.json())
        .then((data)=>console.log(data,"data here"))
            .catch((error)=>console.log(error, "error here"))