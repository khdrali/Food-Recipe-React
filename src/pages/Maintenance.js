import React from 'react'

function Maintenance(props){
    
    React.useEffect(()=>{
        if(
            props.maintenanceList.find((res)=>res===window.location.pathname)
        ){
            props.turnOnMaintenance();
        }else{
            props.turnOffMaintenance()
        };
    },[])
    return(
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:'100vh'
        }}>
            <div style={{
            display:'flex',
            justifyContent:'center',
            }}>
                <div>
            <img src="/image/fix-bug.png" width='300px' alt='cover
            '/>
            <h1>Page Under Maintenance</h1> 
                </div>
            </div>
        </div>
    )
}

export default Maintenance