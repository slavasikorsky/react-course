import React, { useState } from 'react';

import DashboardContent from '../../components/DashboardContent';
import Popup from '../../components/Popup';
import Input from '../../components/UI/Input';
import Form from '../../components/UI/Form';
import Post from './Post';

import './Posts.scss'

const Posts = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'Title',
            author: 'Admin',
            status: 'publish',
            data: '02/02/22',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing el'
        },
        {
            id: 2,
            title: 'Title another',
            author: 'V. Zelenskiy',
            status: 'publish',
            data: '05/02/22',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing el'
        }
    ]);

    const [updatePost, setUpdatePost] = useState({});

    const submitHandler = (e, id) => {
        e.preventDefault();
        if (id) {
            const updatedPost = posts.map(post => (
                post.id == id
                ? { ...post, 
                    title: e.target.title.value,
                    author: e.target.author.value
                }
                : post
            ));
            setPosts(updatedPost);
        } else {
            const newID = Math.floor(Math.random() * 99999);
            setPosts([...posts, {
                id: newID,
                title: e.target.title.value,
                author: e.target.author.value
            }]);
        }
        setOpenPopup(!openPopup);
        setUpdatePost(false);
    };

    const editHandler = (postId) => {
        setOpenPopup(!openPopup);
        const updated = posts.filter(post => post.id === postId);
        setUpdatePost(updated[0]);
    }

    const deleteHandler = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return (
        <DashboardContent>
            <h1>Posts</h1>
            <button onClick={()=>setOpenPopup(!openPopup)}>New post</button>
            <ul className='posts'>
            {posts && posts.map((post, index) => (
                <Post
                    key={index}
                    id={post.id} 
                    title={post.title}
                    author={post.author}
                    status={post.status}
                    data={post.data}
                    text={post.text}
                    onEdit={editHandler}
                    onDelete={deleteHandler}
                />
            ))}
            </ul>
            <Popup trigger={openPopup} setTtiger={setOpenPopup}>
                <Form onSubmit={(e)=>submitHandler(e, updatePost.id)}>
                    <Input 
                        type={'text'} 
                        name={'title'} 
                        placeholder={'Title'} 
                        onChange={e=>setUpdatePost({...updatePost, title: e.target.value})} 
                        value={updatePost.title || ''} 
                    />
                    <Input 
                        type={'text'} 
                        name={'author'} 
                        placeholder={'Author'} 
                        onChange={e=>setUpdatePost({...updatePost, author: e.target.value})}
                        value={updatePost.author || ''}
                    />
                    <button type={'submit'}>Add</button>
                </Form>
            </Popup>
        </DashboardContent>
    );
};

export default Posts;