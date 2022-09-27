import React from "react";

// import table dari MUI
import {Button, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";

// Kita akan menerima sebuah props dengan nama "todos"
const TodoTable = ({todos, fnSelesaikanTodo}) => {
    return(
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>ToDo Id</TableCell>
                    <TableCell>ToDo Nama</TableCell>
                    <TableCell>ToDo Status</TableCell>
                    <TableCell>ToDo Aksi</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {/* kita akan membuat isi table berdasarkan props todos */}

                {/* todos = array of object */}
                {/* todo = object */}
                {todos.map((todo) => {
                    return( 
                        <TableRow key={todo.id}>
                            <TableCell>{todo.id}</TableCell>
                            <TableCell>{todo.nama}</TableCell>
                            <TableCell>{todo.udahSelesaiBelum ? "Selesai" : "Belum Selesai"}</TableCell>
                            <TableCell>{todo.udahSelesaiBelum ? ("") : (<><Button variant="outlined" size="small" onClick={() =>fnSelesaikanTodo(todo.id)}>Selesaikan</Button></>)}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

export default TodoTable;