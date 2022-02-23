import { createStyles, makeStyles , Theme } from '@material-ui/core/styles';
import { CSSProperties } from "@material-ui/core/styles/withStyles";


function setItemFontStyles(fontFamily: string,
  fontStyle: string,
  fontWeight: any,
  fontSize: string,
  lineHeight: string,
  color?: string): CSSProperties {
  return {
    fontFamily: fontFamily,
    fontStyle: fontStyle,
    fontWeight: fontWeight,
    fontSize: fontSize,
    lineHeight: lineHeight,
    color: color && color,
    margin:0
  }
}
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  
    PuzzleLevelSelectWrapper:{
      position:"relative",
      cursor:"pointer",
      "& >div":{
       display:"flex",
       alignItems:"center",
       justifyContent:"center",
       background:"#E8EAF4",
       borderRadius:"6px",
       transition: "rotate 1s",
       padding:"0.3125rem 0.9375rem",
       flexDirection:"row-reverse",
       "& >p":{
         ...setItemFontStyles("Open Sans","normal","normal","1rem","1.375rem","#424242"),
         paddingRight:"1.25rem",
       }
      }
     },
     SelectedLevel:{
      background:"#FFFFFF!important",
      border:"0.5px solid #FFDD02!important",
      "& svg":{
        transform: "rotate(-180deg)"
      }
     },
     LevelsSelectOptions:{
      position:"absolute",
      background: "#FFFFFF",
      boxShadow: "0px 4px 20px rgba(33, 33, 33, 0.15)",
      borderRadius: "8px",
      marginTop: "0.3125rem",
      right: 0,
      padding:0,
      listStyle:"none",
      width:"100%",
      zIndex:999,
      overflowY:"auto",
      "& >li":{
        "& >p":{
          ...setItemFontStyles("Open Sans","normal","normal","0.875rem","1.1875rem","#616161"),
          "&:hover":{
            color:"#000000!important"
          }
        },
        "&:hover":{
          backgroundColor:"#F3F4F9",
          borderRadius:"6px",
        },
        padding:"0.625rem 0.9375rem",
        margin:"0.3125rem",
        cursor:"pointer",
        display:"flex",
        justifyContent:"center"
      }
    },
  }),
);