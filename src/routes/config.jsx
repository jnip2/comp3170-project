import { Route } from "react-router-dom";

import Home from "./Home";
import Layout from "../components/Layout";
import LibraryArchive from "./LibraryArchive";

export const config = (
    <Route element={<Layout />}>
        <Route path='/'>
            <Route index element={<Home />} />
            <Route path='archive'>
                <Route index element={<LibraryArchive />} />
            </Route>
        </Route>
    </Route>
)