import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, toggleRead, updateBook } from './bookSlice';

export default function Books() {
    const [title, setTitle] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const books = useSelector(state => state.books);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (title.trim()) {
            dispatch(addBook(title));
            setTitle('');
        }
    };

    const handleUpdate = (id) => {
        if (newTitle.trim()) {
            dispatch(updateBook({ id, newTitle }));
            setEditingId(null);
            setNewTitle('');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-center"> Book Library</h2>

            <div className="flex gap-2">
                <input
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Enter Book Title"
                />
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    Add
                </button>
            </div>

            <ul className="space-y-2">
                {books.map(book => (
                    <li
                        key={book.id}
                        className="flex flex-col gap-1 p-2 border-b"
                    >
                        {editingId === book.id ? (
                            <div className="flex gap-2">
                                <input
                                    className="flex-1 border p-1 rounded"
                                    value={newTitle}
                                    onChange={e => setNewTitle(e.target.value)}
                                />
                                <button
                                    onClick={() => handleUpdate(book.id)}
                                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => {
                                        setEditingId(null);
                                        setNewTitle('');
                                    }}
                                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <div className="flex justify-between items-center">
                                <span>
                                    <span className="font-medium">{book.title}</span> —{' '}
                                    <span className={book.read ? 'text-green-600' : 'text-red-600'}>
                                        {book.read ? ' Read' : ' Unread'}
                                    </span>
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => dispatch(toggleRead(book.id))}
                                        className="text-sm text-white  bg-purple-400 border px-2 py-1 rounded hover:bg-purple-300"
                                    >
                                        Toggle
                                    </button>
                                    <button
                                        onClick={() => {
                                            setEditingId(book.id);
                                            setNewTitle(book.title);
                                        }}
                                        className="text-sm text-white bg-yellow-500 border px-2 py-1 rounded hover:bg-yellow-400"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
