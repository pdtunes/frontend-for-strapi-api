import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";

export default function deleteButton(id) {
  console.log("Deleting....");
  const container = document.querySelector(".delete-container");
  container.innerHTML = `<button type="button" class="delete">Delete</button>`;

  const button = document.querySelector("button.delete");
  console.dir(button);
  button.onclick = async function () {
    console.log("Posting...");

    const url = baseUrl + "products/" + id;
    const token = getToken();

    try {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, options);
      const json = await response.json();
      location.href = "./";
    } catch (error) {
      console.log(error);
    }
  };
}
