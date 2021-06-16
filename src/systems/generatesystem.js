import  "./generatesystem.css"
import {useEffect} from 'react' 
export const GenerateSystem = (props) => {
    useEffect(() => {
console.log(props)
    })
    return(<div className={props.starType}>System 
    <p>{props.name}</p></div>)
}