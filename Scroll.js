const PageNumber = 1;
const PageResults = 15;


// function Image(){
//     const url='https://randomuser.me/api/?page=3&results=10&seed=abc'
//     fetch(url)
//    .then(response=>response.json())
//     .then(data=>console.log(data.results))
// }
// Image()

function FetchImage(PageNumber, PageResults) {
    const url = `https://randomuser.me/api/?page=${PageNumber}&results=${PageResults}&nat=DE`
    PageNumber += 1;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data.results)
            data.results && data.results.forEach((Data) => {
                const User = document.createElement("div")
                User.classList.add("card")
                User.innerHTML = `
            <img class="img" src=${Data.picture.medium} alt=""/>
            <ul class="list-group">
                <li class="list-items">Name: ${Data.name.first} ${Data.name.last}</li>
                <li class="list-items">Gender: ${Data.gender}</li>
                <li class="list-items">Age:${Data.dob.age}</li>
                <li class="list-items">From:${Data.location.city}</li>
            </ul>
            `
                document.querySelector(".container").appendChild(User)
            })
        })
}

FetchImage(PageNumber, PageResults)

const option = {
    root: null,
    rootMargin: "0px 0px 200px 0px",
    threshold: 1,
}

const CallBack = ([entry]) => {
    if (entry && entry.isIntersecting) {
        FetchImage(PageNumber, PageResults)
        console.log("PageNumber", PageNumber)
    }
}
const Observer = new IntersectionObserver(CallBack, option)

const observerTop = document.querySelector(".observer")

Observer.observe(observerTop)
