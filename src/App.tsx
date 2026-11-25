import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Blog from './pages/Blog';
import Board from './pages/Board';
import Faqs from './pages/Faqs';
import Home from './pages/Home';
import Investments from './pages/Investments';
import Loans from './pages/Loans';
import NotFound from './pages/NotFound';
import Savings from './pages/Savings';
import Supervisory from './pages/Supervisory';
import Terms from './pages/Terms';
import Welfare from './pages/Welfare';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="board" element={<Board />} />
          <Route path="supervisory-committee" element={<Supervisory />} />
          <Route path="welfare" element={<Welfare />} />
          <Route path="savings-products" element={<Savings />} />
          <Route path="loan-products" element={<Loans />} />
          <Route path="investment-products" element={<Investments />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          {/* Old site URLs. On the old site these two were swapped: board-members-2 was the board. */}
          <Route path="board-members-2" element={<Navigate to="/board" replace />} />
          <Route path="board-members" element={<Navigate to="/supervisory-committee" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
