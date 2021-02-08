async function getSummaryData(e){
    e.target.className
    const data = await axios.get(`/${e.target.className}`)
    //Change state to data
    setBlahBlah(data)
}