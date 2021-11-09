import React from 'react';
import {Route, Routes} from "react-router-dom";
import {About, AnnounceIdPage, Contacts, Documents, Main, Questions, UserSettings} from "../../pages";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/documents" element={<Documents/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/account-settings" element={<UserSettings/>}/>
            <Route path="/questions" element={<Questions/>}/>
            <Route path="/announces/:id" element={<AnnounceIdPage/>}/>
        </Routes>
    )
};