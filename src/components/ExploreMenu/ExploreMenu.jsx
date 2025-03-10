import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <div className="explore-menu-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolore aliquid cumque accusamus quis repellat, facere reiciendis adipisci expedita architecto modi reprehenderit earum ad quibusdam laboriosam eveniet velit cum sequi.</p>
        <div className='explore-menu-list'>
          {menu_list.map((item, index) => {
            return (
              <div key={index} className='explore-menu-list-item'>
                <img src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ExploreMenu
