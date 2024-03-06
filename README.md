# basic-informational-site

This is a basic informational site with a home, about, and contact page. There's also a 404 page when serving a page that doesn't exist. This project was meant as practice for creating a Node.js server file and serving the right page according to the URL.

There are two scripts that can both serve the HTML files in this project. The only difference between the two is that `index.js` uses Node's native `http` module while `express-index.js` uses the Express framework.

Feel free to clone this repository and start the site on localhost by running either `node index.js` or `node express-index.js` on your terminal!

## Lessons Learned

- Creating a server with Node's `http` module.
- Reading files with Node's `fs` module.
- Creating a server with the Express framework.
