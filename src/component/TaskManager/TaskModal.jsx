import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AccountContext } from "../../context/AccountContext";
import { Container } from "@material-ui/core";
import {
  Button,
  Box,
  Typography,
  Grid,
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
import Header from "../Header/Header";


const TaskModal = () => {

  //use context
  const { taskList, dispatchTaskList, errorFlg, setErrorFlg } = useContext(AccountContext);

  //use style component
  const globalClasses = Styles();

  //private state
  const [open, setOpen] = React.useState(false);

  //methods
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
            // onSubmit={create}
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
                // value={task.titla}
                // onChange={(e) => handleChange(e, "title")}
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
                // value={task.description}
                // onChange={(e) => handleChange(e, "description")}

                />
                {/* validation error msg */}
                {errorFlg && <FormHelperText id="outlined-adornment-description">Description is required</FormHelperText>}
              </FormControl>

              {/* Create Button */}
              <Button
                variant="contained"
                type="submit"
                disabled
                className={globalClasses.createBtn}
              >Create</Button>
            </Box>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default TaskModal;
