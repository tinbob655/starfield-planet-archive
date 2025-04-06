export default class Planet {
    #atmosphere:string;
    #extremeEnvironment:number;
    #gravity:number;
    #level:number;
    #life:boolean;
    #magnetosphere:string;
    #moon:boolean;
    #name:string;
    #resources:number;
    #system:string;
    #temperature:string;
    #type:string;
    #UTTime:number;
    #water:string;

    constructor(atmosphere:string, extremeEnvironment:number, gravity:number, level:number, life:boolean, magnetosphere:string, moon:boolean, name:string, resources:number, system:string, temperature:string, type:string, UTTime:number, water:string) {
        this.#atmosphere = atmosphere;
        this.#extremeEnvironment = extremeEnvironment;
        this.#gravity = gravity;
        this.#level = level;
        this.#life = life;
        this.#magnetosphere = magnetosphere;
        this.#moon = moon;
        this.#name = name;
        this.#resources = resources;
        this.#system = system;
        this.#temperature = temperature;
        this.#type = type;
        this.#UTTime = UTTime;
        this.#water = water;
    };
    
    //getters
    get atmosphere() {
        return this.#atmosphere;
    };
    get extremeEnvironment() {
        return this.#extremeEnvironment;
    };
    get gravity() {
        return this.#gravity;
    };
    get level() {
        return this.#level;
    };
    get life() {
        return this.#life;
    };
    get magnetosphere() {   
        return this.#magnetosphere;
    };
    get moon() {    
        return this.#moon;
    };
    get name() {
        return this.#name;
    };
    get resources() {
        return this.#resources;
    };
    get system() {
        return this.#system;
    };
    get temperature() {
        return this.#temperature;
    };
    get type() {    
        return this.#type;
    };
    get UTTime() {
        return this.#UTTime;
    };
    get water() {
        return this.#water;
    };

    isLandable():boolean {
        if (this.#type.includes('Giant')) {
            return false;
        }
        else return true;
    };
};