class Singleton {

    static instance: Singleton;
    id: number;

    constructor(id: number) {
        this.id = id;
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

const object1 = new Singleton(1);
const object2 = new Singleton(2);
console.log(`id of object1 is equal: ${object1.id}, id of object2 is equal: ${object2.id}
and it's ${object1 === object2} that object1 === object2`);