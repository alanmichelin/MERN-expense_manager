
const FormatItem = (props) =>{
    var date = new Date(props.date).toISOString().split('T')[0]

    return(
        <p>Description: {props.description} Amount: {props.amount} Type: {props.type} Date: {date} </p>
    )
}

export default FormatItem