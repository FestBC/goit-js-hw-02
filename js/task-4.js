"use strict";

function getShippingCost(country) {
    // Сделал с toLowerCase(), чтобы избежать ситуации, когда пользователь правильно напишет страну, но не по регистру. Также решил не писать ${country}, а то тогда бы с неправильным регистром писало бы, и было бы забавно заблюдать по типу "Shipping to AuSTraLIa will cost 170 credits"
    switch(country.toLowerCase()) {
        case "china":
            return "Shipping to China will cost 100 credits";
        
        case "chile":
            return "Shipping to Chile will cost 250 credits";
        
        case "australia":
            return "Shipping to Australia will cost 170 credits";
        
        case "jamaica":
            return "Shipping to Jamaica will cost 170 credits";
        
        default:
            return "Sorry, there is no delivery to your country";
    }
}

console.log("//Start of task 4.");

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

console.log("//End of task 4.");
