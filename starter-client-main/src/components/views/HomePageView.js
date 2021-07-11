import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif', 
    fontSize: '35px', 
    color: '#f8b195'
  },
  appBar:{
    backgroundColor: '#6c5b7b',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#6c5b77',
    width: "100%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  },
  imgcity:{
    justifyContent: 'center',
  },

}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            City Tech
          </Typography>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="outlined" color="warning" style={{marginRight: '10px'}}>
            <font color= "#f8b195">All Campuses</font>
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="outlined" color="warning">
            <font color= "#f8b195">All Students</font>
            </Button>
          </Link>


        </Toolbar>
      </AppBar>
      <font color = '#f8b195'>
      <div className={classes.greeting} ><h1>Home Page</h1></div>
      </font>
      <img className={classes.imgcity} src= 'https://wallpaperaccess.com/full/869.jpg'></img>

    </div>
  );    
}




export default HomePageView;