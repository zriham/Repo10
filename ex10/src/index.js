function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "New Artist",
            title: "New Album",
            release_year: 2021,
            formats: {
                1: "New format 1",
                2: "New format 2",
                3: "New format 3"
            },
            gold: false
        }
    };

}

myFunction()[2];
module.exports = myFunction;