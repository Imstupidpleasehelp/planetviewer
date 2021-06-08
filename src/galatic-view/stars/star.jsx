import './stars.scss'

export const Star = (props) => {
    return (
        <div className={`starPreview ${props.starType}`}>
<h1>{props.name}</h1>
<h3>{props.starType}</h3>


        </div>
    )
}


