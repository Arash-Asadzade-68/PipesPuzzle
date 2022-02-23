// eslint-disable-next-line
import React , {useState} from 'react';
import { ReactComponent as ArrowDown } from "../../assets/images/icon-arrow-down.svg";
import {useStyles} from "./styles";

interface IPuzzleLevelSelect {
    onClick: (level:number) => void;
    selectedLevel:number
}

export function PuzzleLevelSelect({
    onClick,
    selectedLevel
}: IPuzzleLevelSelect) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const classes = useStyles();
    function renderOptions(){
        const Options = [];
        for (let i = 1; i <= 6; i++) {
          Options.push(
            <li key={i} onClick={()=>{
              onClick(i);
              setIsOpen(false)}}>
                 <p>{i}</p>
          </li>
          )
        }
        return Options
    }
    return <div className={classes.PuzzleLevelSelectWrapper} tabIndex={-1} onBlur={()=>setIsOpen(false)}>
      <div onClick={()=>setIsOpen(!isOpen)}
         className={isOpen ? classes.SelectedLevel :undefined}
      >
        <ArrowDown/>
        {<p>{selectedLevel}</p> }
    </div>
    {isOpen && <ul className={classes.LevelsSelectOptions}>
      {renderOptions()}
    </ul>}
    </div>
}