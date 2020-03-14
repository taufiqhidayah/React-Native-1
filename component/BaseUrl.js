const url ="http://newsapi.org/v2/sources?apiKey=266d190c4442467880148c3565390825"
export async function getNews(){
    let result =await fetch(url).then(response=>response.json());
    return result.articles;
}