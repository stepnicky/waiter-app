import Home from "./components/pages/Home/Home";
import SingleTable from "./components/pages/SingleTable/SingleTable";
import { Routes, Route } from 'react-router-dom';
import NotFound from "./components/pages/NotFound/NotFound";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Container } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesRedux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => (fetchTables(dispatch)), [dispatch]);

  return (
    <div>
      <Container>
        <Header/>
        <Routes>
          <Route path="/" element={ < Home /> } />
          <Route path="/table/:id" element={< SingleTable />} />
          <Route path="*" element={< NotFound />} />
        </Routes>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
