// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import data from './Data';
/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
const theFeed = document.querySelector('.articles');

function articleMaker({ title, date, firstParagraph, secondParagraph, thirdParagraph }) {
  const articleDiv = document.createElement('div');
  const articleTitle = document.createElement('h2');
  const articleDate = document.createElement('p');
  const article1st = document.createElement('p');
  const artcile2nd = document.createElement('p');
  const artcile3rd = document.createElement('p');
  const articleExpand = document.createElement('span');

  articleDiv.appendChild(articleTitle);
  articleDiv.appendChild(articleDate);
  articleDiv.appendChild(article1st);
  articleDiv.appendChild(artcile2nd);
  articleDiv.appendChild(artcile3rd);
  articleDiv.appendChild(articleExpand);

  articleDiv.classList.add('article');
  articleDate.classList.add('date');
  articleExpand.classList.add('expandButton')

  articleTitle.textContent = title;
  articleDate.textContent = date;
  article1st.textContent = firstParagraph;
  artcile2nd.textContent = secondParagraph;
  artcile3rd.textContent = thirdParagraph;
  articleExpand.textContent = '+';

  articleExpand.addEventListener('click', () => {
    articleExpand.classList.toggle('article-open');
  })
    return articleDiv;
}
const testArticle = articleMaker( data );

const panelElements = data.map(element => {
  return articleMaker(element);
})
console.log(panelElements)

panelElements.forEach(elemToAdd => {
  theFeed.appendChild(elemToAdd)
})