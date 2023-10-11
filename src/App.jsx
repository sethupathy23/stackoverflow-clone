import { Routes, Route, Link, Navigate } from "react-router-dom";
// import Login from "./Login";
import Header from "./components/Header/Header";
import Login from "./Login";
import Mainquestion from "./Mainquestion";
import Addquestions from "./Addquestions";
import ViewQuestion from "./ViewQuestion";
import Main from "./Mainn";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/users/login" element={<Login />} /> */}
        <Route path="/addquestions" element={<Addquestions />} />
        <Route
          path="/"
          element={
            //  <ProtectedRoute>
            <Home />
            //  </ProtectedRoute>
          }
        />
        <Route path="/question" element={<Mainquestion />} />
        <Route path="/viewquestion" element={<ViewQuestion />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Main />} /> */}
      </Routes>
    </div>
  );
}

// function ProtectedRoute( {children} ) {
//   const token = localStorage.getItem("token");
//   return (
//     token ?
// <section>
// {children}
//    </section> :
//    <Navigate replace to="/login" />

//   )
// }

export default App;
