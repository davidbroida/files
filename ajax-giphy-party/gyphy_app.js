console.log("Let's get this party started!");

// MY BLIND ATTEMPT

// async function getGiphy(searchterm){
//     const url = `https://api.giphy.com/v1/gifs/search?q=${searchterm}&api_key=OSbld0gw4uBwyieT0Y0HaKQSzqBs1JqX`
//     const res = await axios.get(url);
//     const list = document.getElementById('#imageList');
//     const image = document.createElement('img');
//     image.src = res.data[1].images.original.url;
//     list.append(image);
                
// }


// const inputForm = document.querySelector('#submitForm');
// inputForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     const input = document.querySelector('#search');
//     const searchVal = input.value;
//     console.log(searchVal);
//     getGiphy(searchVal);
// })

const $imageList = $("#imageList");
const $search = $("#search")

function addImg(res){
    let numResults = res.data.length;
    if(numResults){
        let randIndex = Math.floor(Math.random() * numResults);
        let $newDiv = $("<div>", {class: "imagDiv"});
        let $newImg = $("<img>", {class: "newImg", src: res.data[randIndex].images.original.url});
        $newDiv.append($newImg);
        $imageList.append($newDiv);
    }
}


$("form").on("submit", async function (e){
    e.preventDefault();
    let searchVal = $search.val();
    $search.val("");

    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchVal,
            api_key: "OSbld0gw4uBwyieT0Y0HaKQSzqBs1JqX"
        }
    });
    addImg(response.data);
});

$("#btn-2").on("click", function(){
    $imageList.empty();
})




