
async function MovieApi() {
    //var key = '956ce11b53f0bf5264309089404f2ff3';
    var apiKey = process.env.MOVIE_API_KEY;
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
    }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json.results;
      } catch (error) {
        console.log(error);
      }

}

export default MovieApi