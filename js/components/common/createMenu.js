import { getUsername } from "../../utils/storage.js";

console.log("my name is", getUsername);

export default function createMenu() {
  const { pathname } = document.location;
  const username = getUsername();
  const container = document.querySelector(".menu-container");
  const authLink = `<a href="./" class="${pathname === || "/" ? "active" : "}">Home</a> |
  <a href="login.html">Login</a>`;
  container.innerHtml = `${authLink}`;
}
