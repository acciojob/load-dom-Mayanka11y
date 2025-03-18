//your JS code here. If required.
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Create a new text node with the string "DOM load success"
  const textNode = document.createTextNode("DOM load success");

  // Append the text node to the body
  document.body.appendChild(textNode);
});