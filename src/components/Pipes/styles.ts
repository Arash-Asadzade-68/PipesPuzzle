import { createStyles, makeStyles , Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
      border: "2px solid blue",
      cursor: "pointer",
      margin:"auto",
      display: "flex",
      marginTop: "2rem"
    },
    controller:{
       display:"flex",
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center',
       '& > div:last-child':{
         marginTop:'2rem'
       }
    },
    loader:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      width:"100%",
      margin:'5rem 0'
    }
  }),
);