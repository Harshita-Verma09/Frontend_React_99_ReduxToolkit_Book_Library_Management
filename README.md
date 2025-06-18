#Book Library Application
This is a simple React application that functions as a book library, allowing you to add, mark as read/unread, and update book titles. It leverages Redux Toolkit for state management and Tailwind CSS for styling.

#Features
Add Books: Easily add new books to your library with a title.
Toggle Read Status: Mark books as "Read" or "Unread" with a single click.
Update Book Titles: Edit the title of existing books.
Responsive Design: Built with Tailwind CSS for a clean and responsive user interface.
Technologies Used
React: A JavaScript library for building user interfaces.
Redux Toolkit: The official, opinionated, batteries-included toolset for efficient Redux development.
Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
Getting Started
Follow these steps to get the project up and running on your local machine.

#Prerequisites
Make sure you have the following installed:

Node.js (LTS version recommended)
npm or Yarn
Installation
Clone the repository:

Bash

git clone <your-repository-url>
cd <your-project-folder>
Install dependencies:

Bash

npm install
# or
yarn install
Run the development server:

Bash

npm start
# or
yarn start
This will open the application in your browser at http://localhost:3000.

#Project Structure
src/App.js: The main application component where the Redux store is likely configured.
src/Books.js: The primary component for displaying and managing books.
src/bookSlice.js: Defines the Redux slice for managing book-related state, including actions and reducers.
How to Use
Add a Book: Type a book title into the input field and click the "Add" button.
Toggle Read Status: Click the "Toggle" button next to a book to switch its read status between "Read" (green) and "Unread" (red).
Edit a Book: Click the "Edit" button next to a book. An input field will appear, allowing you to change the title. Click "Save" to confirm or "Cancel" to discard changes.
