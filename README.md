
#  Book Library Application

This is a simple React application that functions as a **book library**, allowing users to add books, mark them as read/unread, and update book titles. It leverages **Redux Toolkit** for state management and **Tailwind CSS** for styling.

---

##  Features

- **Add Books:** Easily add new books to your library with a title.
- **Toggle Read Status:** Mark books as "Read" or "Unread" with a single click.
- **Update Book Titles:** Edit the title of existing books.
- **Responsive Design:** Built with Tailwind CSS for a clean and responsive user interface.

---

##  Technologies Used

- **React** – A JavaScript library for building user interfaces.
- **Redux Toolkit** – The official, opinionated toolset for efficient Redux development.
- **Tailwind CSS** – A utility-first CSS framework for rapid UI development.

---

##  Getting Started

Follow these steps to run the project locally.

###  Prerequisites

Make sure you have the following installed:

- Node.js (LTS version recommended)
- npm or Yarn

###  Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd <your-project-folder>
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn install
Run the development server:

bash
Copy
Edit
npm start
# or
yarn start
Your app should now be running at http://localhost:3000.

🗂 Project Structure
bash
Copy
Edit
src/
├── App.js           # Main application component where Redux store is likely configured
├── Books.js         # Primary component for displaying and managing books
└── bookSlice.js     # Redux slice for managing book-related state (actions and reducers)
 How to Use
Add a Book: Type a book title into the input field and click the "Add" button.

Toggle Read Status: Click the "Toggle" button next to a book to mark it as "Read" (green) or "Unread" (red).

Edit a Book: Click the "Edit" button next to a book. An input field will appear for editing the title. Click "Save" to confirm or "Cancel" to discard changes
