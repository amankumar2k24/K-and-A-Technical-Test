import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBillPage from "../pages/CreateBillPage";
import BillsListPage from "../pages/BillsListPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<CreateBillPage />} />
            <Route path="/bills" element={<BillsListPage />} />
        </Routes>
    )
}

export default AppRoutes;