const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
var cors = require('cors')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/myUserDB');


app.use(cors({
    origin: "http://localhost:4200"
}));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send("Hello World");
})

app.get('/about',function(req,res){
    res.send("About Page");
})

app.get('/myjson',function(req,res){
    res.json([
        {
            "id": "13",
            "createdAt": "2019-06-24T20:10:05.613Z",
            "title": "Investor Data Strategist",
            "coverImage": "http://lorempixel.com/640/480/people",
            "description": "Borders Philippines revolutionize",
            "author": "Ashlee16",
            "department": "Direct Mobility Architect",
            "ISBN": "b",
            "price": "829.00",
            "ratting": 45726
        },
        {
            "id": "15",
            "createdAt": "2019-06-25T02:39:48.318Z",
            "title": "Direct Accountability Director",
            "coverImage": "http://lorempixel.com/640/480/city",
            "description": "value-added navigate",
            "author": "Ronaldo.Schuppe",
            "department": "Future Division Producer",
            "ISBN": "v",
            "price": "82.00",
            "ratting": 46061
        },
        {
            "id": "16",
            "createdAt": "2019-06-25T08:26:25.821Z",
            "title": "Product Directives Director",
            "coverImage": "http://lorempixel.com/640/480/cats",
            "description": "Forward",
            "author": "Janick.Grant",
            "department": "Forward Configuration Manager",
            "ISBN": "3",
            "price": "182.00",
            "ratting": 82920
        },
        {
            "id": "17",
            "createdAt": "2019-06-24T16:31:45.480Z",
            "title": "Principal Usability Technician",
            "coverImage": "http://lorempixel.com/640/480/animals",
            "description": "Incredible Cotton Car Music well-modulated",
            "author": "Emilia_Lindgren92",
            "department": "Central Brand Associate",
            "ISBN": "o",
            "price": "329.00",
            "ratting": 87070
        },
        {
            "id": "18",
            "createdAt": "2019-06-25T03:10:40.988Z",
            "title": "Dynamic Communications Administrator",
            "coverImage": "http://lorempixel.com/640/480/nightlife",
            "description": "withdrawal SQL Chair",
            "author": "Deshaun49",
            "department": "District Identity Producer",
            "ISBN": "j",
            "price": "330.00",
            "ratting": 66221
        },
        {
            "id": "19",
            "createdAt": "2019-06-25T03:41:43.688Z",
            "title": "Lead Integration Producer",
            "coverImage": "http://lorempixel.com/640/480/animals",
            "description": "Personal Loan Account",
            "author": "Theodore6",
            "department": "Customer Usability Agent",
            "ISBN": "r",
            "price": "558.00",
            "ratting": 29408
        },
        {
            "id": "20",
            "createdAt": "2019-06-24T21:52:54.601Z",
            "title": "Chief Response Director",
            "coverImage": "http://lorempixel.com/640/480/technics",
            "description": "Alabama Benin capacitor",
            "author": "Maverick_Graham",
            "department": "Lead Mobility Liaison",
            "ISBN": "v",
            "price": "492.00",
            "ratting": 94208
        },
        {
            "id": "21",
            "createdAt": "2019-06-25T04:53:49.221Z",
            "title": "Product Markets Executive",
            "coverImage": "http://lorempixel.com/640/480/sports",
            "description": "XSS",
            "author": "Braxton90",
            "department": "Forward Research Orchestrator",
            "ISBN": "8",
            "price": "760.00",
            "ratting": "89876"
        },
        {
            "id": "22",
            "createdAt": "2019-06-25T06:42:43.338Z",
            "title": "Forward Paradigm Strategist",
            "coverImage": "http://lorempixel.com/640/480/nature",
            "description": "Intelligent Fresh Ball",
            "author": "Alejandrin95",
            "department": "Regional Operations Technician",
            "ISBN": "f",
            "price": "181.00",
            "ratting": 38943
        },
        {
            "id": "23",
            "createdAt": "2019-06-24T16:43:37.611Z",
            "title": "Principal Group Administrator",
            "coverImage": "http://lorempixel.com/640/480/animals",
            "description": "backing up Forward invoice",
            "author": "Leola.Schinner23",
            "department": "Human Paradigm Coordinator",
            "ISBN": "h",
            "price": "293.00",
            "ratting": 84506
        },
        {
            "id": "24",
            "createdAt": "2019-06-25T00:58:57.254Z",
            "title": "Direct Response Supervisor",
            "coverImage": "http://lorempixel.com/640/480/nature",
            "description": "firewall Baht deposit",
            "author": "Tyra.Balistreri48",
            "department": "Dynamic Paradigm Officer",
            "ISBN": "s",
            "price": "550.00",
            "ratting": 65678
        },
        {
            "id": "25",
            "createdAt": "2019-06-25T03:40:28.622Z",
            "title": "Human Brand Representative",
            "coverImage": "http://lorempixel.com/640/480/food",
            "description": "silver",
            "author": "Kory.Murazik19",
            "department": "Product Operations Engineer",
            "ISBN": "l",
            "price": "496.00",
            "ratting": 55945
        },
        {
            "id": "26",
            "createdAt": "2019-06-25T05:58:45.455Z",
            "title": "Customer Markets Developer",
            "coverImage": "http://lorempixel.com/640/480/animals",
            "description": "infomediaries microchip",
            "author": "Rodolfo57",
            "department": "Internal Program Engineer",
            "ISBN": "o",
            "price": "99.00",
            "ratting": 75941
        },
        {
            "id": "27",
            "createdAt": "2019-06-24T10:20:58.556Z",
            "title": "Corporate Program Assistant",
            "coverImage": "http://lorempixel.com/640/480/technics",
            "description": "bifurcated",
            "author": "Lisa24",
            "department": "Forward Brand Representative",
            "ISBN": "2",
            "price": "60.00",
            "ratting": 81768
        },
        {
            "id": "28",
            "createdAt": "2019-06-25T04:45:37.698Z",
            "title": "Legacy Integration Facilitator",
            "coverImage": "http://lorempixel.com/640/480/people",
            "description": "help-desk Frozen",
            "author": "Bradley.Heidenreich",
            "department": "Lead Division Architect",
            "ISBN": "a",
            "price": "634.00",
            "ratting": 32436
        },
        {
            "id": "29",
            "createdAt": "2019-06-24T20:37:40.879Z",
            "title": "District Intranet Associate",
            "coverImage": "http://lorempixel.com/640/480/nature",
            "description": "SCSI quantify Intelligent",
            "author": "Otha_Casper8",
            "department": "Human Intranet Planner",
            "ISBN": "a",
            "price": "456.00",
            "ratting": 31328
        },
        {
            "id": "30",
            "createdAt": "2019-06-24T11:29:38.325Z",
            "title": "Legacy Assurance Strategist",
            "coverImage": "http://lorempixel.com/640/480/sports",
            "description": "envisioneer Tanzania",
            "author": "Graciela.Green0",
            "department": "Legacy Infrastructure Agent",
            "ISBN": "i",
            "price": "114.00",
            "ratting": 64327
        },
        {
            "id": "31",
            "createdAt": "2019-06-24T12:49:10.095Z",
            "title": "Forward Functionality Specialist",
            "coverImage": "http://lorempixel.com/640/480/nightlife",
            "description": "focus group",
            "author": "Paul72",
            "department": "Direct Research Planner",
            "ISBN": "m",
            "price": "967.00",
            "ratting": 78090
        },
        {
            "id": "32",
            "createdAt": "2019-06-25T01:54:57.234Z",
            "title": "Dynamic Tactics Planner",
            "coverImage": "http://lorempixel.com/640/480/animals",
            "description": "Prairie",
            "author": "Chaim_Kshlerin41",
            "department": "Direct Paradigm Technician",
            "ISBN": "l",
            "price": "683.00",
            "ratting": 11109
        },
        {
            "id": "33",
            "createdAt": "2019-06-25T09:36:21.492Z",
            "title": "Dynamic Markets Technician",
            "coverImage": "http://lorempixel.com/640/480/animals",
            "description": "migration firewall",
            "author": "Alena_Pacocha36",
            "department": "Investor Data Consultant",
            "ISBN": "f",
            "price": "229.00",
            "ratting": 56394
        },
        {
            "id": "34",
            "createdAt": "2019-06-25T06:44:42.746Z",
            "title": "Corporate Intranet Officer",
            "coverImage": "http://lorempixel.com/640/480/nightlife",
            "description": "Planner Soft Personal Loan Account",
            "author": "Joanny_Schumm",
            "department": "Lead Research Assistant",
            "ISBN": "d",
            "price": "952.00",
            "ratting": 80032
        },
        {
            "id": "35",
            "createdAt": "2019-06-24T11:45:53.326Z",
            "title": "Lead Assurance Director",
            "coverImage": "http://lorempixel.com/640/480/people",
            "description": "wireless action-items Brand",
            "author": "Gladyce.McKenzie",
            "department": "National Usability Producer",
            "ISBN": "0",
            "price": "766.00",
            "ratting": 627
        },
        {
            "id": "36",
            "createdAt": "2019-06-25T06:34:08.708Z",
            "title": "Dynamic Quality Agent",
            "coverImage": "http://lorempixel.com/640/480/abstract",
            "description": "task-force Center",
            "author": "Karolann23",
            "department": "Dynamic Assurance Assistant",
            "ISBN": "k",
            "price": "809.00",
            "ratting": 15887
        },
        {
            "0": {
                "title": null,
                "author": null,
                "department": null,
                "imageURL": null
            },
            "id": "37",
            "createdAt": "2019-06-25T12:33:07.054Z",
            "title": "Future Accountability Producer",
            "coverImage": "http://lorempixel.com/640/480/nature",
            "description": "Fresh Berkshire",
            "author": "Dashawn_Wilkinson79",
            "department": "Customer Group Strategist",
            "ISBN": "8",
            "price": "460.00",
            "ratting": 21574
        },
        {
            "0": {
                "title": "a",
                "author": "a",
                "department": "a",
                "imageURL": "a"
            },
            "id": "38",
            "createdAt": "2019-06-25T23:30:29.542Z",
            "title": "Regional Configuration Strategist",
            "coverImage": "http://lorempixel.com/640/480/abstract",
            "description": "Director Identity",
            "author": "Timothy68",
            "department": "Principal Accountability Technician",
            "ISBN": "i",
            "price": "83.00",
            "ratting": 76434
        },
        {
            "0": {
                "title": "JavaScript",
                "author": "Suhadev",
                "department": "Computer Science",
                "imageURL": null
            },
            "id": "39",
            "createdAt": "2019-06-26T04:24:00.894Z",
            "title": "Dynamic Accountability Liaison",
            "coverImage": "http://lorempixel.com/640/480/fashion",
            "description": "fuchsia Up-sized Personal Loan Account",
            "author": "Augusta29",
            "department": "Principal Web Executive",
            "ISBN": "k",
            "price": "440.00",
            "ratting": 22012
        },
        {
            "id": "42",
            "createdAt": "2019-06-26T01:05:58.155Z",
            "title": "React Js",
            "coverImage": "http://lorempixel.com/640/480/cats",
            "description": "React tutorials",
            "author": "Suahdev",
            "department": "CS",
            "ISBN": "n",
            "price": "89",
            "ratting": "40945",
            "imageURL": null
        },
        {
            "id": "45",
            "createdAt": "2019-07-04T22:26:59.648Z",
            "title": "Dhiraj's Book",
            "coverImage": "https://placehold.it/500x500",
            "description": "Better don't check out this book for better understanding!!:)",
            "author": "dhee",
            "department": "Full Stack Development",
            "ISBN": "dd",
            "price": "10000000",
            "ratting": "10"
        },
        {
            "id": "47",
            "createdAt": "2019-07-06T06:19:36.005Z",
            "title": null,
            "coverImage": "http://lorempixel.com/640/480/abstract",
            "description": null,
            "author": null,
            "department": null,
            "ISBN": "f",
            "price": null,
            "ratting": 23978,
            "imageURL": null
        },
        {
            "id": "48",
            "createdAt": "2019-07-06T01:30:56.400Z",
            "title": "JS tutorials",
            "coverImage": "http://lorempixel.com/640/480/cats",
            "description": null,
            "author": null,
            "department": null,
            "ISBN": "l",
            "price": null,
            "ratting": 75309,
            "imageURL": null
        },
        {
            "id": "49",
            "createdAt": "2019-07-12T06:00:21.087Z",
            "title": "EEE",
            "coverImage": "BFN",
            "description": null,
            "author": "HK",
            "department": "Central Data Assistant",
            "ISBN": "c",
            "price": "873.00",
            "ratting": 82582,
            "isbn": "4567"
        },
        {
            "id": "50",
            "createdAt": "2019-07-12T06:02:17.326Z",
            "title": "sweet memories",
            "coverImage": null,
            "description": null,
            "author": "hk",
            "department": "Dynamic Infrastructure Engineer",
            "ISBN": "j",
            "price": "174.00",
            "ratting": 39658,
            "isbn": null
        },
        {
            "id": "51",
            "createdAt": "2019-07-13T02:42:41.506Z",
            "title": "hrrr",
            "coverImage": null,
            "description": null,
            "author": "dsdvfbnfn",
            "department": "Customer Operations Supervisor",
            "ISBN": "6",
            "price": "462.00",
            "ratting": 13100,
            "isbn": "123"
        },
        {
            "id": "52",
            "createdAt": "2019-07-13T22:12:13.777Z",
            "title": "my dreams",
            "coverImage": "fsdgsfgdfb",
            "description": null,
            "author": "hk",
            "department": "Lead Configuration Assistant",
            "ISBN": "3",
            "price": "544.00",
            "ratting": 47044,
            "isbn": null
        },
        {
            "id": "53",
            "createdAt": "2019-07-14T14:41:24.233Z",
            "title": "hk",
            "coverImage": null,
            "description": null,
            "author": "hii",
            "department": "Product Identity Supervisor",
            "ISBN": "0",
            "price": "802.00",
            "ratting": 7774,
            "isbn": null
        }
    ])
})

app.post('/form',function(req,res){
    console.log(req.body);
    res.json(req.body);
})
app.put('/users/:id',function(req,res){
    console.log(req.params.id);
    console.log(req.body);
    res.json(req.body);
})

app.delete('/users/:id',function(req,res){
    res.json({
        "message" : "Deleted"
    })
});
app.listen(8000);
