import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import Main from "../Main/main"
import Subscription from "../Subscription/subscription"
import SubscriptionSettingoneMounth from "../Subscription/subscriptionSettingoneMounth"
import LoginPage from '../Login/loginPage'
import AddCase from "../Cases/addCase/addCase"
import CaseOne from "../Cases/CaseIt/mycaseone"
import CaseDetail from "../Cases/CaseIt/mycasetwelve"
import CaseImage from "../Cases/CaseIt/caseimage"
import Reset from '../Login/Reset.jsx'
function Root(){
    return(
        <>
         <Routes>
            <Route  element={<Layout/>}>
                <Route path="/" element={<Main/>}/>
                <Route  path="/subscription" element={<Subscription/>}/>
                <Route path="/subscription/subscriptionSettingOneMounth" element={<SubscriptionSettingoneMounth/>}/>
                <Route path="/loginPage" element={<LoginPage/>}/>
                <Route path="/addCase" element={<AddCase/>}/>
                <Route path="/CaseOne" element={<CaseOne/>}/>
                <Route path="/Reset" element={<Reset/>}/>
                <Route path="/case/:id" element={<CaseDetail/>}/>
            </Route>
            <Route path="/image/:id" element={<CaseImage/>} />

    
          </Routes>
        </>
    )
}

export default Root






