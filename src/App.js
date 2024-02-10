import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PuchaseReturn from "./pages/vyapar/purchase return/PurchaseReturn";
import PaymentOut from "./pages/vyapar/payment out/PaymentOut";
import Purchase from "./pages/vyapar/add purchase/Purchase";
import PurchaseBill from "./pages/vyapar/purchase bill/PurchaseBill";
import FirstPurchase from "./pages/vyapar/first purchase/FirstPurchase";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/first-purchase" element={<FirstPurchase/>}/>
        <Route path="/payment-out" element={<PaymentOut />} />
        <Route path="/purchase" element={<Purchase/>}/>
        <Route path="/puchase-return" element={<PuchaseReturn/>}/>
        {/* <Route path="/purchase-bill" element={<PurchaseBill />} /> */}
        <Route path="/" element={<PurchaseBill />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
