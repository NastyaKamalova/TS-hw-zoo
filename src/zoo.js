"use strict";
const animals = [
    {
        name: 'Parrot',
        color: 'red',
        weight: 100,
        feeding: 100,
        birthday: new Date(1995, 11, 17),
        predator: false,
        doing: () => 'repeats sounds',
    },
    {
        name: 'Kangaroo',
        color: 'brown',
        weight: 100,
        feeding: 100,
        birthday: new Date(1995, 11, 17),
        predator: false,
        doing: () => 'Jumping',
    },
    {
        name: 'Elephant',
        color: 'gray',
        weight: 100,
        feeding: 100,
        birthday: new Date(1995, 11, 17),
        predator: false,
        doing: () => 'remembers all your stupid jokes',
    },
    {
        name: 'Wolf',
        color: 'gray',
        weight: 100,
        feeding: 100,
        birthday: new Date(1995, 11, 17),
        predator: true,
        doing: () => 'dancing ihvilniht',
    },
    {
        name: 'Deer',
        color: 'brown',
        weight: 100,
        feeding: 100,
        birthday: new Date(1995, 11, 17),
        predator: false,
        doing: () => 'eats moss',
    },
    {
        name: 'Hare',
        color: 'white',
        weight: 100,
        feeding: 100,
        birthday: new Date(1995, 11, 17),
        predator: false,
        doing: () => 'runs home',
    },
    {
        name: 'Lynx',
        color: 'ginger',
        weight: 100,
        feeding: 100,
        birthday: new Date(1995, 11, 17),
        predator: true,
        doing: () => 'sleeps and purrs',
    },
    {
        name: 'Beaver',
        color: 'brown',
        weight: 100,
        feeding: 100,
        birthday: new Date(1995, 11, 17),
        predator: false,
        doing: () => 'kurva',
    },
    {
        name: 'Giraffe',
        color: 'brown',
        weight: 100,
        feeding: 100,
        birthday: new Date(1995, 11, 17),
        predator: false,
        doing: () => 'takes leaves from the top of the tree',
    },
    {
        name: 'Hedgehog',
        color: 'gray',
        weight: 100,
        feeding: 100,
        birthday: new Date(1995, 11, 17),
        predator: true,
        doing: () => 'curls up into a ball',
    },
];
const animalSort = (animals) => {
    const rooms = [{
            desc: 'herbivores room',
            guests: []
        }];
    animals.forEach((item) => {
        if (item.predator) {
            const room = {
                desc: item.name + " room",
                guests: [item]
            };
            rooms.push(room);
        }
        else {
            rooms[0].guests.push(item);
        }
    });
    return rooms;
};
const zoo = animalSort(animals);
console.log(zoo);
