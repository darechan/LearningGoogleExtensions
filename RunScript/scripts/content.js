const article = document.querySelector("article");
/* Interesting JavaScript used in this code

Regular expressions used to count only the words inside the <article> element.
Regular expressions are also objects

insertAdjacentElement() used to insert the reading time node after the element.

The classList property used to add CSS class names to the element class attribute.

Optional chaining used to access an object property that may be undefined or null.

Nullish coalescing returns the <heading> if the <date> is null or undefined.

*/

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression - this basically asks you to not consider any spaces in all the text
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length; // the ... is the spread operator - it makes a new array for u
  const readingTime = Math.round(wordCount / 200); // it is assumed that people read 200 words per min
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}
