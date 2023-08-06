// Setup for backend server
const express = require('express')
const cors = require('cors')
const app = express()

// const port = 8787

// app.use(express.urlencoded({extended:false}));
// Accessible from any link
app.use(
    cors({
        origin: "*",
    }),
);


app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 8000')
  })

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

const dest_id = "RsBU";
const check_in = "2023-10-01";
const check_out = "2023-10-02";
const guests = 10

// Assumed to be fixed
const curr = "SGD";

/* Fetching data from API endpoints */

// First async function to fetch the data
async function fetchDataAsync(func) {
    func.then(data => {
        // post to localhost:8000/api
        app.get("/api", (req, res) => {
            res.set('Access-Control-Allow-Origin', '*') // Any link
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
    const mapping = {"hotels": hotelslist};
    for (let i = 0; i < all_data.length; i++) {
        let hotel1 = all_data[i];
        //console.log(hotel1);
        for (let x = 0; x < data.length; x++) {
            let hotel2 = data[x];
            
            if (hotel1.id == hotel2.id) {
                const obj = Object.assign(hotel1, hotel2)
                hotelslist.push(obj);
                //mapping[obj.id] = obj;
            }
        }
    }
    //console.log(mapping);
    return mapping;
}

// Collate results
let result = fetchDataAsync(searchResults(dest_id,check_in,check_out,curr,guests));

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
        app.get("/api2", (req, res) => {
            //res.json(test_output)
            res.json(data)
        })
        return data;
    })
        .catch(error => {
            console.log("Error fetching data:", error);
        });
}

async function fetchDataAsyncDisplay(func) {
    func.then(data => {
        // post to localhost:8383/display
        app.get("/display", (req, res) => {
            //res.json(test_output)
            // res.set("Access-Control-Allow-Origin","*")
            res.json(data)
        })
        return data;
    })
        .catch(error => {
            console.log("Error fetching data:", error);
        });
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

// WHEN 'BOOK NOW" IS CLICKED: replace "0vcz" with hotel id
fetchDataAsync2(collateHotelInfo("0vcz",dest_id,check_in,check_out,curr,guests));

fetchDataAsyncDisplay(searchResults("RsBU",dest_id,check_in,check_out,curr,guests));










