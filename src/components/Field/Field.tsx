import { useState } from "react";
import Target, { TargetConfig } from "../Target/Target";
import styles from './Field.module.css';

export type FieldSettings = {
    targetColor: string,
    cooldown: number,
    h: string,
    w: string
}
export default function Field({ settings }: { settings: FieldSettings }){
    const [ point, setPoint ] = useState(0);
    const [ showField, setShowField ] = useState(false);
    const targetConfig: TargetConfig = {
        ...settings,
        setPoint
    }
    return (
        <>
            {!showField ?
                (
                <div className={styles.mainMenu}>
                    {point != 0 && <div className={styles.stats} id="stats">
                        <p>YOU LOSE</p>
                        <span>POINTS: {point}</span>
                    </div>}
                    <button
                    className={styles.btn} 
                    onClick={() => {setShowField(true); setPoint(0);}}
                    >START</button>
                </div>
                ) :
                (
                    <>
                        <div className={styles.hud}>
                            <span>{point}</span>
                            <button 
                            onClick={() => setShowField(false)}
                            className={styles.btn}>STOP</button>
                        </div>
                        <div id="field" className={styles.field}><Target config={targetConfig}/></div>    
                    </>
                )
            }
        </>
    )
}