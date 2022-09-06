import './Repeat.css'

type type_repeat = {
    numTimes: number;
    children: any;
    display_flex:boolean;
  }

const Repeat = (props:type_repeat) => {

    let items:number[] = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }

    return <div className={String(props.display_flex)}>{items}</div>;
}

export default Repeat