""
''
let str = "string";
str = 'strings'
str = `stringss` // 템플릿 리트럴
console.log(str);

str = '오일남 아저시꼐서 말씀하셨다. "이러다 우리 다 죽어!"';
str = "오일남 아저시꼐서 생각하셨다. '오징어 게임은 내가 만들었는데'";
str = `오일남 아저시꼐서 생각하셨다. '오징어 게임은 내가 만들었는데'`
console.log(str);

console.log("string" + " test");

console.log(str[0] + str[1] + str[2]);

console.log(str.substring(0,3));

console.log(typeof str); // string