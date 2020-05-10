// 类装饰器 表达式会在运行时当做函数被调用，类的构造函数作为其唯一的参数
function log (target: Function) {
  // console.log(target === Foo)
  target.prototype.log = function () {
    console.log(this.bar)
  }
  // 如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
}
// 方法装饰器，有三个参数，target是类实例
function dong (target: any, name: string, descriptor: any) { // 这里通过修改descriptor.value扩展了bar方法
  const baz = descriptor.value
  descriptor.value = function (val: string) {
    console.log('dong~~')
    baz.call(this, val)
  }
  return descriptor
}
// 属性装饰器
function mua (target, name) {
  target[name] = 'mua~~~'
}

@log
class Foo {
  bar = 'bar'
  @dong
  setBar (val: string) {
    this.bar = val
  }

  @mua
  ns!: string;
}

const foo = new Foo()
foo.log()
foo.setBar('lalala')
console.log(foo.ns)
