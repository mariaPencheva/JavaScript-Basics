function seriesCalculator(input) {
    let name = input[0]; //string
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let timePerEpisode = Number(input[3]);

    let adsTimePerEpisode = timePerEpisode * 0.20;
    let timeWithAds = timePerEpisode + adsTimePerEpisode;
    let timeSpecialEpisodes = seasons * 10;

    let timeTotal = Math.floor((seasons * episodes * timeWithAds) + timeSpecialEpisodes);
       
    console.log(`Total time needed to watch the ${name} series is ${timeTotal} minutes.`)

}
seriesCalculator (["Lucifer","3", "18", "55"]);