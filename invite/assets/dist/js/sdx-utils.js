function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key].includes(value+","));
}
function jsonDiff(obj1, obj2) {
	var result = {};
	for(key in obj1) {
		if(obj2[key] != obj1[key]) result[key] = obj2[key];
		if(typeof obj2[key] == 'array' && typeof obj1[key] == 'array') 
			result[key] = arguments.callee(obj1[key], obj2[key]);
		if(typeof obj2[key] == 'object' && typeof obj1[key] == 'object') 
			result[key] = arguments.callee(obj1[key], obj2[key]);
	}
	return result;
}
function createUUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
function createNodashUUID(prefix){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return prefix+uuid;
}
function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}