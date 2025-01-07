import { BrowserRouter, Route, Routes } from "react-router-dom"
import MailPage from "../pages/Mail/MailPage"

export const MailStack = () => {

    return (
        <Routes>
            <Route path="*" element={<MailPage />} />
        </Routes>
    )
}