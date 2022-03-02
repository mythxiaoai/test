//断言的用途
//1. 将一个联合类型断言为其中一个，为了不报错
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) {
    return animal.name;
}
function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
//将一个父类断言为更加具体的子类  更加确定的子类
interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}
//将任何一个类型断言为 any   不要滥用类型的严格性和开发的便利性之间掌握平衡
(global as any).foo = 1;

//将 any 断言为一个具体的类型  为了维护烂代码  变的精准

function getCacheData(key: string): any {
    return (global as any)[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom2 = getCacheData('tom') as Cat;
// tom2.run();


//断言的限制

interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

let tom3: Cat = {
    name: 'Tom',
    run: () => { console.log('run') }
};
let animal3: Animal = {
    name: 'Tom',
};
//但是animal的提示就会少了  因为Cat中的属性包含Animal所以可以看成Cat是继承Animal的
//总体是  如果向父类做转换,属性是减少的，绝对不会报错。
let animal: Animal = tom3;
//这里就不行，原因是  比较结构,Cat还有一个run方法,animal并没有  并不兼容
// let cat3: Cat = animal3;
//这样就可以  也会出现run的提示  但是并没有方法，欺骗会换来报错的悲剧
let cat4: Cat = animal3 as Cat;
console.log(animal);
console.log(cat4.run());

//泛型  这个是最优解
function getCacheData2<T>(key: string): T {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom4 = getCacheData2<Cat>('tom');
tom.run();



