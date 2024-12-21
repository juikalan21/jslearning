/*
//const tinderUser = new Object() // output will be {} - this is a singleton object

const tinderUser = {} // {} //non sigletom object

tinderUser.id = "123adb"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser); //{ id: '123adb', name: 'sammy', isLoggedIn: false }

//nesting
const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "jui",
            lastname: "kalan"

        }
    }
}
//console.log(regularUser.fullname.userfullname);

//combining objects
 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "a", 4: " b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4) //{} - acts as a target and other remaining objects acts as a source

const obj3 = {...obj1, ...obj2} //spread operator - { '1': 'a', '2': 'b', '3': 'a', '4': ' b' }
//console.log(obj3);

//values coming from database

const users = [ //array of objects - comma sepearted values
    {
        id: 1,
        email:  "j@gmail.com"
    },
    {
        id:  1,
        email: "j@gmail.com"
    },
    {
        id:  1,
        email:  "j@gmail.com"
    },
    {
        id:  1,
        email:  "j@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] - prints all keys in the form of array

console.log(Object.values(tinderUser)); //[ '123adb', 'sammy', false ] - prints all values in the form of array

console.log(Object.entries(tinderUser)); //array inside array - array per key value

//cheecking
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
console.log(tinderUser.hasOwnProperty('isLogged')); //false
*/

// destrcturing 
const course = {
    coursename: " javascript",
    price: "232",
    courseInstructor: " jk"
}
//course.courseInstructor 
const{courseInstructor: instructor} = course //destructuring the courseInstructor value to just instrctor
console.log(instructor); //same value - jk will be printed out

//in react syntax like

// const navbar = ({company}) => {
//    }

// we can destructure array too

//api - earlier in xml strcture 
//json syntax
/* - object format api
{
    "name:" "juikalan"
    "coursename:" "javascript",
    "price:" "free"
}
*/
[ //array format api
    {},
    {},
    {}
]

//random user me and json formatter
{
    {
        "results": [
          {
            "gender": "female",
            "name": {
              "title": "Miss",
              "first": "Jennie",
              "last": "Nichols"
            },
            "location": {
              "street": {
                "number": 8929,
                "name": "Valwood Pkwy",
              },
              "city": "Billings",
              "state": "Michigan",
              "country": "United States",
              "postcode": "63104",
              "coordinates": {
                "latitude": "-69.8246",
                "longitude": "134.8719"
              },
              "timezone": {
                "offset": "+9:30",
                "description": "Adelaide, Darwin"
              }
            },
            "email": "jennie.nichols@example.com",
            "login": {
              "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
              "username": "yellowpeacock117",
              "password": "addison",
              "salt": "sld1yGtd",
              "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
              "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
              "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
            },
            "dob": {
              "date": "1992-03-08T15:13:16.688Z",
              "age": 30
            },
            "registered": {
              "date": "2007-07-09T05:51:59.390Z",
              "age": 14
            },
            "phone": "(272) 790-0888",
            "cell": "(489) 330-2385",
            "id": {
              "name": "SSN",
              "value": "405-88-3636"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/75.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            "nat": "US"
          }
        ],
        "info": {
          "seed": "56d27f4a53bd5441",
          "results": 1,
          "page": 1,
          "version": "1.4"
        }
      }
}

