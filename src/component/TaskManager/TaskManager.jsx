import React, { useContext } from 'react';
import { AppContext } from "../../context/AppContext";
import { Container } from "@material-ui/core";
import {
  Typography,
  Grid,
} from '@mui/material';
import { MdModeEdit, MdDelete } from "react-icons/md";
import Styles from '../Utils/Styles';
import Header from "../Header/Header";
import TaskModal from './TaskModal';

const TaskManager = () => {

  //use context
  const { taskList, dispatchTaskList, userList, errorFlg, setErrorFlg } = useContext(AppContext);

  console.log("tasklist", taskList);
  const targetTasks = taskList.tasks.filter(elem => elem.loginUser === userList.loginUser.email);
  console.log(targetTasks);

  //use style component
  const globalClasses = Styles();

  return (
    <>
      {/* Header */}
      <Header />

      {/* Task list */}
      <Container className={globalClasses.dashBoardContainer}>
        {targetTasks.length !== 0 ?
          <Grid
            container
            direction="row"
            //justifyContent="center"
            alignItems="center"
            className={globalClasses.taskList}>
            {targetTasks.map((elem, index) => (
              <>
                <Grid
                  item
                  key={index}
                  xs={1} sm={2} md={3} lg={4}
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
                  <Typography
                    variant="h5"
                    component="p"
                    className={globalClasses.taskTitle}>
                    {elem.title}
                  </Typography>
                  <Typography variant="h6" component="p">
                    {elem.description}
                  </Typography>
                </Grid>
              </>
            ))}
          </Grid>
          : <Typography
            variant="h5"
            component="p"
            className={globalClasses.msg}>No Task Added Yet</Typography>}

        {/* Modal */}
        <TaskModal />

      </Container>
    </>
  );
};

export default TaskManager;
