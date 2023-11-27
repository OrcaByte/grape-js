import { Suspense, lazy } from "react";
const Dashboard = lazy(()=>import('../src/Pages/Dashboard'));


const Loading = ()=>{
return (
    <div>Loading....</div>
)
}


const DashboardBoardSuspence = ()=>{
    return(
    <Suspense fallback={<Loading/>}>
        <Dashboard/>
    </Suspense>
    )
}




// export const routes = [

//     {
//         path:"/",
//         element: <DashboardBoardSuspence/>
//     },
// ]