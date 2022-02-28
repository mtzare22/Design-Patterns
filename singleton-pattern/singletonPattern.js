const Singleton = (function() {

    class Process {
        constructor(state) {
            this.state = state;
        }
    }

    let instance;

    function createInstance() {
        return new Process("MyState");
    }

    return{ getInstance() {
        if(!instance){
            instance = createInstance();
        }
        return instance;
    }
}

})();

// اطمینان حاصل میکند که از یک کلاس تنها یک نمونه میتواند وجود داشته باشد و دسترسی به آنرا فراهم میکند.

const psm1 = Singleton.getInstance();
const psm2 = Singleton.getInstance();
console.log(psm1 == psm2); // true
