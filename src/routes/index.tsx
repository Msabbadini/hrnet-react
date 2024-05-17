import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "#pages/index"
import PageListCurrentEmployees from "#/pages/employees"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/currentEmployees" element={<PageListCurrentEmployees />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router