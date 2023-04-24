const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  //   Scenario: Validation when values are missing
  if (dividend === "" || divider === "") {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
  }
  //   Scenario: An invalid division should log an error in the console
  if (dividend < 0 || divider < 0) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    console.trace();
  } else {
    //   Scenario: Dividing numbers result in a decimal number
    result.innerText = Math.floor(dividend / divider);
  }
});
