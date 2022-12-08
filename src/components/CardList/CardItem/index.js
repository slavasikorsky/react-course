import React from 'react';
import './CardItem.scss';
import placeholder from '../../../assets/images/placeholder.png';
import Button from '../../Button';

const CardItem = (props) => {
    const link = props.id;
    const title = props.title  || 'Title not found';
    const imgSrc = props.imgSrc || placeholder;
    const clName = props.clName || 'grid__item';
    //for masonry grid text limited by 100 symbols, for top news = 300
    const limiter = (clName.includes('masonry') ? 120 : 400 );
    const text = props.text.substring(0, limiter) + '...';
    const views = props.views;
    const comments = props.comments;
    
    return (
        <div className={clName}>
            <img src={imgSrc} alt={title} className="grid__item-image" />
            <div className="grid__item-content">
                <h3 className="grid__item-title">{title}</h3>
                {text && 
                    (<p className="grid__item-text">{text}</p>)
                }
                <div className="item-bottom">
                    <Button className="button--with-arrow" href={link}>Read more</Button>
                    <div className="grid__item-stats">
                        <span className="grid__item-views">{views}</span>
                        <span className="grid__item-comments">{comments}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;