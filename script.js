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

function photoTakenHere(b1,ph2){
    if(b1 == true && ph1 == true){
        return true;
    }
}
 