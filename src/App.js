import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DashboardWrapper from  "./components/dashboard/Dashboard";
import './App.css';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <>
      <Router>
        <DashboardWrapper>
          <Routes> 

            {/* Dashboard */}
            <Route path="/dashboard/super-admin" element={<Dashboard/>}/>
            <Route path='/dashboard/ministry-admin'/>
            <Route path='/dashboard/organization-admin'/>
            <Route path='/dashboard/department-admin'/>
            <Route path='/dashboard/user'/>

            {/* Analytics */}
            <Route path="/dashboard/analytics/super-admin" element={<Dashboard/>}/>
            <Route path='/dashboard/analytics/ministry-admin'/>
            <Route path='/dashboard/analytics/organization-admin'/>
            <Route path='/dashboard/analytics/department-admin'/>
            <Route path='/dashboard/user'/>

            {/* Base Table */}
            <Route path='/dashboard/base_table/countries'/>
            <Route path='/dashboard/base_table/state'/>
            <Route path='/dashboard/base_table/total-grievance'/>
            <Route path='/dashboard/base_table/solved-grievance'/>
            <Route path='/dashboard/base_table/unsolved-grievance'/>

            {/* Edit Grievance Form */}
            <Route path='/dashboard/edit-grievance-form/super-admin'/>
            <Route path='/dashboard/edit-grievance-form/ministry-admin'/>
            <Route path='/dashboard/edit-grievance-form/organization-admin'/>

            {/* Solved Grievance */}
            <Route path='/dashboard/solved-grievance/organization-admin'/>
            <Route path='/dashboard/solved-grievance/department-admin'/>

            {/* Unsolved Grievance */}
            <Route path='/dashboard/unsolved-grievance/organization-admin'/>
            <Route path='/dashboard/unsolved-grievance/department-admin'/>

            {/* Edit Profile */}
            <Route path='/dashboard/edit-profile/organization-admin'/>
            <Route path='/dashboard/edit-profile/department-admin'/>
            <Route path='/dashboard/edit-profile/user'/>

            {/* User Data */}
            <Route path='/dashboard/user/super-admin' />
            <Route path='/dashboard/user/ministry-admin' />

            {/* Change Password */}
            <Route path='/dashboard/change-password/super-admin'/>
            <Route path='/dashboard/change-password/ministry-admin'/>
            <Route path='/dashboard/change-password/organization-admin'/>
            <Route path='/dashboard/change-password/department-admin'/>
            <Route path='/dashboard/change-password/user'/>
          </Routes>
        </DashboardWrapper>
      </Router>
    </>
  );
}

export default App;
