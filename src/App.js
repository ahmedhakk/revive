import AppLayout from "./ui/AppLayout";
import "./styles/GlobalStyles.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Member from "./pages/Member";
import NewMember from "./pages/NewMember";
import Settings from "./pages/Settings";
// import Inbox from "./pages/Inbox";
// import Note from "./pages/Note";
// import TodayTasks from "./pages/TodayTasks";
import PageNotFound from "./pages/PageNotFound";
import MemberStatus from "./features/member/MemberStatus";
import MemberDetail from "./features/member/MemberDetail";
import Login from "./pages/Login";
import UserManagement from "./pages/UserManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="member" element={<Member />}>
            <Route path="status" element={<MemberStatus />} />
            <Route path="status/:memberId" element={<MemberDetail />} />
            <Route path="new-member" element={<NewMember />} />
          </Route>
          <Route path="settings" element={<Settings />} />
          <Route path="user-management" element={<UserManagement />} />

          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="inbox" element={<Inbox />} /> */}
          {/* <Route path="note" element={<Note />} /> */}
          {/* <Route path="today-tasks" element={<TodayTasks />} /> */}
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
