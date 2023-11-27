import Dashboard from "./Dashboard";
import Template from "./Template";

function index() {
  return (
    <div style={{display:'flex',gap:'2rem'}}>
        <Dashboard/>
        <Template/>
    </div>
  )
}

export default index;