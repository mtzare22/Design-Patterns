class Observer {
    constructor() {
        this.observer = [];
    }

    subscribe(fn) {
        this.observer.push(fn);
    }

    unsubscribe(fn) {
        this.observer = this.observer.filter(f => f != fn);
    }

    fire() {
        this.observer.forEach(observer => observer());
    }
}

function observer1() {
    console.log("observer 1");
}


function observer2() {
    console.log("observer 2");
}

const observer = new Observer();
observer.subscribe(observer1);
observer.subscribe(observer2);
observer.fire();
observer.unsubscribe(observer1);
observer.fire();
