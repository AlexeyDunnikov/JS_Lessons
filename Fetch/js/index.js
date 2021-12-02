fetch("https://api.github.com/repos/AlexeyDunnikov/JS_Lessons/commits")
  .then((response) => response.json())
  .then((commits) =>
    commits.forEach((commit) => {
      console.log(commit.commit.message);
    })
  );

