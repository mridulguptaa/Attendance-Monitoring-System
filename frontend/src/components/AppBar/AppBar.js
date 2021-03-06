import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LockIcon from '@material-ui/icons/Lock';

import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerRoot:{
      background:'#000000',
  },
  whiteColor:{
      color:'#FFFFFF'
  },
  backgroundWhite:{
      backgroundColor:'#FFFFFF'
  }
};
const theme=createMuiTheme({
    palette:{
        primary:{
            main:'#2196f3'
        },
        secondary:{
            main:'#ff5722'
        }
    },
    typography:{
        fontSize:13.5,
        fontFamily:'Algerian'
    }
});
class ButtonAppBar extends React.Component{
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
      };

      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
    adminSignOut=()=>{
        this.props.signOutAdmin();
    }
    studentSignOut=()=>{
        this.props.signOutStudent();
    }
    facultySignOut=()=>{
        this.props.signOutFaculty();
    }
    render(){
        const { classes } = this.props;
        const isAdminLoggedIn=this.props.isAdminLoggedIn;
        const isStudentLoggedIn=this.props.isStudentLoggedIn;
        const isFacultyLoggedIn=this.props.isFacultyLoggedIn;
//        console.log(isAdminLoggedIn);
        const sideList = (
          <div className={classes.list}>
                <List>
                    <Link to ="/">
                        <ListItem button>
                            <ListItemIcon  classes={{root:classes.whiteColor}}><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Home" classes={{primary:classes.whiteColor}}></ListItemText> 
                        </ListItem>
                    </Link>
                    <Link to="/studentlogin">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary="Student Login" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/facultylogin">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><SupervisorAccountIcon /></ListItemIcon>
                            <ListItemText primary="Faculty Login" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/studentsignup">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><MailIcon /></ListItemIcon>
                            <ListItemText primary="Student Sign Up" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/facultysignup">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><MailIcon /></ListItemIcon>
                            <ListItemText primary="Faculty Sign Up" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                </List>
                <Divider variant ="middle" classes={{middle:classes.backgroundWhite}}/>
          </div>
        );
        const sideListAdmin = (
          <div className={classes.list}>
                <List>
                    <Link to ="/admin">
                        <ListItem button>
                            <ListItemIcon  classes={{root:classes.whiteColor}}><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Admin Home" classes={{primary:classes.whiteColor}}></ListItemText> 
                        </ListItem>
                    </Link>
                    <Link to="/adminlogin">
                        <ListItem button onClick={this.adminSignOut}>
                            <ListItemIcon classes={{root:classes.whiteColor}}><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary="Sign Out" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                </List>
                <Divider variant ="middle" classes={{middle:classes.backgroundWhite}}/>
          </div>
        );
        
        const sideListStudent = (
          <div className={classes.list}>
                <List>
                    <Link to ="/student">
                        <ListItem button>
                            <ListItemIcon  classes={{root:classes.whiteColor}}><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Student Home" classes={{primary:classes.whiteColor}}></ListItemText> 
                        </ListItem>
                    </Link>
                    <Link to ="/studentupdatepassword">
                        <ListItem button>
                            <ListItemIcon  classes={{root:classes.whiteColor}}><LockIcon /></ListItemIcon>
                            <ListItemText primary="Update Password" classes={{primary:classes.whiteColor}}></ListItemText> 
                        </ListItem>
                    </Link>
                    <Link to="/studentlogin">
                        <ListItem button onClick={this.studentSignOut}>
                            <ListItemIcon classes={{root:classes.whiteColor}}><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary="Sign Out" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                </List>
                <Divider variant ="middle" classes={{middle:classes.backgroundWhite}}/>
          </div>
        );
        const sideListFaculty = (
          <div className={classes.list}>
                <List>
                    <Link to ="/faculty">
                        <ListItem button>
                            <ListItemIcon  classes={{root:classes.whiteColor}}><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Faculty Home" classes={{primary:classes.whiteColor}}></ListItemText> 
                        </ListItem>
                    </Link>
                    <Link to ="/facultyupdatepassword">
                        <ListItem button>
                            <ListItemIcon  classes={{root:classes.whiteColor}}><LockIcon /></ListItemIcon>
                            <ListItemText primary="Update Password" classes={{primary:classes.whiteColor}}></ListItemText> 
                        </ListItem>
                    </Link>
                    <Link to="/facultylogin">
                        <ListItem button onClick={this.facultySignOut}>
                            <ListItemIcon classes={{root:classes.whiteColor}}><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary="Sign Out" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                </List>
                <Divider variant ="middle" classes={{middle:classes.backgroundWhite}}/>
          </div>
        );
        
        return (
            <div className={`${classes.root} tl`}>
            <MuiThemeProvider theme={theme}>
              <AppBar position="static" color="primary">
                <Toolbar>
                  <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                    ATTENDANCE MONITORING SYSTEM
                  </Typography>
                </Toolbar>
              </AppBar>
                </MuiThemeProvider>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)} classes={{paper:classes.drawerRoot}}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('left', false)}
                    onKeyDown={this.toggleDrawer('left', false)}
                  >
                    {
                        (isAdminLoggedIn===true)?sideListAdmin:(isStudentLoggedIn===true)?sideListStudent:(isFacultyLoggedIn===true)?sideListFaculty:sideList
                    }
                  </div>
                </Drawer>
            </div>
            
          );
    }
  
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps=(state)=>{
    return{
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn,
        isStudentLoggedIn:state.loginStudentReducer.isStudentLoggedIn,
        isFacultyLoggedIn:state.loginFacultyReducer.isFacultyLoggedIn,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signOutAdmin:()=>{
            dispatch(actions.loadAdmin(false));
        },
        signOutStudent:()=>{
            dispatch(actions.loginStudent(false));
        },
        signOutFaculty:()=>{
            dispatch(actions.loginFaculty(false));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ButtonAppBar));