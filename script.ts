// interpreter aur compiler 

// Interpreter aur compiler dono hi programming code ko machine-readable format mein convert karne ke tools hain, lekin inka kaam karne ka tareeqa alag hai.

// 1. Interpreter (Jaise JavaScript ke liye)
// Interpreter code ko line-by-line execute karta hai, yaani har line ko separately read aur run karta hai.
// Iska matlab hai ke agar code mein koi error hai, toh interpreter us error par turant ruk jaata hai aur usko highlight kar deta hai.
// Interpreter-based languages jaise JavaScript, turant output dete hain aur isi wajah se web browsers mein JavaScript easily aur directly run ho jaata hai.
// 2. Compiler (Jaise TypeScript ke liye)
// Compiler pehle poore code ko ek hi waqt mein read aur analyze karta hai, aur isko ek complete executable file (like .js, .exe, etc.) mein convert karta hai.
// Compilation ke process mein sari errors detect ho jaati hain, aur agar errors nahi hain toh compiled file ko directly run kiya ja sakta hai, jo fast aur efficient hota hai.
// TypeScript ko pehle compile kiya jata hai aur phir wo JavaScript mein convert hota hai, jo uske baad browser ya server mein run hota hai.
// Summary:

// Interpreter: Line-by-line execution, instant feedback, slower (JavaScript).
// Compiler: Entire code at once, pre-checks errors, faster runtime (TypeScript, but it first compiles to JavaScript).


// js aur ts ma farq 
// Bilkul sahi kaha aapne! TypeScript (TS) actually JavaScript (JS) ka hi ek advanced version hai, aur yeh apne andar kuch extra features lekar aata hai jo JS mein nahi hote. TypeScript ko Microsoft ne develop kiya hai, aur iska main purpose yehi hai ke JS ko aur reliable aur maintainable banaya ja sake, khaaskar bade projects ke liye.

// Aapne jo points mention kiye woh bilkul theek hain, TypeScript koi nayi language nahi hai, balki JavaScript ke upar ek superset hai. Iska matlab yeh hai ke jo kuch aap JS mein likhte hain, woh TypeScript mein bhi likha ja sakta hai, lekin TS mein kuch extra features bhi hain jo isko aur powerful banate hain. In features mein se kuch yeh hain:

// Static Typing - TypeScript ka sabse bada feature iska "static typing" hai. Iska matlab hai ke aap variables aur functions ke types ko pehle se define kar sakte hain. Yeh cheez code ko aur reliable banati hai aur run-time errors ko reduce karti hai.

// Compile-Time Error Checking - TS mein errors ko compile hone se pehle hi detect kar liya jata hai, jo debugging aur development process ko asaan banata hai.

// Better Tooling Support - TypeScript mein autocompletion aur better code navigation hota hai, jo development ko fast aur error-free banata hai.

// Object-Oriented Programming (OOP) Support - TS OOP concepts ko bhi support karta hai jaise classes, interfaces, inheritance, etc., jo large-scale applications ko manage karne mein madadgar hain.

// Is tarha, TypeScript aapko wohi JavaScript wali functionality deta hai, lekin zyada control aur stability ke sath. Isliye TypeScript ko aksar large-scale applications aur complex projects mein prefer kiya jata hai, jabke JavaScript choti applications aur web pages ke liye best rehti hai.


// datatypes in ts
// ak hoty ha Implicit type jo yeh ha let x =12 , aur dosry ha explicit jo ka yeh haa let x:number = 90
// TypeScript mein kaafi saare built-in data types hote hain jo alag-alag tareeqe se data ko handle karne mein madadgar hain. Commonly used data types ye hain:

// 1. Primitive Data Types
// number: Sirf numeric values ke liye.
// string: Textual data ke liye (e.g., words, sentences).
// boolean: Sirf true ya false values ke liye.
// null: Sirf ek null value ke liye (koi specific value nahi hai).
// undefined: Jab variable declare kiya gaya ho lekin koi value assign na ki gayi ho.
// symbol: Unique identifiers create karne ke liye (ES6 mein introduce hua).
// bigint: Bahut bade integers ko handle karne ke liye, jo normal number se bhi bade ho sakte hain.
// 2. Special Data Types
// any: Isme kisi bhi type ki value ho sakti hai. Ye flexibility provide karta hai, lekin strict type-checking ko bypass karta hai.
// unknown: Ye any ki tarah hota hai, lekin strict checking ke sath. Jab tak type confirm na ho jaye, aap unknown type ke variables par operations nahi kar sakte.
// void: Iska mostly functions mein use hota hai jab koi return value na ho.
// never: Iska use un functions ke liye hota hai jo kabhi return nahi karte, jaise errors throw karna ya infinite loops.
// 3. Complex Data Types
// array: Similar type ke values ka collection (e.g., number[], string[]).
// tuple: Fixed number of elements ke sath ordered data type, jisme har element ka apna specific type hota hai (e.g., [string, number]).
// object: Key-value pairs ka collection, jo complex structures ko represent karta hai.
// enum: Constants ka ek group define karne ke liye, jo specific values ko represent karta hai (e.g., enum Direction { Up, Down, Left, Right }).
// Summary
// To sum up, TypeScript mein ye main data types hain:

// Primitive: number, string, boolean, null, undefined, symbol, bigint
// Special: any, unknown, void, never
// Complex: array, tuple, object, enum
// In types se TypeScript code ko robust, readable aur manageable banata hai, kyunki har variable ki type pre-defined hoti hai, jo development mein errors ko minimize karta hai


// numbers
//  let a:[number,number,number,string]
//   a = [1,3,4,'fdf']


// enum is lia use hota ha kai barr hamary pass bht se asy consta

// TypeScript mein enum ek special data type hai jo related values ke group ko organize aur manage karne ke liye use hota hai. Iska main purpose ye hai ke readable aur maintainable code likha ja sake, khaaskar jab hum constants ya specific values ka group banate hain. enum ke through hum values ko ek unique name assign kar sakte hain.

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// let move: Direction = Direction.Up;

// console.log(move);

// 3) type inference kya hpta ha 
// Bilkul sahi kaha aapne! TypeScript mein type inference ka matlab yehi hai ke agar hum kisi variable ki type explicitly define nahi karte, to TypeScript khud hi uski type infer (judge) kar leta hai uski assigned value ko dekh kar.

// Agar hum type specify nahi karte, to TypeScript automatically pehli value ke basis par type decide kar leta hai. Yeh feature code ko concise aur readable banata hai.

// Example:
// typescript
// Copy code
// let age = 25;  // TypeScript infers 'age' as a 'number' based on the assigned value
// Is example mein humne age variable ke liye type define nahi ki, lekin kyunki ismein 25 (ek number) assign kiya gaya hai, TypeScript automatically iski type number infer kar leta hai.

// Agar hum baad mein age ko kisi aur type ki value (e.g., string) assign karte hain, to TypeScript error dega, kyunki pehle hi number type assign ho chuki hai.

// To Summarize:
// TypeScript mein type inference ka matlab hai variable ki type ko automatically assign karna based on its initial value, jab hum explicitly type define nahi karte.


//  4) union and intersection type 
// Aapke example mein jo number | string likha gaya hai, ye union type hai, aur ye TypeScript mein alag-alag types ko combine karne ka ek tareeqa hai. Lekin isko intersection type nahi kehte.

// Union Type
// Union type ka matlab hai ke ek variable ek se zyada types ki value hold kar sakta hai. Jaise aapne example diya:

// typescript
// Copy code
// let a: number | string;
// Iska matlab hai ke a variable me ya to number ho sakta hai ya string, lekin dono types ek hi waqt mein nahi ho sakti. Union types ka symbol | hota hai.

// Intersection Type
// Intersection type ka matlab hai ke ek variable multiple types ke sabhi properties ko ek saath include karega. Intersection types ka symbol & hota hai.

// Example:

// typescript
// Copy code
// type Person = { name: string };
// type Employee = { employeeId: number };
// type PersonEmployee = Person & Employee;

// let emp: PersonEmployee = { name: "Hashir", employeeId: 123 };
// Yahan emp variable me Person aur Employee types ke sabhi properties ek saath hain. Iska matlab ye hai ke emp me name aur employeeId dono properties honi chahiye.

// Summary:
// Union Type (|): Variable ko multiple types ki values hold karne ki permission deta hai (ek waqt me sirf ek type).
// Intersection Type (&): Variable ko multiple types ke sabhi properties ko combine karke use karne deta hai (sab properties honi chahiye).
// To aapke example mein number | string union type hai, intersection type nahi.


// let x: string | Number;

// x = 56;
// x= 'fdg'
 
// type Protein ={
//     Name:String,
// }

// type Qty = {
//     aty:Number,
// }

// type allOfProtein = Protein & Qty;

// let resp: allOfProtein = {
//     Name:'chana',
//     aty:324,
// }
// let a = 'je;;j'


// Nahi, aapka thoda sa concept clear karna zaroori hai. Type aliases sirf type ka naam dene ka shortcut hain, aur ye koi naya variable create nahi karte. Ye sirf types ke liye shortcut naam hain jo readability aur maintainability improve karte hain.

// Type aliases mein aap aik existing type ka naya naam dete hain, taake aap woh naam repeatedly code mein use kar sakain, jese kuch specific types ya complex union types ko alias de kar simplify kiya jata hai.

// TypeScript mein type aliases ka sahi istamal:
// typescript
// Copy code
// type ID = string; // 'string' type ka alias 'ID'
// let userId: ID = "12345";
// Yahan ID ek type alias hai jo string type ko represent karta hai. Agar ham kisi variable ko ID type dete hain, to wo actually string hi hai, par hamen code readability mein asaani milti hai.

// Ek aur example - complex types ke liye alias:
// typescript
// Copy code
// type User = {
//   id: number;
//   name: string;
// };

// let user: User = {
//   id: 1,
//   name: "Hashir",
// };
// Yahan User ek type alias hai jo aik specific object structure ko represent karta hai. Har dafa pura object type likhne ki bajaye, ab hum sirf User ka alias use kar sakte hain.

// Toh jab aap type aliases ki baat karte hain, toh iska matlab sirf ye hai ke aap ne koi existing type ka naya naam diya hai, aur us nayi type ko variables ke liye use kar sakte hain.



// Type aliases aur interfaces mein kuch similarities hain, lekin ye dono alag purposes ke liye use hote hain aur kuch differences bhi hain. Main dono ka comparison aur kuch key points clear kar deta hoon:

// 1. Type Aliases
// Type aliases kisi bhi type ko represent kar sakte hain, jaise string, number, array, union types, ya phir complex types jaise objects.
// Type aliases ko extend nahi kiya ja sakta, lekin unhe union aur intersection types ke saath combine kiya ja sakta hai.
// Type alias ko ek single line mein kisi bhi type ka naam dene ke liye banaya gaya hai, jo readability aur simplicity ke liye acha hai.
// Example:

// typescript
// Copy code
// type ID = string;  // simple type alias
// type Status = "active" | "inactive";  // union type alias
// type User = { id: ID; name: string; age?: number };  // complex object type alias
// 2. Interfaces
// Interfaces sirf objects ke structures ko define karte hain.
// Interfaces mein extends keyword se inheritance ho sakta hai, jo unhe reuse aur composition ke liye behad powerful banata hai.
// Interfaces mein aap methods aur properties bhi define kar sakte hain, aur agar zaroorat ho to multiple interfaces ko extend kar sakte hain.
// Interfaces ka use kar ke types ko merge bhi kiya ja sakta hai (declaration merging).
// Example:

// typescript
// Copy code
// interface User {
//   id: string;
//   name: string;
//   age?: number;  // optional property
// }

// interface Admin extends User {  // User interface ko extend karte hain
//   role: string;
// }

// const admin: Admin = {
//   id: "123",
//   name: "Hashir",
//   role: "admin",
// };
// Differences Summary:
// Scope: Type aliases koi bhi type represent kar sakte hain, lekin interfaces sirf objects ke structures ke liye hain.
// Extensibility: Interfaces ko extend kiya ja sakta hai (inheritance), lekin type aliases mein inheritance directly nahi hota, bas intersection & operator se kiya ja sakta hai.
// Declaration Merging: Interfaces ko merge kar sakte hain, jab ke type aliases mein ye facility nahi hoti.
// Aapka Jo Example Tha Us Ka Clarification:
// Agar aap string ko as a type assign karte hain kisi variable ko, to wo sirf us variable ki type hogi, lekin uska naam nahi.

// Agar aap bar bar string type ko use karna chahte hain aur readable naam dena chahte hain, to type alias bana sakte hain:

// typescript
// Copy code
// type Name = string;
// let userName: Name = "Hashir";
// Jab ke interface mein aap sirf object ka structure define karte hain:

// typescript
// Copy code
// interface User {
//   name: string;
//   age: number;
// }
// Summary:
// Type alias ko kisi bhi type ke liye use kar sakte hain aur ye string ya kisi aur type ka shortcut hai.
// Interface sirf object structure ke liye hota hai, aur extend bhi ho sakta hai.