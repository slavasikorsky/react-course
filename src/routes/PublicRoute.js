import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from '../layout';
import About from '../pages/About';
import Home from '../pages/Home';
import NoMutch from '../pages/NoMatch';
import Post from '../pages/Post';

const PublicRoute = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/post/:id' element={<Post />} />
                <Route path='*' element={<NoMutch />} />
            </Route>
        </Routes>
    );
};

export default PublicRoute;