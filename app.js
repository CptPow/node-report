const fs = require("fs");

const data = [];
const report = fs.createWriteStream("report.txt");
const time = new Date().toLocaleDateString("it", {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});

report.write(`Report del : ${time}
=================================\n
`);

for (let i = 1; i <= 5; i++) {
  data.push({
    id: `${i}`,
    name: `obj${i}`,
    content: "Hello world",
  });
  report.write(`Oggetto creato: obj${i} \n`);
}

fs.writeFile("db.json", JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log("File db.json creato con successo.\n");
});

fs.readFile("report.txt", "utf-8", (err, data) => {
    if (err) {
        throw err
    } else {
        console.log(data);
    }
  })

