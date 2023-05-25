function movieRatings(input) {
    let movies = Number(input[0]);
        
    let nameMin = "";
    let nameMax = "";
    let maxRating = Number.MIN_VALUE;
    let minRating = Number.MAX_VALUE;

    let averageRating = 0;
    let totalRat = 0; 

    for(let i = 1; i <= movies * 2; i = i + 2){
        let movieName = input[i];
        let rating = Number(input[i+1]);

        if (rating > maxRating){
            maxRating = rating;
            nameMax = movieName;
        }

        if (rating < minRating){
            minRating = rating;
            nameMin = movieName;
        }  
        
        totalRat += rating;

    }

    averageRating = totalRat / movies;
    
    console.log(`${nameMax} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${nameMin} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);

}

movieRatings([
    "10",
    "A Star is Born",
    "0.0",
    "Creed 2",
    "4.3",
    "Mary Poppins",
    "5.2",
    "Vice",
    "6.2",
    "Captain Marvel",
    "3.1",
    "A Star is Born",
    "9.7",
    "Creed 2",
    "7.1",
    "Mary Poppins",
    "10.0",
    "Vice",
    "8.0",
    "Captain Marvel",
    "0.1"
])