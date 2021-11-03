/* Basic Styles */
import Colors from './Colors';
import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles({
  root: {
    padding: "0",
    margin: "0",
    fontFamily: "'Signika', sans-serif !important"
  },
  appContainer: {
    display: "flex",
    flexFlow: "column",
    minHeight: '100vh',
    maxWidth: "unset",
    padding: "0",
    margin: "0",
    background: `linear-gradient(to left top, ${Colors.palette.primaryColor} 50%,${Colors.palette.secondaryColor} 50%)`,
  },
  /* ================ Authentication ================ */
  // Login, Signup panel
  authCard: {
    flex: 1,
    margin: "2rem auto",
    borderRadius: "unset !important",
    width: "35vw",
    height: "-webkit-fill-available",
  },
  authCardHeader: {
    backgroundColor: `${Colors.palette.primaryColor}`,
    color: `${Colors.palette.white}`,
    height: "20vh",
    textAlign: "center",
  },
  authCardContent: {
    padding: "0 !important"
  },
  // Form
  icon: {
    color: `${Colors.palette.primaryColor} !important`,
    fontSize: "1.5rem !important"
  },
  authForm: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  authInput: {
    width: "90% !important"
  },
  links: {
    textAlign: "center",
    width: "100%",
    margin: "1rem 0 !important"
  },
  routeLink: {
    paddingLeft: "1rem",
    textAlign: "center",
    width: "100%",
  },
  authButton: {
    width: "50%",
    margin: "auto !important",
    marginTop: "1rem !important",
    display: "block",
    textTransform: "unset !important",
    backgroundColor: `${Colors.palette.primaryColor} !important`,
    '&:hover, &:focus': { backgroundColor: `${Colors.palette.primaryColorDark} !important` },
  },
  /* ================ Task Manager Dashboard ================ */
  // Header
  dashBoardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: `${Colors.palette.primaryColor} !important`,
    padding: "1rem",
    position: "fixed",
    width: "-webkit-fill-available",
    top: "0",
    left: "0",
    height: "35px",
  },
  headerTxt: {
    color: `${Colors.palette.white}`,
    marginLeft: "1rem !important",
    //fontFamily: "'Signika', sans-serif !important"
  },
  logoutBtn: {
    color: `${Colors.palette.primaryColor}`,
    backgroundColor: `${Colors.palette.thirdColor} !important`,
    marginRight: "1rem",
    textTransform: "unset !important",
    '&:hover, &:focus': { backgroundColor: `${Colors.palette.thirdColorDark} !important` },
  },
  // Dashboard
  dashBoardContainer: {
    display: "flex",
    flexFlow: "column",
    minHeight: '100vh',
    maxWidth: "unset",
    padding: "0",
    paddingTop: "80px",
    margin: "0",
    backgroundColor: `${Colors.palette.secondaryColor} !important`,
  },
  taskList: {
    //flex: "1",
    gridGap: "1rem",
    margin: "0 auto",
    width: "95% !important"
  },
  taskItem: {
    position: "relative",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    backgroundColor: `${Colors.palette.gray2} !important`,
    padding: "2rem !important",
    minHeight: "30vh"
  },
  taskTitle: {
    fontWeight: "bold !important",
    marginTop: "2rem",
  },
  editBtn: {
    position: "absolute",
    top: "5%",
    right: "20%",
    marginRight: "0.5rem",
    padding: "0.5rem",
    minWidth: "unset !important",
    minHeight: "unset",
    width: "25px",
    height: "25px",
    display: "block !important",
    borderRadius: "50% !important",
    lineHeight: "inherit !important",
    textTransform: "unset !important",
    backgroundColor: `${Colors.palette.thirdColor} !important`,
    '&:hover, &:focus': { backgroundColor: `${Colors.palette.thirdColorDark} !important` },
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
  },
  deleteBtn: {
    position: "absolute",
    top: "5%",
    right: "5%",
    minWidth: "unset !important",
    minHeight: "unset",
    padding: "0.5rem",
    width: "25px",
    height: "25px",
    display: "block !important",
    borderRadius: "50% !important",
    lineHeight: "inherit !important",
    textTransform: "unset !important",
    backgroundColor: `${Colors.palette.red} !important`,
    '&:hover, &:focus': { backgroundColor: `${Colors.palette.redDark} !important` },
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
  },
  msg: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  //modal popup
  modalBtn: {
    position: "absolute !important",
    bottom: "3%",
    right: "3%",
    minWidth: "unset !important",
    minHeight: "unset",
    width: "50px",
    height: "50px",
    display: "block !important",
    fontSize: "3rem !important",
    borderRadius: "50% !important",
    lineHeight: "inherit !important",
    textTransform: "unset !important",
    color: `${Colors.palette.primaryColor} !important`,
    '&:hover, &:focus': { color: `${Colors.palette.primaryColorDark} !important` },
  },
  modalPopUp: {
    outline: "none !important",
    border: "none !important",
    "&:focus": {
      outline: "none !important",
    }
  },
  modalCard: {
    // position:"absolute",
    // top:"45%",
    // left:"50%",
    // transform:"translate(-45%,-50%)",
    flex: "1",
    margin: "2rem auto",
    width: "45vw",
    height: "80vh",
    // height: "-webkit-fill-available",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px !important",
    border: "none !important",
    borderInline: "none !important"
  },
  modalCardContent: {
    position: "relative",
    padding: "0 !important",
    backgroundColor: `${Colors.palette.secondaryColor}`,
    height: "inherit"
  },
  modalCardHeader: {
    // backgroundColor: `${Colors.palette.secondaryColor}`,
    height: "20vh",
    textAlign: "center"
  },
  modalClsBtn: {
    position: "absolute",
    top: "3%",
    right: "3%",
    minWidth: "unset !important",
    minHeight: "unset",
    width: "40px",
    height: "40px",
    display: "block !important",
    fontSize: "3rem !important",
    borderRadius: "50% !important",
    lineHeight: "inherit !important",
    textTransform: "unset !important",
    color: `${Colors.palette.primaryColor} !important`,
    '&:hover, &:focus': { color: `${Colors.palette.primaryColorDark} !important` },
  },
  modalForm: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${Colors.palette.secondaryColor}`,
  },
  modalInput: {
    width: "90% !important"
  },
  createBtn: {
    width: "50%",
    margin: "auto !important",
    marginTop: "1rem !important",
    display: "block",
    textTransform: "unset !important",
    backgroundColor: `${Colors.palette.gray} !important`,
  },
  createBtnActive: {
    width: "50%",
    margin: "auto !important",
    marginTop: "1rem !important",
    display: "block",
    textTransform: "unset !important",
    backgroundColor: `${Colors.palette.primaryColor} !important`,
    '&:hover, &:focus': { backgroundColor: `${Colors.palette.primaryColorDark} !important` },
  },
});

export default Styles;