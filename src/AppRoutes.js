import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import LoginPage from "./Auth/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AppSidebar from "./layout/Sidebar";
import CategoriesAdd from "./pages/CategoriesAdd/CategoriesAdd";
import CategoriesPage from "./pages/CategoriesPage";
import CategoriesUpdatePage from "./pages/CategoriesUpdatePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import Products from "./Products";


const AppRoutes = () => {
    const isAuth = useSelector((state) => state.user.isAuth);
    
    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth}/>}>
                <Route path="/" element={<AppSidebar/>}>
                    <Route path="products" element={<Products/>}/>
                    <Route path="products/:id" element={<ProductDetailPage/>}/>
                    <Route path="categories" element={<CategoriesPage/>}/>
                    <Route path="category/:id" element={<CategoriesUpdatePage/>}/>
                    <Route path="category/add" element={<CategoriesAdd/>}/>
                </Route>
            </Route>
            <Route path="/auth" element={<Auth/>}>
                <Route path="login" element={<LoginPage/>}/>
            </Route>
        </Routes>
    );
}

export default AppRoutes;