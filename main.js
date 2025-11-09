const fruits = ["りんご", "バナナ", "みかん", "ぶどう"];
const list = document.getElementById("fruitsList");

for (const value of fruits) {
    const li = document.createElement("li");
    li.innerText = value;
    list.appendChild(li);
}