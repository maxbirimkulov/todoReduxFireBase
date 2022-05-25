import React, {useEffect, useState} from "react";
import {BsFillTrashFill} from 'react-icons/bs';
import {MdDoneOutline} from 'react-icons/md';
import {FaStar} from 'react-icons/fa';
import './style.css'
import Vanta from "./Vanta";

function App() {


    function data(date) {
        return new Intl.DateTimeFormat('en-En', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(new Date(date))
    }


    return (
        <div className="App">
            <div className="content">
                <div>
                    <h2 className='data__title'>{data(new Date())}</h2>
                    <h1 className='title'>Todo List</h1>
                    <span className='count'> 10 tasks  to done 2
          </span>
                </div>

                <form className='form'>
                    <input maxLength='15' minLength={4} className='input' required type="text"/>
                    <button className='add__btn' type='submit'>Add</button>
                </form>

                {/*<h3 className='empty'>Ваш список задач пуст !!!</h3>*/}

                <ul className='list'>

                    <li className='item'>
                        <span>sda</span>

                        <span className='text'>ad</span>
                        <div className='list__btns'>
                            <button className='btn' type={"button"}><MdDoneOutline/>
                            </button>
                            <button className='btn' type='button'><FaStar/>
                            </button>
                            <button className='btn' type='button'><BsFillTrashFill/></button>
                        </div>
                    </li>
                    <li className='item'>
                        <span>sda</span>

                        <span className='text'>ad</span>
                        <div className='list__btns'>
                            <button className='btn' type={"button"}><MdDoneOutline/>
                            </button>
                            <button className='btn' type='button'><FaStar/>
                            </button>
                            <button className='btn' type='button'><BsFillTrashFill/></button>
                        </div>
                    </li>
                    <li className='item'>
                        <span>sda</span>

                        <span className='text'>ad</span>
                        <div className='list__btns'>
                            <button className='btn' type={"button"}><MdDoneOutline/>
                            </button>
                            <button className='btn' type='button'><FaStar/>
                            </button>
                            <button className='btn' type='button'><BsFillTrashFill/></button>
                        </div>
                    </li>

                </ul>

                <input className='search' type="search" placeholder='enter task'/>

                <div className='footer__btns'>
                    <div className='footer__btns-left'>
                        <button className='btn__footer' type='button'>All</button>
                        <button className='btn__footer' type='button'><MdDoneOutline/></button>
                        <button className='btn__footer' type='button'><FaStar/></button>
                    </div>
                    <div className='footer__btns-right'>
                        <button className='delete__all-btn' type='button'>Delete All <MdDoneOutline/></button>
                    </div>
                </div>
            </div>
            <Vanta/>
        </div>
    );
}

export default App;
