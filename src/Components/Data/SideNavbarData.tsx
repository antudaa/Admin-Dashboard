'use client';

// Department & Designation 
import department from "@/Assets/Icons/Department.png";
import designation from "@/Assets/Icons/Designation.png";
import details from "@/Assets/Icons/Details.png";
import addDesignation from "@/Assets/Icons/addDesignaiton.png";
import addDepartment from "@/Assets/Icons/plus.png";
import asign from "@/Assets/Icons/assignUser.png"

// Employee 
import Employee from "@/Assets/Icons/employee.png";
import AddEmployee from "@/Assets/Icons/addEmployee.png";

// Leave 
import LeaveApplications from "@/Assets/Icons/leaveApplications.png";
import leaveSettings from "@/Assets/Icons/leaveSettings.png";

// User 
import user from "@/Assets/Icons/user.png";
import addUser from "@/Assets/Icons/add-user.png";

// Attendance 
import attendance from "@/Assets/Icons/Attendance.png";
import viewAttendance from "@/Assets/Icons/viewAttendance.png";


export const data = {
    department : [
        {
            name: "Departments",
            icon: department
        },
        {
            name: "Add Dept",
            icon: addDepartment
        },
        {
            name: "Designation",
            icon: designation
        },
        {
            name: "Add Des",
            icon: addDesignation
        },
        {
            name: "Assgin",
            icon: asign
        },
    ],
    employee : [
        {
            name: "Employees",
            icon: Employee
        },
        {
            name: "Add Employee",
            icon: AddEmployee
        },
    ],
    Attendance : [
        {
            name: "Attendance",
            icon: attendance
        },
        {
            name: "View Attendacne",
            icon: viewAttendance
        },
    ],
    Leave : [
        {
            name: "Applications",
            icon: LeaveApplications
        },
        {
            name: "Leave Settings",
            icon: leaveSettings
        },
        {
            name: "Leave History",
            icon: leaveSettings
        }
    ],
    user : [
        {
            name: "User",
            icon: user
        },
        {
            name: "Add User",
            icon: addUser
        },
    ]

}
