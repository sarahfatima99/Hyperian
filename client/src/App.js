
import "tailwindcss/dist/base.css";
import "./styles/globalStyles.css";
import AccountBox from "components/accountbox";
import {  Route, Routes, Router } from 'react-router-dom';
import Form from "components/FormFields/Form";
import Home from 'components/Home'
import ErrorPage from "Pages/ErrorPages/ErrorPage";
import ViewForm from "Pages/ViewForm/ViewForm";
import Workspace from "Pages/Workspace/Workspace";
import Response from "Pages/Response/Response";
import FormModal from 'components/FormFields/FormModal'
const App = () => {
  return (<>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<AccountBox/>} />
      <Route path="/viewfrom" element={<ViewForm/>}></Route>
      <Route path="/formpage" element={<Form/>}></Route>
      <Route path="/response" element={<Response/>}></Route> 
      <Route path="/errorpage404" element={<ErrorPage pageType="404" Content="Opps! Page not found" description="Sorry, the page you're looking for doesn't exist." />}></Route>
      <Route path="/errorpage401" element={<ErrorPage pageType="401" Content="No authorization found" description="This page is not publically available"/>}></Route>
      <Route path="/errorpage403" element={<ErrorPage pageType="403" Content="Access Denied / Forbidden" description="The page you are trying to access is absolutly forbidden for some reason"/>}></Route>
      <Route path="/errorpage500" element={<ErrorPage pageType="500" Content="Internal Server Error" description="The server encountered an internal error or misconfiguration and was unable to complete your request"/>}></Route>
      <Route path="/errorpage502" element={<ErrorPage pageType="502" Content="Bad Gateway" description="The server encountered a temporary error and could not complete your request."/>}></Route>
      <Route path="/errorpage503" element={<ErrorPage pageType="503" Content="Service Unavailable" description="Service temporarily unavailable,try again later"/>}></Route>
      <Route path="/errorpage504" element={<ErrorPage pageType="504" Content="Gateway Timeout" description="We are sorry that it's a bit longer than you expected."/>}></Route>
    </Routes>

  </>)
}

export default App;
