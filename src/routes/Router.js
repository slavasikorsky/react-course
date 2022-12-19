import React from 'react';
import {Routes, Route} from 'react-router-dom';

import PrivateLayout from '../layout/PrivateLayout';
import PublicLayout from '../layout/PublicLayout';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import NoMutch from '../pages/NoMatch';
import Post from '../pages/Post';

const PublicRoute = () => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route index path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/products/:id' element={<Post />} />
                <Route path='*' element={<NoMutch />} />
            </Route>
            <Route element={<PrivateLayout />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='*' element={<NoMutch />} />
            </Route>
        </Routes>
    );
};

export default PublicRoute;