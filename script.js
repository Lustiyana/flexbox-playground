var objectContainer = document.getElementById("result");
var boxInput = document.getElementById("box-input");
let styles = {
  display: "flex",
};
var htmlResult = document.getElementById("html-result");
const cr = document.getElementById("code-result");
const copyCSS = document.getElementById("copy-css");

function submitFlexBox(e) {
  e.preventDefault();
  CodeResult("display", "flex");

  var count = parseInt(boxInput.value);

  if (!isNaN(count) && count > 0) {
    var itemsHTML = "";
    objectContainer.innerHTML = "";
    for (var i = 0; i < count; i++) {
      var object = document.createElement("div");
      object.classList.add("item");
      object.textContent = i + 1;
      objectContainer.appendChild(object);
      itemsHTML += `\n &ensp;&lt;div class="item"&gt;${i + 1}&lt;/div&gt;`;
    }
    htmlResult.innerHTML = `&lt;div id="objectContainer"&gt;${itemsHTML} \n&lt;/div&gt`;
    objectContainer.style.display = "flex";
    objectContainer.style.flexDirection = "row";
  }
}

document.getElementById("clear-item").addEventListener("click", function () {
  objectContainer.style.flexDirection = "row";
  objectContainer.style.flexWrap = "nowrap";
  objectContainer.style.justifyContent = "flex-start";
  objectContainer.style.alignItems = "flex-start";
  objectContainer.style.alignContent = "flex-start";

  objectContainer.innerHTML = "";

  cr.innerHTML = "";
  htmlResult.innerHTML = "";
  styles = {
    display: "flex",
  };

  CodeResult("display", "flex");
});

function CodeResult(name, input) {
  styles[name] = input;

  let stylesText = "";

  cr.innerHTML = "";

  for (const key in styles) {
    stylesText += "\n &ensp;" + key + ": " + styles[key] + ";";
  }
  cr.innerHTML = `.objectContainer{${stylesText} \n}`;
}

document
  .getElementById("flex-direction")
  .addEventListener("change", function () {
    var selectInput = document.getElementById("flex-direction");
    CodeResult("flex-direction", selectInput.value);
    objectContainer.style.flexDirection = selectInput.value;
  });

document.getElementById("flex-wrap").addEventListener("change", function () {
  var selectInput = document.getElementById("flex-wrap");
  CodeResult("flex-wrap", selectInput.value);
  objectContainer.style.flexWrap = selectInput.value;
});

document
  .getElementById("justify-content")
  .addEventListener("change", function () {
    var selectInput = document.getElementById("justify-content");
    CodeResult("justify-content", selectInput.value);
    objectContainer.style.justifyContent = selectInput.value;
  });

document.getElementById("align-items").addEventListener("change", function () {
  var selectInput = document.getElementById("align-items");
  CodeResult("align-items", selectInput.value);
  objectContainer.style.alignItems = selectInput.value;
});

document
  .getElementById("align-content")
  .addEventListener("change", function () {
    var selectInput = document.getElementById("align-content");
    CodeResult("align-content", selectInput.value);
    objectContainer.style.alignContent = selectInput.value;
  });

copyCSS.addEventListener("click", copyToClipboard);

function copyToClipboard(codeId) {
  var preElement = document.getElementById(codeId);
  var code = preElement.textContent || preElement.innerText;

  var textarea = document.createElement("textarea");
  textarea.value = code;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");

  document.body.removeChild(textarea);

  alert("Code copied to clipboard!");
}
