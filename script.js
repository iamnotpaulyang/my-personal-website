// const h2 = document.createElement("h2");
// h2.textContent = "";
// document.querySelector("body").appendChild(h2);
const navScroll = (section) => {
    const location = document.getElementById(section)
    location.scrollIntoView({behavior:"smooth", block: "end"})
}