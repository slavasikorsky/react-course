import React from 'react';
import NavList from '../../NavList';

import './FooterMenu.scss'

const FooterMenu = () => {
 
    const topCategory = [
        {
            link: '/#',
            active: false,
            title: 'Item',
        },
        {
            link: '/#',
            active: false,
            title: 'Item2',
        },
        {
            link: '/#',
            active: false,
            title: 'Item3',
        },
        {
            link: '/#',
            active: false,
            title: 'Item4',
        }
    ];

    const tags = [
        {
            link: '/#',
            active: false,
            title: 'ItemTag',
        },
        {
            link: '/#',
            active: false,
            title: 'Item2',
        },
        {
            link: '/#',
            active: false,
            title: 'Item3',
        },
        {
            link: '/#',
            active: false,
            title: 'Item4',
        }
    ];

    const topRated = [
        {
            link: '/#',
            active: false,
            title: 'ItemRated',
        },
        {
            link: '/#',
            active: false,
            title: 'Item2',
        },
        {
            link: '/#',
            active: false,
            title: 'Item3',
        },
        {
            link: '/#',
            active: false,
            title: 'Item4',
        }
    ];

    return (
        <div className="footer-menu">
            <div className="footer-menu__item">
                <span className="footer-menu__item-title">Top Category</span>
                {topCategory && 
                    (<NavList data={topCategory} direction="vertical"/>)
                }
            </div>
            <div className="footer-menu__item">
                <span className="footer-menu__item-title">Tags</span>
                {tags && 
                    (<NavList data={tags} direction="vertical"/>)
                }
            </div>
            <div className="footer-menu__item">
                <span className="footer-menu__item-title">Top Rated</span>
                {topRated && 
                    (<NavList data={topRated} direction="vertical"/>)
                }
            </div>
        </div>
    );
};

export default FooterMenu;