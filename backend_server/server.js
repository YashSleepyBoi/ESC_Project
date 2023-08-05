// Setup for backend server
const express = require('express')
const cors = require('cors')
const app = express()
<<<<<<< Updated upstream
const port = 8383
let h_id=null
=======
const port = 8000

>>>>>>> Stashed changes
// const port = 8787

// Middleware to parse JSON data
app.use(express.json());

// Accessible from any link
app.use(
    cors({
        origin: "*",
    }),
);

// app.options('*', cors());
<<<<<<< Updated upstream

// TEST
app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})
app.get('/cors', (req, res) => {
    res.send('This has CORS enabled 🎈')
})

// Route to get search inputs
app.get('/input', (req, res) => {
    // Handle the GET request here and send a response
    const responseData = { message: 'This is the GET route for /input' };
    res.json(responseData);
  });

app.post('/input', (req, res) => {
    // Handle the incoming POST request here and send a response
    const inputData = req.body; // Access the data directly from req.body
    console.log('Received data:', inputData);
    // const curr = "SGD"

    // const dest_id = inputData["dest_id"];
    // // TODO: BOTH RETURN ONE DAY LATE
    // const check_in = inputData["check_in"].substring(0,10);
    // const check_out = inputData["check_in"].substring(0,10);

    // Calculate guests per room
    // const rooms = inputData["rooms"];
    // const eachguest = inputData["guests"];
    // let guests = eachguest;
    // function findguests() {
    //     for (let i=1; i<rooms; i++) {
    //         eachguest = parseInt(eachguest)
    //         guests=guests+(('|')+eachguest);
    //     }
        
    //     console.log( dest_id, check_in, check_out, guests);
    //     console.log(typeof dest_id, typeof check_in, typeof check_out, typeof guests);
    //     return guests;
    // }
    // guests = findguests()

    const dest_id = "RsBU";
    const check_in = "2023-10-01";
    const check_out = "2023-10-02";
    const guests = 1|1;

    // Assumed to be fixed
    const curr = "SGD";
    console.log(typeof dest_id, typeof check_in, typeof check_out, typeof guests);
    
    // Run search algorithm.
    fetchDataAsync(searchResults(dest_id,check_in,check_out,curr,guests));
    // console.log(results.id_list);
    // TODO: FETCH STATIC DATA 
    // fetchDataAsync2()
  
    // Process the data and send a response
    const responseData = { message: 'Data received successfully!' };
    res.json(responseData);
  });


app.get("/hotel/:id", async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*') // Any link
    const {id}=req.params
    const hotel_url = `https://hotelapi.loyalty.dev/api/hotels/${id}`;
    console.log(hotel_url)
    const u = hotel_url
    const rez = await fetch(u, {
        method: 'GET',
        credentials: 'same-origin'
    })

    let all_data = await rez.json();
    console.log(all_data)
    res.json(all_data)
})

app.post("/hotel/:id", async (req, res) => {
    h_id=req.params.id
    console.log(h_id)
    // res.redirect("/rooms/:id")
})

app.get("/rooms/:id", async (req, res) => {
    console.log(h_id)
    res.set('Access-Control-Allow-Origin', '*') // Any link
    const {id}=req.params
    
    const hotel_url = `https://hotelapi.loyalty.dev/api/hotels/${id}/price?destination_id=WD0M&checkin=2023-10-01&checkout=2023-10-07&lang=en_US&currency=SGD&country_code=SG&guests=2&partner_id=1`;
    const u = hotel_url
    const rez = await fetch(u, {
        method: 'GET',
        credentials: 'same-origin'
    })

    let all_data = await rez.json();
    res.json(all_data)
})

app.get("/room/:id", async (req, res) => {
    console.log(h_id)
    res.set('Access-Control-Allow-Origin', '*') // Any link
    const {id}=req.params
    
    const hotel_url = `https://hotelapi.loyalty.dev/api/hotels/${h_id}/price?destination_id=WD0M&checkin=2023-10-01&checkout=2023-10-07&lang=en_US&currency=SGD&country_code=SG&guests=2&partner_id=1`;
    const u = hotel_url
    const rez = await fetch(u, {
        method: 'GET',
        credentials: 'same-origin'
    })

    let all_data = await rez.json();
    res.json(all_data)
})

app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 8000');
  });




=======

// TEST
app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})
app.get('/cors', (req, res) => {
    res.send('This has CORS enabled 🎈')
})


// Route to get search inputs
app.get('/input', (req, res) => {
    // Handle the GET request here and send a response
    const responseData = { message: 'This is the GET route for /input' };
    console.log("SERVER.JS: INPUTS",responseData);
    res.json(responseData);
  });


// Set up the /api route to respond with the stored search data
app.get("/api", (req, res) => {
    // Respond with the stored search data
    res.json(searchData);
  });

  // Initialise for searchResults -- use firebase if have time
let searchData = {};
>>>>>>> Stashed changes

app.post('/input', (req, res) => {
    try {
        // Handle the incoming POST request here and send a response
        const inputData = req.body; // Access the data directly from req.body
        console.log('DATA RECEIVED ON SERVER:', inputData);

        const curr = "SGD"
        const dest_id = inputData["dest_id"];
        // TODO: timings are one day early
        const check_in = inputData["check_in"].substring(0,10);
        const check_out = inputData["check_out"].substring(0,10);
        // // Calculate guests per room
        const rooms = inputData["rooms"];
        const eachguest = inputData["guests"];
        
        function findguests() {
            guests = eachguest;
            for (let i=1; i<rooms; i++) {
                each = parseInt(eachguest)
                guests=guests+('|')+each;
            }
            return parseInt(guests);
        }
        guests = findguests()
    
        // const tes_destid = "RsBU";
        const tes_check_in = "2023-09-30";
        const tes_check_out = "2023-10-02";
        const tes_guests = 1|1;
    
        console.log( dest_id, check_in, check_out, guests);
        console.log( "TESTING", dest_id, tes_check_in, tes_check_out, tes_guests);
        // console.log(typeof dest_id, typeof check_in, typeof check_out, typeof guests);
        
        // Call the searchResults function
        searchResults(dest_id, tes_check_in, tes_check_out, curr, guests)
        .then(data => {
            // Update searchdata
            searchData = data;
            console.log("SERVER.JS: DATA POSTED TO /api", data);
            res.json(data);
        })
            .catch(error => {
                console.log("Error fetching data:", error);
            });
    }
    catch (error) {
        console.error('Error processing search:', error);
        res.status(500).json({error: 'Error processing search'});
    }
});

// NOT IDEAL, NOT IN USE
// First async function to fetch the data
async function fetchDataAsync(func) {
    func.then(data => {
<<<<<<< Updated upstream
        // post to localhost:8383/api
=======
        // post to /api
>>>>>>> Stashed changes
        app.get("/api", (req, res) => {
            //res.json(test_output)
            res.json(data)
        })
        return data;
    })
        .catch(error => {
            console.log("Error fetching data:", error);
        });
}

async function searchResults(destination_id, checkin, checkout, currency, num_guests) {
    const dest_prices = `https://hotelapi.loyalty.dev/api/hotels/prices?destination_id=${destination_id}&checkin=${checkin}&checkout=${checkout}&lang=en_US&currency=${currency}&landing_page=&partner_id=16&country_code=SG&guests=${num_guests}`;
    const url = dest_prices
    const response = await fetch(url, {
        method: 'GET',
        // mode: 'cors',
        credentials: 'same-origin'
    });
    let data = await response.json(); 
    data = data.hotels;
    //console.log(data);

    const hotel_url = `https://hotelapi.loyalty.dev/api/hotels?destination_id=${destination_id}`;
    const u = hotel_url
    const res = await fetch(u, {
        method: 'GET',
        credentials: 'same-origin'
    });
    let all_data = await res.json();

    hotelslist = [];
    idlist = [];
<<<<<<< Updated upstream
    const mapping = {"hotels": hotelslist, "id_list":idlist};
=======
    const mapping = {"hotels": hotelslist};
>>>>>>> Stashed changes
    for (let i = 0; i < all_data.length; i++) {
        let hotel1 = all_data[i];
        //console.log(hotel1);
        for (let x = 0; x < data.length; x++) {
            let hotel2 = data[x];
            
            if (hotel1.id == hotel2.id) {
                const obj = Object.assign(hotel1, hotel2)
                // idlist.push(obj.id);
                hotelslist.push(obj);
                //mapping[obj.id] = obj;
            }
        }
    }
<<<<<<< Updated upstream
    console.log("SHOW IDS",id_list);
=======
>>>>>>> Stashed changes
    return mapping;
}

function sendDataToLink(input, endpoint) {
    app.get(`/${endpoint}`, (req, res) => {
        res.send(input)
      })
    app.post(`/${endpoint}`, (req, res) => {
        let data = req.body;
        res.send(data)
      })
}

// Collate results
// let result = fetchDataAsync(searchResults(dest_id,check_in,check_out,curr,guests));

async function collateHotelInfo(hotel_id, destination_id, checkin, checkout, currency, num_guests) {
    // 3.2 price search for a given hotel
    const hotel_price = `https://hotelapi.loyalty.dev/api/hotels/${hotel_id}/price?destination_id=${destination_id}&checkin=${checkin}&checkout=${checkout}&lang=en_US&currency=${currency}&partner_id=16&country_code=SG&guests=${num_guests}`;
    const url = hotel_price
    const response = await fetch(url, {
        method: 'GET',
        credentials: 'same-origin'
    });
    let data = await response.json();

    // 3.4 static info for a given hotel
    const hotel_info = `https://hotelapi.loyalty.dev/api/hotels/${hotel_id}`;
    const u = hotel_info
    const res = await fetch(u, {
        method: 'GET',
        credentials: 'same-origin'
    });
    const all_data = await res.json();

    let infolist = Object.assign(data, all_data);
    console.log(typeof data + typeof all_data);
    return infolist;
}

async function fetchDataAsync2(func) {
    func.then(data => {
        // post to localhost:8383/api2
        app.get("/static", (req, res) => {
            //res.json(test_output)
            res.json(data)
        })
        return data;
    })
        .catch(error => {
            console.log("Error fetching data:", error);
        });
}

<<<<<<< Updated upstream




//   app.options('/input', cors(issue2options)); // enable preflight OPTIONS
//   router.post('/input', cors(issue2options), controller.sendContactForm);

// function sendDataToLink(input, endpoint) {
//     app.get(`/${endpoint}`, (req, res) => {
//         res.send(input)
//       })
//     app.post(`/${endpoint}`, (req, res) => {
//         let data = req.body;
//         res.send(data)
//       })
// }
// sendDataToLink("FUCK THIS SHIT", "input")


// Backtick ``
// app.listen(port, () => {console.log(`Server has started on port ${port}`)})
 
// TODO: Migrate input
// TEST PARAMETERS: 

// const dest_id = "RsBU";
// const check_in = "2023-10-01";
// const check_out = "2023-10-02";
// const guests = 10

// // Assumed to be fixed

/* Fetching data from API endpoints */

// // First async function to fetch the data
// async function fetchDataAsync(func) {
//     func.then(data => {
//         // post to localhost:8000/api
//         app.get("/api", (req, res) => {
//             res.set('Access-Control-Allow-Origin', '*') // Any link
//             res.json(data)
//         })
//         return data;
//     })
//         .catch(error => {
//             console.log("Error fetching data:", error);
//         });
// }

// async function searchResults(destination_id, checkin, checkout, currency, num_guests) {
//     const dest_prices = `https://hotelapi.loyalty.dev/api/hotels/prices?destination_id=${destination_id}&checkin=${checkin}&checkout=${checkout}&lang=en_US&currency=${currency}&landing_page=&partner_id=16&country_code=SG&guests=${num_guests}`;
//     const url = dest_prices
//     const response = await fetch(url, {
//         method: 'GET',
//         credentials: 'same-origin'
//     });
//     let data = await response.json(); 
//     data = data.hotels;
//     //console.log(data);

//     const hotel_url = `https://hotelapi.loyalty.dev/api/hotels?destination_id=${destination_id}`;
//     const u = hotel_url
//     const res = await fetch(u, {
//         method: 'GET',
//         credentials: 'same-origin'
//     });
//     let all_data = await res.json();

//     hotelslist = [];
//     const mapping = {"hotels": hotelslist};
//     for (let i = 0; i < all_data.length; i++) {
//         let hotel1 = all_data[i];
//         //console.log(hotel1);
//         for (let x = 0; x < data.length; x++) {
//             let hotel2 = data[x];
            
//             if (hotel1.id == hotel2.id) {
//                 const obj = Object.assign(hotel1, hotel2)
//                 hotelslist.push(obj);
//                 //mapping[obj.id] = obj;
//             }
//         }
//     }
//     //console.log(mapping);
//     return mapping;
// }

// // Collate results
// // let result = fetchDataAsync(searchResults(dest_id,check_in,check_out,curr,guests));

// async function collateHotelInfo(hotel_id, destination_id, checkin, checkout, currency, num_guests) {
//     // 3.2 price search for a given hotel
//     const hotel_price = `https://hotelapi.loyalty.dev/api/hotels/${hotel_id}/price?destination_id=${destination_id}&checkin=${checkin}&checkout=${checkout}&lang=en_US&currency=${currency}&partner_id=16&country_code=SG&guests=${num_guests}`;
//     const url = hotel_price
//     const response = await fetch(url, {
//         method: 'GET',
//         credentials: 'same-origin'
//     });
//     let data = await response.json();

//     // 3.4 static info for a given hotel
//     const hotel_info = `https://hotelapi.loyalty.dev/api/hotels/${hotel_id}`;
//     const u = hotel_info
//     const res = await fetch(u, {
//         method: 'GET',
//         credentials: 'same-origin'
//     });
//     const all_data = await res.json();

//     let infolist = Object.assign(data, all_data);
//     console.log(typeof data + typeof all_data);
//     return infolist;
// }

// async function fetchDataAsync2(func) {
//     func.then(data => {
//         // post to localhost:8383/api2
//         app.get("/api2", (req, res) => {
//             //res.json(test_output)
//             res.json(data)
//         })
//         return data;
//     })
//         .catch(error => {
//             console.log("Error fetching data:", error);
//         });
// }

// WHEN 'BOOK NOW" IS CLICKED: replace "0vcz" with hotel id
// fetchDataAsync2(collateHotelInfo("0vcz",dest_id,check_in,check_out,curr,guests));




=======
// Start the server at the end
app.listen(port, function () {
    console.log(`CORS-enabled web server listening on port ${port}`);
});
>>>>>>> Stashed changes








