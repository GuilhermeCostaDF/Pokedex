const offset = 10;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?${offset}=0&limit=${limit}`;

fetch(url)
  .then(function (response) {
    response.json().then(function (responseBody) {
      console.log(responseBody);
    });
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
    console.log("Requisição conluída");
  });

//teste
