
async function MovieApi() {
    //var key = '956ce11b53f0bf5264309089404f2ff3';
    var apiKey = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTZjZTExYjUzZjBiZjUyNjQzMDkwODk0MDRmMmZmMyIsIm5iZiI6MTczNzUwOTMzMy43NjcsInN1YiI6IjY3OTA0OWQ1YmNhODAzN2RhYjI4YTRlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nkM7diAmWTNj7MW-sk4ML0mk1Olv0GNrat2YcGfBGXs`

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