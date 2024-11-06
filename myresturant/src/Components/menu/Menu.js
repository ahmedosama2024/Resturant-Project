import React, { useState } from 'react';
import './menu.css';


const Menu = () => {
    let [active,setActive]=useState(false)
    let [active1,setActive1]=useState(false)
    let [active2,setActive2]=useState(false)

    function toggelActive(){
        setActive(!active);
        setActive2(active2=false)
        setActive1(active1=false)
        
    }
    function toggelActive1(){
        setActive1(!active1);
        setActive(active=false)
        setActive2(active2=false)
    }
    function toggelActive2(){
        setActive2(!active2);
        setActive(active=false)
        setActive1(active1=false)
    }

  return (
    <>
     <div className='menu'>
        <div className='mheader'>
            <h2>The Menu</h2>
        </div>
        <div className='items'>
        <div className='btn'>
            <button onClick={toggelActive} 
            className={active?'Active':''}
            >PIZZA</button>
            <button onClick={toggelActive1} className={active1?'Active1':''}>SALADS</button>
            <button onClick={toggelActive2} className={active2?'Active2':''}>APPTIZERS</button>
        </div>
            <hr/>
        <div className={active?'':'pizza'}>

        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Chiecken ranch</h2>
            <p>Chiecken-Mozzerella-tomato-mushrom-ranch</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Chiecken BBQ</h2>
            <p>Chiecken-Mozzerella-tomato-mushrom-BBQ</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Sea ranch</h2>
            <p>Shrimp-Mozzerella-tomato-mushrom-ranch</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Pepproni ranch</h2>
            <p>Pepproni-Mozzerella-tomato-mushrom-ranch</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Burger ranch</h2>
            <p>Burger-Mozzerella-tomato-mushrom-ranch</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        </div>
        <div className={active2?'':'apptizers'}>

        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Garlic Bread</h2>
            <p>Garlic-Mozzerella-tomato-mushrom-Bread</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Cheese Potato</h2>
            <p>Potato-Mozzerella-tomato-mushrom-Chadder</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Wedges Potato</h2>
            <p>ranch-wedges</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Curly Potato</h2>
            <p>Curly-Potato</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Burger Potato</h2>
            <p>Burger-Mozzerella-tomato-mushrom-ranch-Potato</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        </div>
        <div className={active1?'':'salad'}>

        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Chiecken Cesar</h2>
            <p>Chiecken-chadder-tomato-mushrom-ranch</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>tomato salad</h2>
            <p>tomato-mushrom-BBQ</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Sea Salad</h2>
            <p>Shrimp-Mozzerella-tomato-mushrom-ranch</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Pepproni ranch</h2>
            <p>Pepproni-Lettuce-tomato-mushrom-ranch</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        <div className='d-flex justify-content-between p-2'>
            <div>
            <h2>Burger Salad</h2>
            <p>Burger-Mozzerella-tomato-mushrom-bigtasty</p>               
            </div>
            <h2>15$</h2>
        </div>
        <hr/>
        </div>
        </div>
        </div>
         
    </>
  )
}

export default Menu
