const EventEmitter = require("events");


const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
    console.log(`Thanks for subscribing to ${channelName}`);
}
eventEmitter.addListener("subscribe", subscribeMessage);

/* Assignment 09
console.log("Calling event listner before removing the event: ");
eventEmitter.emit("subscribe", "College Wallah");

console.log("Calling event listner after removing the event");
eventEmitter.removeListener("subscribe", subscribeMessage)

*/

eventEmitter.emit("subscribe", "College Wallah");

// Assignment 10
console.log(`The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);

eventEmitter.setMaxListeners(5);

console.log(`The updated maximum number of events listners are ${eventEmitter.getMaxListeners()}`);