import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import LoginFirst from '../../LoginFirst/LoginFirst';

const AdminHome=(props)=>{
//    console.log(props)
    if(props.isAdminLoggedIn===false){
        return <LoginFirst></LoginFirst>
    }
    else{
        return(
        <div className="adminHomeBackground white">
            <h2 className="ma0">Welcome Admin</h2><br></br><br/>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <Link to="/addstudent" className="noUnderline">
                    <Button variant="contained" color="secondary">
                        Add Student
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Link to="/removestudent" className="noUnderline">
                <Button variant="contained" color="secondary">
                    Remove Student
                </Button>
                </Link>
            </Grid>
                
            <Grid item xs={12} sm={4}>
                <Link to="/viewstudentlist" className="noUnderline">
                    <Button variant="contained" color="secondary" >
                        View Student List
                    </Button>
                </Link>
            </Grid>
                
            <Grid item xs={12}>
                <hr width="80%" align="center"></hr>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Link to="/addfaculty" className="noUnderline">
                <Button variant="contained" color="secondary">
                    Add Faculty
                </Button></Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Link to="/removefaculty" className="noUnderline">
                    <Button variant="contained" color="secondary">
                        Remove Faculty
                    </Button>
                </Link>
            </Grid>
                
            <Grid item xs={12} sm={4}>
                <Link to="/viewfacultylist" className="noUnderline">
                    <Button variant="contained" color="secondary" >
                        View Faculty List
                    </Button>
                </Link>
            </Grid>
                
            <Grid item xs={12}>
                <hr width="80%" align="center"></hr>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Link to="/addclass" className="noUnderline">
                <Button variant="contained" color="secondary">
                    Add Class
                </Button>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Link to="/removeclass" className="noUnderline">
                    <Button variant="contained" color="secondary">
                        Remove Class
                    </Button>
                </Link>
            </Grid>
                
            <Grid item xs={12} sm={4}>
                <Link to="/viewclasslist" className="noUnderline">
                    <Button variant="contained" color="secondary" >
                        View Class List
                    </Button>
                </Link>
            </Grid>
            
            <Grid item xs={12}>
                <hr width="80%" align="center"></hr>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Link to="/addcourse" className="noUnderline">
            <Button variant="contained" color="secondary">
                Add Course
                </Button></Link>
            </Grid>
                <Grid item xs={12} sm={4}>
            <Link to="/removecourse" className="noUnderline">
            <Button variant="contained" color="secondary">
                Remove Course
                </Button></Link>
                </Grid>
                
                <Grid item xs={12} sm={4}>
                    <Link to="/viewcourselist" className="noUnderline">
                        <Button variant="contained" color="secondary" >
                            View Course List
                        </Button>
                    </Link>
                </Grid>
                
                <Grid item xs={12}>
                    <hr width="80%" align="center"></hr>
                </Grid>
            <Grid item xs={12} sm={4}>
            <Link to="/assigncourse" className="noUnderline">
            <Button variant="contained" color="secondary">
                Assign Course to Student
                </Button></Link>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Link to="/deassigncourse" className="noUnderline">
            <Button variant="contained" color="secondary">
                Deassign Course to Student
                </Button></Link>
            </Grid>
                
            <Grid item xs={12} sm={4}>
                <Link to="/viewcourseassignmentlist" className="noUnderline">
                    <Button variant="contained" color="secondary" >
                        View Course Assignment List
                    </Button>
                </Link>
            </Grid>
                
            <Grid item xs={12}>
                <hr width="80%" align="center"></hr></Grid>
                <Grid item xs={12} sm={4}>
            <Link to="/assignfaculty" className="noUnderline">
            <Button variant="contained" color="secondary">
                Assign Class to Faculty
                </Button></Link>
                </Grid>
                <Grid item xs={12} sm={4}>
            <Link to="/deassignfaculty" className="noUnderline">
            <Button variant="contained" color="secondary">
                Deassign Class to Faculty
                </Button></Link></Grid>
                
                <Grid item xs={12} sm={4}>
                    <Link to="/viewfacultyassignmentlist" className="noUnderline">
                        <Button variant="contained" color="secondary" >
                            View Faculty Assignment List
                        </Button>
                    </Link>
                </Grid>
                
                <Grid item xs={12}>
                    <hr width="80%" align="center"></hr>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/viewdetentionlist" className="noUnderline">
                        <Button variant="contained" color="secondary" >
                            View Detention List
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
    }
    
};
const mapStateToProps=(state)=>{
    return {
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn
    }
}
export default connect(mapStateToProps,null)(AdminHome);