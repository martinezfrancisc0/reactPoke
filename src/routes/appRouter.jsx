import { BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import Battle from "../pages/Battle";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/battle" element={<Battle />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;