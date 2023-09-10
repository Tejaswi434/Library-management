let searchingbar = document.getElementById("searchInput");
let projecting = document.getElementById("searchResults");
let spinning = document.getElementById("spinner")
searchingbar.addEventListener("keydown", function(event) {
    spinning.classList.remove("d-none");
    if (event.key === "Enter") {
        let url = "https://apis.ccbp.in/book-store?title=" + searchingbar.value;


        let options = {
            method: "GET"
        }
        fetch(url, options)

            .then(function(response) {
                return response.json()

            })

            .then(function(jsonData) {
                //for (let eachitem of jsonData){
                console.log(((jsonData.search_results)))
                spinning.classList.add("d-none")
                for (let eachitem of jsonData.search_results) {
                    let title = eachitem.author;
                    let url = eachitem.imageLink;
                    let small = document.createElement("div");
                    small.classList.add("setting")

                    let imaginig = document.createElement("img");
                    imaginig.src = url;
                    small.appendChild(imaginig);

                    let breaking = document.createElement("br")
                    small.appendChild(breaking);

                    let para = document.createElement("p")
                    para.textContent = title
                    small.appendChild(para);
                    projecting.appendChild(small);

                }
            })


    }
})
