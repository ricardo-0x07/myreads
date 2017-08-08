# React Nanodegree: my-reads-app
1. The app allows you to select and categorize books you have read, are currently reading, or want to read.
2. The main page show three categories (or “bookshelves”) for books (currently reading, want to read, and read).
3. The main page allow users to move books between .
4. When the browser is refreshed, the same information is displayed on the page.
5. The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page.
6. Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
7. When an item is categorized on the search page, and the user navigates to the main page, it appears on that shelf in the main page.
8. The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
9. The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.
10. Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.
11. Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.

# Installation

1. Fork the repository, download it and run both 'npm install' form the application root.
2. The run the "nmpm start" command from the root directory to start app.

## Usage
1. After the application has been loaded successfully, use the links to navigate between the search and main pages.
2. Use search page to find new books to add to your shelves and click books dropdown and select the shelf it should be on.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

1.

## Credits

1. The udacity nano degree team provided the guidance and training i required to complete the initial version of this project.


## License
MIT License

Copyright (c) 2016 Clive Cadogan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## changelog
1. 


# Running the Build Process

1. Once the build process has been set up as described above navigate to the root directory of the project and type "gulp" and press enter to run the default task this will open the application in the browser.
2. While the application is running via the build process several gulp tasks will be watching for changes and errors in the css, js, html and spec files and update the distribution files automatically. The browser will be refreshed for changes to the index.html.

#Versioning
 Version 1. 

## Backend Server
The [`BooksAPI.js`](src/BooksAPI.js) file contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 
