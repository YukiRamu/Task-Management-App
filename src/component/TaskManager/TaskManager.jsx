import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AccountContext } from "../../context/AccountContext";
import { Container } from "@material-ui/core";
import {
  Button,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material';
import { MdModeEdit, MdDelete } from "react-icons/md";
import Styles from '../Utils/Styles';
import Header from "../Header/Header";
import TaskModal from './TaskModal';

const TaskManager = () => {

  //use context
  const { taskList, dispatchTaskList, errorFlg, setErrorFlg } = useContext(AccountContext);

  //use style component
  const globalClasses = Styles();

  //route
  let history = useHistory();

  return (
    <>
      {/* Header */}
      <Header />

      {/* Task list */}
      <Container className={globalClasses.dashBoardContainer}>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
          className={globalClasses.taskList}>

          {/* {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={1} sm={4} md={3} lg={4} key={index}>
              <Typography variant="h5" component="p">
                Task Title
              </Typography>
              <Typography variant="h6" component="p">
                Task Description
              </Typography>
            </Grid>
          ))} */}

          <Grid
            item
            xs={1} sm={4} md={3} lg={4}
            className={globalClasses.taskItem}
          >
            <MdModeEdit
              className={globalClasses.editBtn}
            // onClick={handleClose}
            />
            <MdDelete
              className={globalClasses.deleteBtn}
            //onClick={handleClose}
            />
            <Typography variant="h5" component="p">
              Task Title
            </Typography>
            <Typography variant="h6" component="p">
              Task Description
            </Typography>
          </Grid>

          <Grid item xs={1} sm={4} md={3} lg={4}>
            <Typography variant="h5" component="p">
              Task Title
            </Typography>
            <Typography variant="h6" component="p">
              Task Description
            </Typography>
          </Grid>

          <Grid item xs={1} sm={4} md={3} lg={4}>
            <Typography variant="h5" component="p">
              Task Title
            </Typography>
            <Typography variant="h6" component="p">
              Task Description
            </Typography>
          </Grid>

          <Grid item xs={1} sm={4} md={3} lg={4}>
            <Typography variant="h5" component="p">
              Task Title
            </Typography>
            <Typography variant="h6" component="p">
              Task Description
            </Typography>
          </Grid>

          <Grid item xs={1} sm={4} md={3} lg={4}>
            <Typography variant="h5" component="p">
              Task Title
            </Typography>
            <Typography variant="h6" component="p">
              Task Description
            </Typography>
          </Grid>


        </Grid>

        {/* Modal */}
        <TaskModal />

      </Container>
    </>
  );
};

export default TaskManager;
