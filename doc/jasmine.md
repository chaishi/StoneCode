# jasmine 使用说明

## 语法

### 匹配器

#### 内置匹配器

- expect(x).toEqual(y); 当x和y相等时候通过

- expect(x).toBe(y); 当x和y是同一个对象时候通过

- expect(x).toMatch(pattern); x匹配pattern（字符串或正则表达式）时通过

- expect(x).toBeDefined(); x不是undefined时通过

- expect(x).toBeUndefined(); x 是 undefined时通过

- expect(x).toBeNull(); x是null时通过

- expect(x).toBeTruthy(); x和true等价时候通过

- expect(x).toBeFalsy(); x和false等价时候通过

- expect(x).toContain(y);x（数组或字符串）包含y时通过

- expect(x).toBeLessThan(y); x小于y时通过

- expect(x).toBeGreaterThan(y); x大于y时通过

- expect(function(){fn();}).toThrow(e); 函数fn抛出异常时候通过

#### 自定义匹配器

`beforeEach(function() {
	this.addMatchers({
		toBeLessThan: function(expected) {
			var actual = this.actual;
			var notText = this.isNot ? " not" : "";
			this.message = function () {
				return "Expected " + actual + notText + " to be less than " + expected;
			}
			return actual < expected;
		}
	});
});`


### 实例

#### 实例1 Specs and Expectation
>每个spec都是一个Javascript函数，在这里可以认为就是一个测试的主体，specs用jasmine的全局方法it() 来定义，它包含了两个参数，一个string，一个function，string用来描述spec的行为，它应该是有意义的，这样以便于你在之后阅读你的测试报告 .如下代码定义了一个Spec。
>Expectations在jasmine就相当于一个断言，在一个spec中你将使用它来断言你的代码表达式是否成立，expectations使用 expect() 方法定义。在一个spec中，只有当所有的expectations全被为true时，该spec才显示为通过,否则该spec失败。


`it('should increment a variable', function () {
   var foo = 0;  
   foo++; 
   expect(foo).toEqual(1);
});`


#### 实例2 Suites
>多个Specs被组织在Suites中.，相当于specs的合集Suites 使用全局方法describe()定义，它包含两个参数，一个string，一个function，string用来描述该suite，也请确保它是有意义的，因为它将在运行结束的报告中显示以助于你分析相应Cases， 而function中的内容就是suites的合集。


`describe('Calculator', function () {
  it('can add a number', function () {
  	...
  });
  
  it('can multiply some numbers', function () {
  	...
  });
});`

#### 实例3 Suites 多个specs共享一个变量
>一个suite中的specs共享同一个函数作用域，所以你在一个suite中声明的变量可以被所有specs访问，代码如下


`describe('Calculator', function () {
	var counter = 0
	it('can add a number', function () {
		counter = counter + 2;   // counter was 0 before
		expect(counter).toEqual(2);
	});
	it('can multiply a number', function () {
		counter = counter * 5;   // counter was 2 before
		expect(counter).toEqual(10);
	});
});`

#### 实例4 嵌套 Describes
>注意上面的代码只在describe( )函数上执行一次，这就是为什么counter没有重置为0。如果你想在第二个spec（can multiply a number）中将counter重置，请使用beforeEach( )函数。

`describe('some suite', function () {
	var suiteWideFoo;
	beforeEach(function () {
		suiteWideFoo = 0;
	});
	describe('some nested suite', function() {
		var nestedSuiteBar;
		beforeEach(function() {
			nestedSuiteBar=1;
		});
		it('nested expectation', function () {
			expect(suiteWideFoo).toEqual(0);
			expect(nestedSuiteBar).toEqual(1);
		});
	});
	it('top-level describe', function () {
		expect(suiteWideFoo).toEqual(0);
		expect(nestedSuiteBar).toEqual(undefined); // Spec will fail with ReferenceError: nestedSuiteBar is not undefined
	});
});`