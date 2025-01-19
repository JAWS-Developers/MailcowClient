import { BrowserRouter, Route, Routes } from "react-router-dom"
import MailPage from "../pages/Mail/MailPage"
import CalendarPage from "../pages/Cal/CalendarPage"
import { CalSideBarComponent } from "../components/cal/CalSideBarComponent"
import CalFrameComponent from "../components/frame/CalFrameComponent"

export const CalendarStack = () => {

    return (
        <CalFrameComponent>
            <Routes>
                <Route path="*" element={<CalendarPage />} />
            </Routes>
        </CalFrameComponent>
    )
}