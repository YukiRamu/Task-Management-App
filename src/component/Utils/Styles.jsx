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
  // Login, Signup panel
  authCard: {
    flex: 1,
    margin: "2rem auto",
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: " translate(-50%, -50%)",
    borderRadius: "unset !important",
    width: "35vw",
    height: "-webkit-fill-available"
    //height: "85%",
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
  // authCardActions: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
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
    backgroundColor: `${Colors.palette.primaryColor} !important`,
    '&:hover': { backgroundColor: `${Colors.palette.primaryColorDark}` },
  },
});

export default Styles;