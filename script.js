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


//----------------Search Algorithm-------------
// it will need a DEFAULT condition and a GOAL condition
//it will then evaluate each option it can take(starting w/ the default) until it
//eventually achieves the goal condition

//--------Frontier Search Algorithm-----------
// Each node has: its data, a set of connected nodes, & a path ( a list of connected nodes)

//        Path: a list of nodes
//can be modified to include more methods/fields
function Path(){
    this.contents = [];
}

//           Nodes
// has a LIST of other connected nodes and CONTENT,
// it can search all descendant nodes to find a solition
function Node(c){
    this.contents = c;
    this.children = [];
}


// HELPER FUNCTION1 - helps pick a path to check from list
//INPUT is a list of paths
//OUTPUT is a single path
//EFFECT :select & remove path, return that path
//NOTE: ypu can modify the position of the position assignment to change the Search Strategy;

function pickPath(f){
    var position = o;
    var ret = f[position];
    f.splice(position,1);
    return ret;
}


//   HELPER FUNCTION2 - checks if the last node in the path is a solution
// One of the function inputs provides the solution
//INPUT - a path, node contents that have solution,<same data type as Node's container
//OUTPUT - Boolean 
//EFFECT - outputs True if path contains GOAL

function hasGoal(s,p){
    for(i in p.contents){
        if(p.contents[i] == s){
            return true;
        }
        else{
            return false;
        }
    }
}


//  MAIN ALGORITHM
function search(query,start){
    var frontier = []; //frontier = new array of nodes
    
    p = new Path; //creates a new Path and put the start node in it
    p.contents.push(start);
    
    frontier.push(p); //puts the new Path into the frontier
    
    while(frontier.length > 0){  
        //select and remove a path from frontier
        pick = pickPath(frontier); //pickPath helper fn
        
        //if node sk is a goal, return selected Path
        if(hasGoal(query,pick)){
            return pick;
        }
        else{
            size = pick.contents.length;
            last = pick.contents[size - 1];
            
            for(n in last.children){
                toAdd = newPath();
                for(x in pick.contents){
                    toAdd.contents.push(last.children[n]);
                    frontier.push(toAdd);
                }
            }
        }
    }
    return false;
}