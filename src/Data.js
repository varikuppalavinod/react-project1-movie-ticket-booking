import{useSelector} from "react-redux"

const Data = () => {

   const amount=useSelector((state)=>state.user.amount)
   const name=useSelector(state=>state.user.name)
   const mnumber=useSelector(state=>state.user.mobilenumber)

   
    
    return (
        <div>
            <table style={{ border: "1x solid black", borderCollapse: "collapse" ,marginLeft:"30px",width:"38%"}}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black", padding: "8x" }}>Balance</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Username</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "8px" }}>{amount}</td>
                        <td style={{ border: "1px solid black", padding: "8px" }}>{name}</td>
                        <td style={{ border: "1px solid black", padding: "8px" }}>{mnumber}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Data;
