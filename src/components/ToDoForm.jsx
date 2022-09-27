import React, {useState} from "react";

// import TextFiled
import {TextField} from "@mui/material";
// import button dari si MUI
import Button from "@mui/material/Button";

// Functional componentnya
const ToDoForm = ({fnTambahTodos}) => {
    // kita harus memiliki suatu state untuk menampung value dari input
    const [inputData, setInputData] = useState("");

    // fungsi untuk menghandle perubahan dari si input
    const formInputOnChangeHandler = (event) => {
        // ambil dari "DOM"
        setInputData(event.target.value);
    };

    const formOnSubmitHandler = (event) => {
        // supaya tidak refresh
        event.preventDefault();

        // TODO: kita akan tambahkan sesuatu disini!
        fnTambahTodos(inputData);

        // kosongkan isi dari input data
        setInputData("");
    };

    return (
        <form style={{margin: "0.5em 0"}} onSubmit={formOnSubmitHandler}>
            <TextField type="text" variant="outlined" label="Input ToDo yang baru.." style={{marginRight: "0.5em"}} value={inputData} onChange={formInputOnChangeHandler} size="small" />
            <Button variant="contained" type="submit" size="small">Tambah ToDo</Button>
        </form>
    );
};

export default ToDoForm;