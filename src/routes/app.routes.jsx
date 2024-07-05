import { Route, Routes } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Details } from "../Pages/Details"; 
import { Profile } from "../Pages/Profile";
import { Preview } from "../Pages/Preview";

export function AppRoutes(){

return(
<Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/Details" element={<Details/>}/>
 <Route path="/Profile" element={<Profile/>}/>
 <Route path="/Preview" element={<Preview/>}/>

</Routes>

)

}