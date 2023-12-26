function Singer({singers}){
    const {Name, Age, Location} = singers;
    return(
        <div className="person">
            <h1>Name:{Name} </h1>
            <h3>Age:{Age} </h3>
            <h2>Location: {Location}</h2>
        </div>
    )
}

export default Singer