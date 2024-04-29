import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayaout(){
    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    )
}