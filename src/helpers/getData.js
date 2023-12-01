import axios from "axios"


const options = {
    
    params: {
        geo: "TR",
        lang: "tr"
    },
    headers: {
// If you receive a warning from the API that the request limit has expired (429), replace the key below with the key that comes with the new Gmail.
        'X-RapidAPI-Key': 'e9c16c084emshd6bbf6324cb96b6p1cb160jsn86b2c4eb08e7',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
};

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

// api'ye verdiğimiz endpoint için istek atıp verileri döndüren bir fonk yazalım

export const getData = async (path) => {
    try {
        return await axios.get(path, options);
    } catch (err) { console.log("verileri çekerken hata oluştu ") }

}


