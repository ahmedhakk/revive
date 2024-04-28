import AppLayout from "./ui/AppLayout";
import "./styles/GlobalStyles.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Member from "./pages/Member";
import NewMember from "./pages/NewMember";
import Note from "./pages/Note";
import Settings from "./pages/Settings";
import TodayTasks from "./pages/TodayTasks";
import PageNotFound from "./pages/PageNotFound";
import MemberStatus from "./features/member/MemberStatus";
import MemberDetail from "./features/member/MemberDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="member" element={<Member />}>
            <Route path="status" element={<MemberStatus />} />
            <Route path="status/:memberId" element={<MemberDetail />} />
            <Route path="new-member" element={<NewMember />} />
          </Route>
          <Route path="note" element={<Note />} />
          <Route path="settings" element={<Settings />} />
          <Route path="today-tasks" element={<TodayTasks />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
