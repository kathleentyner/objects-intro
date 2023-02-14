//Exercise 1 wardrobe

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

//console.log(wardrobe.height);
//console.log(wardrobe.manufacturer);
//console.log(wardrobe.contents);
//console.log(wardrobe.depth); 
//console.log(wardrobe.width);

wardrobe.material = "cedar";
//console.log(wardrobe.material)

//Exercise 2 
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
console.log(empireStateBuilding.stories);
console.log(empireStateBuilding.height);
//console.log(empireStateBuilding.address);
console.log(empireStateBuilding.squareFeet);
//console.log(empireStateBuilding.constructionDate);
//console.log(empireStateBuilding.cost);
//console.log(empireStateBuilding.owner);
console.log(empireStateBuilding.eastWestLength);
console.log(empireStateBuilding.northSouthLength);
//console.log(empireStateBuilding.architect)


console.log(empireStateBuilding["address"]);
console.log(empireStateBuilding["constructionDate"])
console.log(empireStateBuilding["cost"])
console.log(empireStateBuilding["owner"])
console.log(empireStateBuilding["architect"])

//Exercise 3 nasshville software school

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

const partTimeInstructor = nashvilleSoftwareSchool.instructors.partTime

console.log(partTimeInstructor)

const fullTimeInstructor = nashvilleSoftwareSchool.instructors.fullTime

console.log(fullTimeInstructor)

console.log(nashvilleSoftwareSchool.instructors.fullTime[4])
console.log(nashvilleSoftwareSchool.instructors.partTime[0])