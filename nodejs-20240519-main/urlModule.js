import url from "url";

const urlString = "https://www.codeit.com.np/nav-search?find=PHP";

// url object
const urlObject = new URL(urlString);
// console.log(urlObject);

// format()
// console.log(url.format(urlObject));

// query params
// console.log(urlObject.search);

const params = new URLSearchParams(urlObject.search);

params.append("date", "2024-05-20");

params.delete("find");

console.log(params);
