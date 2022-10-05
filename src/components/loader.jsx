export default function Loader(){
    return(
        <div className = "loader">
            <div className = "loader__box" >
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                <div className = "lodaer__text">
                <p className = "lodaer__load">Loading...</p>
                <p>Whait please...</p>
                </div>
            </div>
            
            
        </div>
    )
}