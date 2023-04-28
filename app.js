//giphy URL made into variable for easier use
const giphyURL = 'http://api.giphy.com/v1/gifs/search'


// selecting elements and setting them to variables for easier use
const $mainDivContainer = $("#main-container");
const $formContainer = $("#form-container");
const $submitButton = $("#submit-button");
const $removeButton = $("#remove-button");
const $gifContainer = $("#gif-container");

// function to get user input on submit
$($submitButton).on('click', async function () {
    const $userSearchTerm = $("#giphy-search").val();
    const response = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${$userSearchTerm}&api_key=xc5DcZjkGcLhHdkAt3RCNbPYT584s7Vl`
    );
    const randomIndex = Math.floor(Math.random() * response.data.data.length)
    const randomGif = response.data.data[randomIndex];
    console.log(randomGif)
    const $newGif = $("<img>").attr("src", randomGif.images.original.url);

    $gifContainer.append($newGif)
    $("#giphy-search").val("");
});


  // function to remove gifs using an on click event handler
$($removeButton)
  .on("click", function () {
    $gifContainer.empty(); //jQuery method used to remove all child elements from selected HTML element
    console.log("you clicked remove!");
});