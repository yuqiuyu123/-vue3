const obj = { 
    foo: 1,
    get xxx() {
        console.log(this.foo);
    }
 }
console.log(Reflect.get(obj, 'xxx', {foo: 2} ))
// 第三参数可以理解成this