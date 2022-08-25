import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Main Imports
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Icon
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TableChartIcon from "@mui/icons-material/TableChart";
import PublicIcon from '@mui/icons-material/Public';
import NotesIcon from "@mui/icons-material/Notes";
import PeopleIcon from "@mui/icons-material/People";
import PasswordIcon from "@mui/icons-material/Password";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ApartmentIcon from '@mui/icons-material/Apartment';
import ViewListIcon from '@mui/icons-material/ViewList';

const role = "super-admin";
export const mainListItems = (
    <>
        {
            role ===  "super-admin" && (
                <>
                    <ListButton icon={<DashboardIcon/>} title="Dashboard" link={`/dashboard/super-admin`}/>
                    <ListButton icon={<InsertChartIcon/>} title="Analytics" link={`/dashboard/analytics/super-admin`}/>
                    <ListButton icon={<ModeEditIcon/>} title="Edit Grievance Form" link={`/dashboard/edit-grievance-form/super-admin`}/>
                    <DropdownListButton icon={<TableChartIcon/>} title="Base Table"
                        subMenus={[
                            {
                                id: 1,
                                icon: <PublicIcon/>,
                                title:"Countries",
                                link: "/dashboard/base_tables/countries",
                            },
                            {
                                id: 2,
                                icon: <ApartmentIcon/>,
                                title:"State",
                                link: "/dashboard/base_tables/state",
                            },
                            {
                                id: 3,
                                icon: <CheckCircleIcon/>,
                                title:"Total Grievance",
                                link: "/dashboard/base_tables/total-grievance",
                            },
                            {
                                id: 4,
                                icon: <AssignmentTurnedInIcon/>,
                                title:"Solved Grievance",
                                link: "/dashboard/base_tables/solved-grievance",
                                
                            },
                            {
                                id: 5,
                                icon: <ModeEditIcon/>,
                                title:"Unsolved Grievance",
                                link: "/dashboard/base_tables/unsolved-grievance",
                            },
                        ]}
                    />
                    <ListButton icon={<AccountCircleIcon/>} title="User" link={`/dashboard/user/super-admin`}/>
                    <ListButton icon={<PasswordIcon/>} title="Change Password" link={`/dashboard/change-password/super-admin`}/>
                </>
            )
        }
        {
            role ==="ministry-admin" && (
                <>
                    <ListButton name="super-admin-dashboard" icon={<DashboardIcon/>} title="Dashboard" link={`dashboard/ministry-admin`}/>
                    <ListButton icon={<InsertChartIcon/>} title="Analytics" link={`dashboard/analytics/ministry-admin`}/>
                    <ListButton icon={<ModeEditIcon/>} title="Edit Grievance Form" link={`dashboard/edit-grievance-form/ministry-admin`}/>
                    <DropdownListButton icon={<TableChartIcon/>} title="Base Table"
                        subMenus={[
                            {
                                id: 1,
                                icon: <PublicIcon/>,
                                title:"Countries",
                                link: "/dashboard/base_tables/countries",
                            },
                            {
                                id: 2,
                                icon: <ApartmentIcon/>,
                                title:"State",
                                link: "/dashboard/base_tables/state",
                            },
                            {
                                id: 3,
                                icon: <ApartmentIcon/>,
                                title:"Total Grievance",
                                link: "/dashboard/base_tables/total-grievance",
                            },
                            {
                                id: 4,
                                icon: <AssignmentTurnedInIcon/>,
                                title:"Solved Grievance",
                                link: "/dashboard/base_tables/solved-grievance",
                            },
                            {
                                id: 5,
                                icon: <ModeEditIcon/>,
                                title:"Unsolved Grievance",
                                link: "/dashboard/base_tables/unsolved-grievance",
                            }
                        ]}
                    />
                    <ListButton icon={<AccountCircleIcon/>} title="User" link={`/dashboard/user/ministry-admin`}/>
                    <ListButton icon={<PasswordIcon/>} title="Change Password" link={`/dashboard/change-password/ministry-admin`}/>
                </>
            )
        }
        {
            role === "department-admin" && (
                <>
                    <ListButton icon={<DashboardIcon/>} title="Dashboard" link={`/dashboard/department-admin`}/>
                    <ListButton icon={<InsertChartIcon/>} title="Analytics" link={`/dashboard/analytics/department-admin`}/>
                    <ListButton icon={<AssignmentTurnedInIcon/>} title="Solved Grievance" link={`/dashboard/solved-grievance/department-admin`}/>
                    <ListButton icon={<PendingActionsIcon/>} title="Unsolved Grievance" link={`/dashboard/unsolved-grievance/department-admin`}/>
                    <ListButton icon={<PeopleIcon/>} title="Edit Profile" link={`/dashboard/edit-profile/department-admin`}/>
                    <ListButton icon={<PasswordIcon/>} title="Change Password" link={`/dashboard/change-password/department-admin`}/>
                </>
            )
        }
        {
            role === "organization-admin" && (
                <>
                    <ListButton icon={<DashboardIcon/>} title="Dashboard" link={`/dashboard/organization-admin`}/>
                    <ListButton icon={<InsertChartIcon/>} title="Analytics" link={`/dashboard/analytics/organization-admin`}/>
                    <ListButton icon={<ModeEditIcon/>} title="Edit Grievance Form" link={`dashboard/edit-grievance-form/organization-admin`}/>
                    <ListButton icon={<AssignmentTurnedInIcon/>} title="Solved Grievance" link={`/dashboard/solved-grievance/organization-admin`}/>
                    <ListButton icon={<PendingActionsIcon/>} title="Unsolved Grievance" link={`/dashboard/unsolved-grievance/organization-admin`}/>
                    <ListButton icon={<PeopleIcon/>} title="Edit Profile" link={`/dashboard/edit-profile/organization-admin`}/>
                    <ListButton icon={<PasswordIcon/>} title="Change Password" link={`/dashboard/change-password/organization-admin`}/>
                </>
            )
        }
        {
            role === "user" && (
                <>
                    <ListButton icon={<DashboardIcon/>} title="Dashboard" link={`/dashboard/user`}/>
                    <ListButton icon={<NotesIcon/>} title="Lodge Grievance"  link={`/dashboard/lodge-grievance/user`}/>
                    <ListButton icon={<ViewListIcon/>} title="Grievance Registered"  link={`/dashboard/grievance-registered/user`}/>
                    <ListButton icon={<PeopleIcon/>} title="Edit Profile" link={`/dashboard/edit-profile/user`}/> 
                    <ListButton icon={<PasswordIcon/>} title="Change Password" link={`/dashboard/change-password/user`}/>
                </>
            )
        }
    </>
)

function ListButton({ icon, title, link }) {
    const navigate = useNavigate();
    const handleClick = () => navigate(link);
    return (
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    );
}

function DropdownListButton({ icon, title, subMenus }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => setOpen(!open);
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
          {open ? <ExpandLess sx={{marginLeft:'5px'}} color="action" /> : <ExpandMore sx={{marginLeft:'5px'}} color="action" />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {subMenus.map((submenu) => (
            <List component="div" disablePadding key={submenu.id} onClick={() => navigate(submenu.link)}>
              <ListItemButton>
                <ListItemIcon>{submenu.icon}</ListItemIcon>
                <ListItemText primary={submenu.title} />
              </ListItemButton>
            </List>
          ))}
        </Collapse>
      </>
    );
}