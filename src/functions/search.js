export default async function callSearchAPI(keywords, searchTypes, callBackFunction){
    const body = {
        "keywords":keywords,
        "movies":searchTypes.movies ?? false,
        "books":searchTypes.books ?? false,
        "songs":searchTypes.songs ?? false
    }
    const searchResults = await fetch("/api/search",
    {
        method:"POST",
        headers: {
            'Content-Type':"application/json"
        },
        body: JSON.stringify(body)
    });
    const searchResultsJSON = await searchResults.json();
    callBackFunction(searchResultsJSON);
}

// export default async function callSearchAPI(x,y,callBackFunction){
//     callBackFunction({
//     "imdb": [
//       {
//         "image": "https://m.media-amazon.com/images/M/MV5BMjM0MjgyOTQ4NF5BMl5BanBnXkFtZTgwOTQ1NzQ3MTE@._V1_Ratio0.7273_AL_.jpg",
//         "title": "America: Imagine the World Without Her",
//         "year": "2014",
//         "link": "https://www.imdb.com/title/tt2785390",
//         "text": "A story that questions the shaming of the US through revisionist history, lies and omissions by educational institutions, political organizations, Alinsky, Barack Obama, Hillary Clinton and other progressives to destroy America."
//       },
//       {
//         "image": "https://m.media-amazon.com/images/M/MV5BODE0MjA5NTktZDA0MC00YWEwLThiNmYtM2ExZDZjMmVkNjIwXkEyXkFqcGdeQXVyMTkyMTUwNzA@._V1_Ratio0.7273_AL_.jpg",
//         "title": "America",
//         "year": "2022",
//         "link": "https://www.imdb.com/title/tt12252488",
//         "text": "An Israeli swimming tutor living in Chicago returns to Israel after 10 years of absence to bury his father. An encounter with a beloved childhood friend and his newly engaged girlfriend will set a series of events in motion that w..."
//       },
//       {
//         "image": "https://m.media-amazon.com/images/M/MV5BNjlmZmQ0ZGUtNTBjYy00ZTg3LWE1NmMtNDAyNDI2Zjc4ZDViXkEyXkFqcGdeQXVyMzIwNDY4NDI@._V1_Ratio0.7273_AL_.jpg",
//         "title": "Lamerica",
//         "year": "1994",
//         "link": "https://www.imdb.com/title/tt0110299",
//         "text": "Immediately after the fall of communism in Albania, two Italians go there to embezzle investment money by creating a fake company. As the chairman/fall guy, they pick a former political prisoner who turns out to be more than meets..."
//       },
//       {
//         "image": "https://m.media-amazon.com/images/M/MV5BMjI5NjM5MjIyNF5BMl5BanBnXkFtZTgwNjg2MTUxMDE@._V1_Ratio0.7273_AL_.jpg",
//         "title": "American Graffiti",
//         "year": "1973",
//         "link": "https://www.imdb.com/title/tt0069704",
//         "text": "A group of teenagers in California's central valley spend one final night after their 1962 high school graduation cruising the strip with their buddies before they pursue their varying goals... Read all"
//       },
//       {
//         "image": "https://m.media-amazon.com/images/M/MV5BMTg3ODY5ODI1NF5BMl5BanBnXkFtZTgwMTkxNTYxMTE@._V1_Ratio0.7273_AL_.jpg",
//         "title": "American Pie",
//         "year": "1999",
//         "link": "https://www.imdb.com/title/tt0163651",
//         "text": "Four teenage boys enter a pact to lose their virginity by prom night."
//       },
//       {
//         "image": "https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7273_AL_.jpg",
//         "title": "American Psycho",
//         "year": "2000",
//         "link": "https://www.imdb.com/title/tt0144084",
//         "text": "It's the late 1980s. Twenty-seven year old Wall Streeter Patrick Bateman travels among a closed network of the proverbial beautiful people, that closed network in only they able to allow others like themselves in in a feeling of superiority. Patrick has a routinized morning regimen to maintain his appearance of attractiveness and fitness. He, like those in his network, are vain, narcissistic, egomaniacal and competitive, always having to one up everyone else in that presentation of oneself, but he, unlike the others, realizes that, for himself, all of these are masks to hide what is truly underneath, someone/something inhuman in nature. In other words, he is comprised of a shell resembling a human that contains only greed and disgust, greed in wanting what others may have, and disgust for those who do not meet his expectations and for himself in not being the first or the best. That disgust ends up manifesting itself in wanting to rid the world of those people, he not seeing them as people but only of those characteristics he wants to rid."
//       }
//     ],
//     "googleBooks": [
//       {
//         "title": "America (the Book): A Citizen's Guide to Democracy Inaction",
//         "year": "2004",
//         "author": "Daily Show Writers",
//         "link": "http://books.google.com/books?id=uLQHz9m0k-IC",
//         "image": "http://books.google.com/books/content?id=uLQHz9m0k-IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//         "pageCount": "242",
//         "text": "The host of the award-winning humorous news program offers tongue-in-cheek insight into American democracy with coverage of such topics as the republican qualities of ancient Rome, the antics of our nation's founders, and the ludicrous nature of today's media."
//       },
//       {
//         "title": "The Next America: Boomers, Millennials, and the Looming Generational Showdown",
//         "year": "2016",
//         "author": "Paul Taylor",
//         "link": "http://books.google.com/books?id=rbS6CgAAQBAJ",
//         "image": "http://books.google.com/books/content?id=rbS6CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//         "pageCount": "384",
//         "text": "The America of the near future will look nothing like the America of the recent past. America is in the throes of a demographic overhaul. Huge generation gaps have opened up in our political and social values, our economic well-being, our family structure, our racial and ethnic identity, our gender norms, our religious affiliation, and our technology use. Today's Millennials -- well-educated, tech savvy, underemployed twenty-somethings -- are at risk of becoming the first generation in American history to have a lower standard of living than their parents. Meantime, more than 10,000 Baby Boomers are retiring every single day, most of them not as well prepared financially as they'd hoped. This graying of our population has helped polarize our politics, put stresses on our social safety net, and presented our elected leaders with a daunting challenge: How to keep faith with the old without bankrupting the young and starving the future. Every aspect of our demography is being fundamentally transformed. By mid-century, the population of the United States will be majority non-white and our median age will edge above 40 -- both unprecedented milestones. But other rapidly-aging economic powers like China, Germany, and Japan will have populations that are much older. With our heavy immigration flows, the US is poised to remain relatively young. If we can get our spending priorities and generational equities in order, we can keep our economy second to none. But doing so means we have to rebalance the social compact that binds young and old. In tomorrow's world, yesterday's math will not add up. Drawing on Pew Research Center's extensive archive of public opinion surveys and demographic data, The Next America is a rich portrait of where we are as a nation and where we're headed -- toward a future marked by the most striking social, racial, and economic shifts the country has seen in a century."
//       },
//       {
//         "title": "The Scrambled States of America",
//         "year": "2002",
//         "author": "Laurie Keller",
//         "link": "http://books.google.com/books?id=413SkybJWc8C",
//         "image": "http://books.google.com/books/content?id=413SkybJWc8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//         "pageCount": "40",
//         "text": "The states become bored with their positions on the map and decide to change places for a while, in a story that includes facts about the states."
//       },
//       {
//         "title": "American Nations: A History of the Eleven Rival Regional Cultures of North America",
//         "year": "2012",
//         "author": "Colin Woodard",
//         "link": "http://books.google.com/books?id=Oc5VDwAAQBAJ",
//         "image": "http://books.google.com/books/content?id=Oc5VDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//         "pageCount": "400",
//         "text": "• A New Republic Best Book of the Year • The Globalist Top Books of the Year • Winner of the Maine Literary Award for Non-fiction • Particularly relevant in understanding who voted for who in this presidential election year, this is an endlessly fascinating look at American regionalism and the eleven “nations” that continue to shape North America According to award-winning journalist and historian Colin Woodard, North America is made up of eleven distinct nations, each with its own unique historical roots. In American Nations he takes readers on a journey through the history of our fractured continent, offering a revolutionary and revelatory take on American identity, and how the conflicts between them have shaped our past and continue to mold our future. From the Deep South to the Far West, to Yankeedom to El Norte, Woodard (author of American Character: A History of the Epic Struggle Between Individual Liberty and the Common Good) reveals how each region continues to uphold its distinguishing ideals and identities today, with results that can be seen in the composition of the U.S. Congress or on the county-by-county election maps of any hotly contested election in our history."
//       },
//       {
//         "title": "America Is...",
//         "year": "2005",
//         "author": "Louise Borden",
//         "link": "http://books.google.com/books?id=vsK9wAEACAAJ",
//         "image": "http://books.google.com/books/content?id=vsK9wAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//         "pageCount": "40",
//         "text": "What is America? It is fifty states from the Atlantic coast to the Pacific Ocean and beyond. It is a flag of stars and stripes. It is farmers, miners, factory workers, bakers, and bankers. It is Niagara Falls and the Grand Canyon, swamps and desert. It is the stories of all of us, told together."
//       }
//     ],
//     "spotify": [
//       {
//         "title": "AMERICA HAS A PROBLEM",
//         "year": "2022-07-29",
//         "artist": "Beyoncé",
//         "link": "https://open.spotify.com/track/2XMAWynSTIst5KmLSv0Npf",
//         "image": "https://i.scdn.co/image/ab67616d0000b2730e58a0f8308c1ad403d105e7",
//         "album": "RENAISSANCE"
//       },
//       {
//         "title": "American Pie",
//         "year": "1971",
//         "artist": "Don McLean",
//         "link": "https://open.spotify.com/track/1fDsrQ23eTAVFElUMaf38X",
//         "image": "https://i.scdn.co/image/ab67616d0000b2730085dd4362653ef4c54ebbeb",
//         "album": "American Pie"
//       },
//       {
//         "title": "American Kids",
//         "year": "2014-09-22",
//         "artist": "Kenny Chesney",
//         "link": "https://open.spotify.com/track/1dgWTMoHwTUnQhOQ8SR5fV",
//         "image": "https://i.scdn.co/image/ab67616d0000b2730dafd3fe4c2795f4ffb5a2ea",
//         "album": "The Big Revival"
//       },
//       {
//         "title": "American Boy",
//         "year": "2008-03-28",
//         "artist": "Estelle",
//         "link": "https://open.spotify.com/track/22UDw8rSfLbUsaAGTXQ4Z8",
//         "image": "https://i.scdn.co/image/ab67616d0000b273b0b30ef77be3523c8018810c",
//         "album": "Shine"
//       },
//       {
//         "title": "American Girl",
//         "year": "1976-11-09",
//         "artist": "Tom Petty and the Heartbreakers",
//         "link": "https://open.spotify.com/track/7MRyJPksH3G2cXHN8UKYzP",
//         "image": "https://i.scdn.co/image/ab67616d0000b2737e42a53ea7f2ad4f36ab23a5",
//         "album": "Tom Petty & The Heartbreakers"
//       }
//     ]
//   })
// }