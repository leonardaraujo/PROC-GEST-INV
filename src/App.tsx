import { GlobalStyle } from "./components/style/Globalstyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SendScheduleEmail from "./pages/SendScheduleEmail";
import UploadDocuments from "./pages/UploadDocuments";
import Notifications from "./pages/Notifications";
import SharedLayout from "./components/SharedLayout";
import NotFound from "./components/NotFound";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="send-schedule-by-email"
            element={<SendScheduleEmail />}
          />
          <Route path="upload-documents" element={<UploadDocuments />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
