import { createSlice, nanoid } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {
        addBook: (state, action) => {
            state.push({
                id: nanoid(),
                title: action.payload,
                read: false,
            });
        },
        toggleRead: (state, action) => {
            const book = state.find(b => b.id === action.payload);
            if (book) book.read = !book.read;
        },
        updateBook: (state, action) => {
            const { id, newTitle } = action.payload;
            const book = state.find(b => b.id === id);
            if (book) book.title = newTitle;


            // if (book !== undefined && book !== null) {
            //     book.title = newTitle;
            // }

            
        },
    }
});

export const { addBook, toggleRead, updateBook } = bookSlice.actions;
export default bookSlice.reducer;