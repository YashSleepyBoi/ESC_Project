// Setup for backend server
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
let h_id=null

// Middleware to parse JSON data
app.use(express.json()); 

// Accessible from any link
app.use(
    cors({
        origin: "*",
    }),
);

// Route to get search inputs
app.get('/input', (req, res) => {
    // Handle the GET request here and send a response
    const responseData = { message: 'This is the GET route for /input' };
    console.log("SERVER.JS: INPUTS",responseData);
    res.json(responseData);
  });


let isProcessing = false;
let searchData = {};
// Set up the /api route to respond with the stored search data
app.get("/api", (req, res) => {
    // Respond with the stored search data
    res.json(searchData);
  });

// Route to clear data in /api
app.post('/clear', (req, res) => {
  searchData = {}; // Clear the search data
  isProcessing = false; // Reset processing flag
  console.log('Data cleared in /api');
  res.status(200).json({ message: 'Data cleared' });
});

// Route to access inputs from lowergrid
app.post('/input', (req, res) => {
    if (isProcessing) {
        return res.status(400).json({ message: 'Processing in progress' });
    }
    isProcessing = true;
    
    try {
        const inputData = req.body; // Access the data directly from req.body
        console.log('DATA RECEIVED ON SERVER:', inputData);

        const curr = "SGD"
        const dest_id = inputData["dest_id"];
        const check_in = inputData["check_in"].substring(0,10);
        const check_out = inputData["check_out"].substring(0,10);
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
        console.log( dest_id, check_in, check_out, guests);
        
        // Call the searchResults function
        searchResults(dest_id, check_in, check_out, curr, guests)
        .then(data => {
            // Update searchdata
            searchData = data;
            console.log("SERVER.JS: DATA POSTED TO /api", data);
            res.json(data);
        })
            .catch(error => {
                console.log("Error fetching data:", error);
            });
        // Reset the flag once processing is complete
        isProcessing = false;
    } catch (error) {
        isProcessing = false;
        console.error('Error processing search:', error);
        res.status(500).json({ error: 'Error processing search' });
    }
});

// Send status to lowergrid
app.get('/status', (req, res) => {
    res.json({ isProcessing });
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

// Return search results in mapping.hotels
async function searchResults(destination_id, checkin, checkout, currency, num_guests) {

    try {
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
    startDate = checkin.toString();
    endDate = checkout.toString();


    const mapping = {"startdate": startDate, "enddate": endDate, "hotels": hotelslist};
    for (let i = 0; i < all_data.length; i++) {
        let hotel1 = all_data[i];
        for (let x = 0; x < data.length; x++) {
            let hotel2 = data[x];
            
            if (hotel1.id == hotel2.id) {
                const obj = Object.assign(hotel1, hotel2)
                hotelslist.push(obj);
            }
        }
    }
    console.log(url);
    return mapping;
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        return {
            startdate: checkin,
            enddate: checkout,
            hotels: []
        };
    }
}

module.exports = { searchResults };

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

app.get("/features", async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*') // Any link
    
    const hotel_url = "https://hotelapi.loyalty.dev/api/hotels?destination_id=RsBU";
    const u = hotel_url
    const rez = await fetch(u, {
        method: 'GET',
        credentials: 'same-origin'
    })

    let all_data = await rez.json();
    res.json(all_data)
})

// Start the server at the end
app.listen(port, function () {
});

console.log(`CORS-enabled web server listening on port ${port}`);


