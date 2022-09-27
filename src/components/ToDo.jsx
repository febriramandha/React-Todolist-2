import React, {useState} from "react";

import ToDoForm from "./ToDoForm";
import TodoTable from "./ToDoTable";

import {Typography} from "@mui/material";

// Kita bikin compenentnya
const ToDo = () => {
    // ingin memiliki suatu data yg raktif yg nemplok di component ini

    // Data gak cuman data primitif
    // State awalnya adalah suatu "ARRAY OF OBJECT"
    
    // indexnya ada 2
    // 0 = nama dari variable state
    // 1 = setter dari si state nya
    const [todos, setTodos] = useState([
        // data awalnya maunya seperti apa
            { id: 1, nama: "Review React", udahSelesaiBelum: true },
            { id: 2, nama: "Belajar Nge-State", udahSelesaiBelum: false },
            { id: 3, nama: "Belajar Nge-Component", udahSelesaiBelum: false },
    ]);

    // fungsi untuk menambah si todos
    const tambahTodos = (todoYangBaru) => {
        // pertama harus tau/membuat id yg paling terakhir 
        const idYangBaru = todos[todos.length - 1].id + 1;

        // asumsi todo yg baru suatu string (nama dari todo)
        const objectTodoYangBaru = {
            id: idYangBaru,
            nama: todoYangBaru,
            udahSelesaiBelum: false,
        };

        setTodos([...todos, objectTodoYangBaru]);
    };

    const selesaikanSebuahTodo = (idTodoYangInginDiselesaikan) => {
        // manipulasi array dan membuat suatu array baru
        const arrayOfObjectTodosYangBaru = todos.map(todo => {
            // kita buat logicnya
            // apabila todo punya id sama dengan idTodoYangInginDiselesaikan membuat udahSelesaiBelum menjadi true
            if(todo.id === idTodoYangInginDiselesaikan) {
                todo.udahSelesaiBelum = true;
            }

            // map HARUS ADA RETURN
            return todo;
        });

        // ganti State todos dengan setTodos
        setTodos(arrayOfObjectTodosYangBaru);
    };

    return <>
        <Typography variant="h5">Sebuah Aplikasi Todo</Typography>

        {/* kita akan memberikan si fungsi tambahTodos ke dalam ToDoForm */}

        <ToDoForm fnTambahTodos={tambahTodos} />

        {/* Kita harus melempar si todos ke dalam TodoTable menggunakan props */}

        {/* gunakan Props lagi untuk mengirimkan fungsi selesaikansebuah */}
        <TodoTable todos={todos} fnSelesaikanTodo={selesaikanSebuahTodo} />
    </>;
};

export default ToDo;