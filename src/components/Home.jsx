import "../styles/Home.css"

export default function Home ({ data, onClick }) {
    return(
        <div className="home">
            {data.map((dataItem)=>{
                return (
                    <div
                        key={dataItem.id}
                        className="homeCard"
                        style={{
                            background: `url(${dataItem.thumbnail.path}.${dataItem.thumbnail.extension}) no-repeat center`,
                            backgroundSize:'cover'
                        }}
                        onClick={()=> onClick(dataItem.id)}                    
                        >

                        <div className="caption">{dataItem.name}</div>
                        <div className="caption bottom">view Comic</div>  
                    </div>
                );
            })}

        </div>
    );
}