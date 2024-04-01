import { createSlice } from '@reduxjs/toolkit';

export interface User{
    name: string;
    email: string;
    github: string
}

export interface UserWithId extends User {
    id: string;
}
const initialState: UserWithId[] = [
        {
            id: "1",
            name: "Jane Smith",
            email: "jane@example.com",
            github: "borisgoldzamd",
          },
          {
            id: "2",
            name: "Mike Johnson",
            email: "mike@example.com",
            github: "mikejohnson",
          },
          {
            id: "3",
            name: "Alice Brown",
            email: "alice@example.com",
            github: "alicebrown",
          },
          {
            id: "4",
            name: "David Clark",
            email: "david@example.com",
            github: "davidclark",
          },
          {
            id: "5",
            name: "John Doe",
            email: "john@example.com",
            github: "johndoe",
          },
          {
            id: "6",
            name: "Emily White",
            email: "emily@example.com",
            github: "emilywhite",
          },
]
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default usersSlice.reducer;