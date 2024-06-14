import { useEffect, useRef } from "react";

export type TargetConfig = {
    targetColor: string,
    cooldown: number,
    h: string,
    w: string,
    setPoint: Function
}
export default function Target({ config }: { config: TargetConfig }){
    const target = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if(!target.current?.parentElement) return;
        const style = target.current.parentElement.style;
        const interval = setInterval(() => {
            if(!target.current) return;
            target.current.style.display = 'block';
            style.paddingTop = 'calc(' + Math.round(Math.random() * 95) + `vh - ${config.h})`;
            style.paddingLeft = 'calc(' + Math.round(Math.random() * 100) + `vw - ${config.w})`;
        }, config.cooldown);
        return () => clearInterval(interval);
    }, []);
    function clickHandler(){
        if(!target.current) return;
        config.setPoint((prev: number) => prev + 1);
        target.current.style.display = 'none';
    }
    const ButtonStyle: React.CSSProperties = {
        background: config.targetColor,
        borderRadius: '50%',
        height: config.h,
        width: config.w,
        border: 'none'
    }
    return (
        <button id="target" ref={target} onClick={clickHandler} style={ButtonStyle}></button>
    )
}