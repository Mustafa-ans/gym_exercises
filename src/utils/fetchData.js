export const exerciseOptions = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '591e93f16fmshb816eedb91bb221p146527jsn4983cf422639'
  }
}
export const fetchData = async(url, options)=>{
    const response = await fetch(url,options);
    const data = await response.json()
    return data
}