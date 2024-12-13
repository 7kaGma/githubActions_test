// assert=結果が指定した値になっているかを確認する関数

const assert = require("assert");
const fizzbuzz = require("../index");

/*----------
Mochaのテストコードの構造
describe>itでネスト構造になっている。
itがテストの最小単位で、describeでブロックを形成する
※アロー関数は推奨されないので注意

例：
describe('テストの見出し',funcion(){
  it('テストの小見出し',function(){
    //テストコード
  });
  it('テストの小見出し',function(){
    // テストコード
  });
});
----------*/

describe("fizzbuzz",()=>{
  it("returns FizzBuzz when value is divisible by 15",function(){
    // assertは条件式でfalseだとErrorを投げるしくみ
    assert(fizzbuzz(30)==="FizzBuzzz");
  });
  it("returns Fizz when value is disvisible by 3",function(){
    assert(fizzbuzz(9)==="Fizz");
  });
  it("returns Buzz when value is divisible by 5 ", function(){
    assert(fizzbuzz(10)==="Buzz");
  });

  it("returns the value when value is not divisible by 3 or 5",function(){
    assert(fizzbuzz(7)==="7");
  });
});

