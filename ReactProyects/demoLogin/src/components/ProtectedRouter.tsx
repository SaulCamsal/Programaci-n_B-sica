import { Navigate, Outlet } from "react-router-dom";


export function ProtectedRouter({ isAllowed} : {isAllowed:boolean}){

    if(!isAllowed){
        return<Navigate to="/"></Navigate>
    }

    return <Outlet></Outlet>
}