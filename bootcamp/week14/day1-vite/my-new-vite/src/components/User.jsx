import './user.css'
const User = (props) =>{
    return(
        <div className="dib bg-light-green br3 pa3 ma2 grow">
            <img src={`https://robohash.org/${props.id}?size=150x150`}/>
            <h2 className='title'>{props.name}</h2>
            <h4>{props.username}</h4>
            <p>{props.email}</p>
        </div>
    )
};
export default User;