/**
 * Created by njporter10 on 8/12/16.
 */
var trafficLights = ['red','yellow','green'];
function BeachVisit(location,crowd,tide,temp){
    this.location = location;
    this.crowd = crowd;
    this.tide = tide;
    this.temp = temp;
}
var b1 = new BeachVisit("Santa Monica Beach", 'high', "large", '78f');
var b2 = new BeachVisit("Laguna Beach", 'medium', "small", '75f');
var b3 = new BeachVisit("Corona del Mar", 'high', "medium", '70f');
var b4 = new BeachVisit("Newport", 'low', "small", '81f');

var allBeachVists = [b1, b2, b3, b4];
function BeachPhotos(photos){
    this.photo = photo
}
var ph1 = new BeachPhotos("IMAGE1");
var ph2 = new BeachPhotos("IMAGE2");
var ph3 = new BeachPhotos("IMAGE3");

var allPhotos = [ph1,ph2,ph3];

function photoTakenHere(b1,ph1){
    if(b1 == true && ph1 == true){
        return true;
    }
}
//-----------------Modelling a house-------------
var myHouse = [ 'Living Room', 'Dining Room', 'Den', 'Bathroom', 'Bedroom', 'Hallway', 'Patio','Kitchen'];
function Room (name){ //name of the room
    this.name = name;
    this.connected = [];
    this.addRoom = function(room){ //adjacent connected rooms
        this.connected.push(room);
    }
}
//creating a few rooms
var kitchen = new Room("Kitchen");
var livingRM = new Romm("Living Room");
var diningRM = new Room("Dining Room");
var bedroom = new Room("Bedroom");
var bathroom = new Romm("Bathroom");

//connecting all the rooms as wanted
//<-> bathroom <-> bedroom <-> livingroom<-> Kitchen<-> dining room

kitchen.connected.push(livingRM,diningRM);
livingRM.connected.push(bedroom,kitchen);
bedroom.connected.push(bathroom,livingRM);
bathroom.connected.push(diningRM,bedroom);
diningRM.connected.push(kitchen,bathroom);

