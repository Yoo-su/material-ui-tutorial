import {useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { green, orange } from '@material-ui/core/colors';

import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

/*
makeStyles를 사용해서 원하는 스타일을 
이런 식으로 만들어 원하는 컴포넌트에 부여할 수 있다.
*/
const myButtonStyle=makeStyles({
  root:{
    border:0,
    borderRadius:20,
    background:'linear-gradient(45deg, #469840, #997000)',
    padding:'10px 30px',
    color:'white'
  }
})

/* 테마는 한 컴포넌트 전체에 공통으로 적용되는 스타일을
지정하고자 할 때 사용하는 것 같다.
*/
const myTheme=createMuiTheme({
  Typography:{
     
  }
})

/* FormControlLabel은 control속성값으로 다른 컴포넌트를 
받아서 label과 함께 사용할 수 있도록 해주는 것 같다. Checkbox와 
함께 사용해봤다. 
*/
function MyCheckBox(){
  const [checked, setChecked] = useState(true);
  return(
    <FormControlLabel 
        control={
          <Checkbox
            checked={checked}
            onChange={(e)=>{setChecked(e.target.checked)}}
            Icon={<NotificationsIcon />}
            checkedIcon={<NotificationsIcon />}
            variant='primary'
          />
        }
        label='개인정보 제공 동의'
        />
  );
}

//만든 스타일을 이런식으로 컴포넌트에 부여한다. 
function CustomButton(){
  const classes=myButtonStyle();
  return <Button className={classes.root} startIcon={<SentimentDissatisfiedIcon />}>마이버튼</Button>
}

function App() {
  return (
    <ThemeProvider theme={myTheme}>
    <div className="App">
      <header className="App-header">
         <AppBar style={{background:'#607d8b'}}>
           <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant='h6'>
                MUI Themeing
              </Typography>
              <Button>
                Login
              </Button>
           </Toolbar>
         </AppBar>
        <Typography variant='h2'>
           Welcome to MUI
        </Typography>
        <Typography variant='body1'>
           Learn Material UI ..!
        </Typography>

         {/* Material UI의 Grid를 활용해서 반응형 웹을 구현할 수 있다. 

           Grid item의 속성으로 xs(extra-small), sm(small), md(medium),
           lg(large), xl(exta-large) 다섯 가지를 줄 수 있는데, 브라우저가 해당 크기일 때
           Grid 아이템의 사이즈를 몇으로 할거냐를 결정하는 것이다. 1~12 값을 줄 수 있다.
           예를들면 xl={12} 이것의 의미는 브라우저 크기가 1920px~ 일때 공간 12를 차지하도록 한다는 뜻.
         */}
        <Grid container justify="center">
          <Grid item xl={6} sm={3}>
            <Paper elevation={0} style={{height:75,weight:50,padding:'0px 5px',margin:'0px 3px'}}>
              페이퍼1
            </Paper>
          </Grid>
          <Grid item xl={6} sm={3}>
            <Paper elevation={1} style={{height:75,weight:50,padding:'0px 5px',margin:'0px 3px'}}>
              페이퍼2
            </Paper>
          </Grid>
          <Grid item xl={6} sm={3}>
            <Paper elevation={2} style={{height:75,weight:50,padding:'0px 5px',margin:'0px 3px'}}>
              페이퍼3
            </Paper>
          </Grid>
        </Grid>
        <MyCheckBox />
        <CustomButton />
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
