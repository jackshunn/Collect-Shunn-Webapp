async function temp(){
    const data = await getData();
    console.log(data)
    setData(data)
    const body = {
        "keywords":"the batman",
        "movies":true,
        "books":true,
        "songs":true
    }
    const x =await fetch("/api/search",
    {
        method:"POST",
        headers: {
            'Content-Type':"application/json"
        },
        body: JSON.stringify(body)
    }
}