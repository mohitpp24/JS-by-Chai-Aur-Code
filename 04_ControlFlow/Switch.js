// switch (key) { //key vo value hoti hai jo mujhe hr baar check krni hai
//     case value:  //value ko lock ki trh smjiye, agr key === value hojata hai lock khul jayega
        
//         break; //agr break nhi lagate hai toh eske baad ka sara ka sara code execute hoga except default

//     default: //agr kuch match nhi hua toh ye default case run ho jayega
//         break;
// }

const month = "march"

switch (month) { //month mujhe hr baar check krna hai
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}