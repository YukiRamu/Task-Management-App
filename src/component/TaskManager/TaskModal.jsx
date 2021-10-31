import React, { useState, useContext } from 'react';
import { AccountContext } from "../../context/AccountContext";
import {
  Button,
  Box,
  Card,
  CardHeader,
  CardContent,
  FormControl,
  FormHelperText,
  OutlinedInput,
  InputLabel,
  Modal
} from '@mui/material';
import { MdAddCircle, MdCancel } from "react-icons/md";
import Styles from '../Utils/Styles';
import uuid from 'react-uuid'

const TaskModal = () => {

  //use context
  const { taskList, dispatchTaskList, errorFlg, setErrorFlg } = useContext(AccountContext);

  //use style component
  const globalClasses = Styles();

  //private state
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  //methods
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e, prop) => {
    setTask({ ...task, [prop]: e.target.value });
  };

  const createTask = (e) => {
    e.preventDefault();
    console.log("submit");
    //dispatch
  };

  return (
    <>
      {/* Open Modal Button */}
      <MdAddCircle
        className={globalClasses.modalBtn}
        onClick={handleOpen}
      />
      {/* Modal pop up */}
      <Modal
        open={open}
        onClose={handleClose}
        className={globalClasses.modalPopUp}
      >
        <Card sx={{ minWidth: 275 }} className={globalClasses.modalCard}>
          <CardContent className={globalClasses.modalCardContent}>
            {/* Header */}
            <CardHeader
              className={globalClasses.modalCardHeader}
              title="Hey, You can Add your Task Here"
              titleTypographyProps={{ variant: 'h4' }}
            />
            <MdCancel
              className={globalClasses.modalClsBtn}
              onClick={handleClose}
            />
            {/* ============ Form ============ */}
            <Box
              component="form"
              noValidate
              className={globalClasses.modalForm}
              onSubmit={createTask}
            >
              {/* Title input */}
              <FormControl
                required
                className={globalClasses.modalInput}
                sx={{ m: 1, width: '25ch' }}
                variant="outlined"
                error={errorFlg}
                id="outlined-error-helper-text" //for validation error
              >
                <InputLabel htmlFor="outlined-adornment-title">Title</InputLabel>

                <OutlinedInput
                  id="outlined-adornment-title"
                  label="Title"
                  placeholder="Enter task title here"
                  value={task.title}
                  onChange={(e) => handleChange(e, "title")}
                />
                {/* validation error msg */}
                {errorFlg && <FormHelperText id="outlined-adornment-title">Task is required</FormHelperText>}
              </FormControl>

              {/* Description input */}
              <FormControl
                required
                className={globalClasses.modalInput}
                sx={{ m: 1, width: '25ch' }}
                variant="outlined"
                error={errorFlg}
                id="outlined-error-helper-text" //for validation error
              >
                <InputLabel htmlFor="outlined-adornment-password">Description</InputLabel>

                <OutlinedInput
                  id="outlined-adornment-description"
                  label="Description"
                  placeholder="Enter task description here"
                  value={task.description}
                  onChange={(e) => handleChange(e, "description")}
                />
                {/* validation error msg */}
                {errorFlg && <FormHelperText id="outlined-adornment-description">Description is required</FormHelperText>}
              </FormControl>

              {/* Create Button */}
              {(task.title === "" || task.description === "") ?
                <Button
                  variant="contained"
                  type="submit"
                  disabled
                  className={globalClasses.createBtn}
                >Create</Button> :
                <Button
                  variant="contained"
                  type="submit"
                  className={globalClasses.createBtnActive}
                >Create</Button>}
            </Box>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default TaskModal;
