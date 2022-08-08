const fs = require("fs");
const path = require("path");
const http = require("http");

//create and write file Sync
fs.writeFileSync(
  "BioData.txt",
  "My name is Mohd. Moinuddin Rangrej,\nI am doing my B.Tech in the specilization of Computer Science and Engineering from Global Institute of Technology with Aggregate 9.2 CGPA."
);

// fs.appendFileSync('BioData.txt','\nI have a good understanding of C++, Python, ReactJS, mongodb that i have learn from various learing platform like udamy, coursera, linkdin-learning and Youtube')

const data = fs.readFileSync("BioData.txt");
console.log(data.toString());

//delete File
// fs.unlinkSync('BioData.txt');

const filePath = path.resolve("BioData.txt");
console.log(`File Path: ${filePath}`);

const dirname = path.dirname(filePath);
console.log(`DirName: ${dirname}`);

const server = http.createServer((req, res) => {
  res.write(`${data}`);
  res.end();
});

server.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

//ASYNC

const newLine = () => {
  for (var i = 0; i < 100; i++) {
    process.stdout.write("-");
  }
  console.log();

  //Without Sync
  fs.writeFile(
    "Additional.txt",
    "I am doing my internship from Celebal Technology, Jaipur",
    (err) => {
      if (err) console.log(err);
    }
  );

  // puchna h
  //   fs.appendFile("Additional.txt", "new data", (err) => {
  //     console.log(err);
  //   });

  const data = fs.readFile("Additional.txt", (err, data) => {
    try {
      console.log(data.toString());
      const server = http.createServer((req, res) => {
        res.write(`${data}`);
        res.end();
      });
      setTimeout(
        () =>
          server.listen(3001, () => {
            console.log("listening on port 3001");
          }),
        100
      );
    } catch (err) {
      console.log(err);
    }
  });

  const filePathasyc = path.resolve("Additional.txt");
  console.log(`FilePath: ${filePathasyc}`);

  const dirnameasyc = path.dirname(filePathasyc);
  console.log(`DirName: ${dirnameasyc}`);
};

setTimeout(() => {
  newLine();
}, 100);
