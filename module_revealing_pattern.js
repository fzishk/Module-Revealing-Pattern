
const authentication = (() => {
    const username = "fxishk";
    const Password = "2321@#@3";
    const req_username = () => {
        return `Hello ! ${username}`;
    }

    const req_password = () => {
        return `your requested Password is ${Password}`;
    }
    return { req_username, req_password, username };
})();

let Promt = prompt("Please Enter your Request Key, 1 FOR USERNAME 2 FOR PASSWORD");

(Promt == 1) ? console.log(authentication.req_username()) : 
(Promt == 2) ? console.log(authentication.req_password()) : 
//it will show undifined.
console.log(Password);


