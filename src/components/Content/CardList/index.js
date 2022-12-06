import React from 'react';
import CardItem from '../CardList/CardItem';
import './CardList.scss';
import Masonry from 'react-masonry-css'
import Button from '../../Button';

const CardList = (props) => {
    const cards = props.data;

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        992: 2,
        480: 1
      };

      
    return (
        <div className="grid">
            {/* Show first card like top news full container width */}
            <CardItem 
                clName = "grid__item"
                id={cards[0].id}
                title={cards[0].title} 
                imgSrc={cards[0].imgSrc}
                text={cards[0].text} 
                views={cards[0].views}
                comments={cards[0].comments}
            />
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="grid__masonry"
                columnClassName="grid__masonry__column" 
            >
                {/* Show other cards in the masonry layout */}
                {cards.map(item => (
                    item.id>0 
                        ? <CardItem 
                            clName = "grid__item grid__item--masonry"
                            key={item.id} 
                            id={item.id}
                            title={item.title} 
                            imgSrc={item.imgSrc}
                            text={item.text}
                            views={item.views}
                            comments={item.comments}
                        />
                        : false
                ))}
            </Masonry>
            <Button className="button--large">Load more</Button>
        </div>
    );
};

export default CardList;