import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections:  [
                {
                  title: 'hats',
                  imageUrl: 'images/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'images/jackets.png',
                  id: 2,
                  linkUrl: 'jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'images/sneakers.png',
                  id: 3,
                  linkUrl: 'sneakers'
                },
                {
                  title: "women's",
                  imageUrl: 'images/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'womens'
                },
                {
                  title: "men's",
                  imageUrl: 'images/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'mens'
                }
              ]
              
        }
    }
    render(){
        return (
            <div className='directory-menu'>
                {
                this.state.sections.map(({id,...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
    }
            </div>
        )
    }
}
export default Directory;