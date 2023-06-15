function generadorExcusas() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let ranWho = who[Math.floor(Math.random() * who.length)];

  let action = ["ate", "peed", "crushed", "broke"];
  let ranAction = action[Math.floor(Math.random() * action.length)];

  let what = ["my homework", "the keys", "the car"];
  let ranWhat = what[Math.floor(Math.random() * what.length)];

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];
  let ranWhen = when[Math.floor(Math.random() * when.length)];

  return ranWho + " " + ranAction + " " + ranWhat + " " + ranWhen;
}

window.onload = function (){
  document.getElementById("excusa").innerHTML = generadorExcusas();
};
