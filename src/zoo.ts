interface Animal {
    color: string;
    weight: number;
    feeding: number;
    birthday: Date;
    predator: boolean;
    name: string;
}

interface Parrot extends Animal {
    doing: () => 'repeats sounds';
}
interface Kangaroo extends Animal {
    doing: () => 'Jumping';
}
interface Elephant extends Animal {
    doing: () => 'remembers all your stupid jokes';
}
interface Wolf extends Animal {
    doing: () => 'dancing ihvilniht';
}
interface Deer extends Animal {
    doing: () => 'eats moss';
}
interface Hare extends Animal {
    doing: () => 'runs home';
}
interface Lynx extends Animal {
    doing: () => 'sleeps and purrs';
}
interface Beaver extends Animal {
    doing: () => 'kurva';
}
interface Giraffe extends Animal {
    doing: () => 'takes leaves from the top of the tree';
}
interface Hedgehog extends Animal {
    doing: () => 'curls up into a ball';
}

type ZooAnimal = Hedgehog | Giraffe | Beaver | Lynx | Hare | Deer | Wolf | Elephant | Kangaroo | Parrot;
type ZooRoom = {
    desc: string;
    guests: ZooAnimal[];
}

type AnimalSortFn = (animals: ZooAnimal[]) => ZooRoom[];
type IsPredator = (animal: ZooAnimal) => boolean;

const animals: ZooAnimal[] = [
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
]

const isPredator = (animal: ZooAnimal) => animal.predator;

const animalSort = (animals: ZooAnimal[]) => {
    const rooms: ZooRoom[] = [{
        desc: 'herbivores room',
        guests: []
    }];

    animals.forEach((item) => {
        if (isPredator(item)) {
            const room: ZooRoom = {
                desc: item.name + " room",
                guests: [item]
            }
            rooms.push(room);
        } else {
            rooms[0].guests.push(item)
        }
    })

    return rooms
}

const zoo = animalSort(animals);
console.log(zoo)
