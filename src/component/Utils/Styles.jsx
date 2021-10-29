/* Basic Styles */
import Colors from './Colors';
import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles({
  root: {
    padding: "0",
    margin: "0",
  },
  appContainer: {
    display: "flex",
    flexFlow: "column",
    minHeight: '100vh',
    maxWidth: "unset",
    padding: "0",
    margin: "0",
    background: `linear-gradient(to left top, ${Colors.palette.primaryColor} 50%,${Colors.palette.secondaryColor} 50%)`
  },
  /* ================ Authentication ================ */
  // Login, Signup panel
  authCard: {
    flex: 1,
    margin: "2rem auto",
    borderRadius: "unset !important",
    width: "35vw",
    height: "-webkit-fill-available"
  },
  authCardHeader: {
    backgroundColor: `${Colors.palette.primaryColor}`,
    color: `${Colors.palette.white}`,
    height: "20vh",
    textAlign: "center"
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
    marginLeft: "1rem",
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
    paddingTop: "35px",
    margin: "0",
    backgroundColor: `${Colors.palette.secondaryColor} !important`,
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
  modalCard: {
    flex: 1,
    margin: "2rem auto",
    borderRadius: "unset !important",
    width: "40vw",
    height: "-webkit-fill-available",
    //backgroundColor: `${Colors.palette.secondaryColor}`,
  },
  modalCardContent: {
    padding: "0 !important",
    backgroundColor: `${Colors.palette.secondaryColor}`,
  },
  modalCardHeader: {
   // backgroundColor: `${Colors.palette.secondaryColor}`,
    height: "20vh",
    textAlign: "center"
  },
  modalClsBtn: {
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