const TEXTFILES = ["info01.txt", "info02.txt", "info03.txt", "info04.txt"];

const diffy = document.querySelector(".container");

const fetchTextFiles = async (files) => {
  for (let file of files) {
    const response = await fetch(file);
    const TxtFile = await response.text();
    const heading = document.createElement("h2");
    heading.innerHTML = file;
    diffy.appendChild(heading);
    const pretag = document.createElement("pre");
    // pretag.innerHTML = TxtFile;
    // OR
    // pretag.innerText = TxtFile;
    // OR
    // pretag.textContent = TxtFile;
    // OR
    let text = document.createTextNode(TxtFile);
    pretag.appendChild(text);
    diffy.append(pretag);
  }
}

fetchTextFiles(TEXTFILES)
  .then(() => console.log(`The fetches of all Text Files were Successful`))
  .catch((err) =>
    console.error(`Error while fetching the Text Files - ${err}`)
  );


