import NavBar from "../components/NavBar"
import "../styles.css"
import { Outlet, Link } from "react-router-dom";
import { Container } from "@mui/material";

export default function Layout() {
    return (
        <>
            <div className="App">
                <NavBar />
                <main>
                    <Container minWidth="lg">
                        <Outlet />
                    </Container>
                </main>
            </div>
        </>
    )
}