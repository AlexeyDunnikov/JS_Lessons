async function loadJson(url){
    try{
        let response = await fetch(url);
        return await response.json();

    }catch(err){
        console.log(err);
    }
}

loadJson("https://jsonplaceholder.typicode.com/todos")
  .then((json) => json.filter((item) => item.completed))
  .then((completedTodos) => completedTodos.forEach((j) => console.log(j)));
