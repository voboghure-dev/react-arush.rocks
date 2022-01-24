import { useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ];
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        <div className='item'>
          <img
            src='https://images.unsplash.com/photo-1523839699072-5ec088b61a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://images.unsplash.com/photo-1523839699072-5ec088b61a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://images.unsplash.com/photo-1523839699072-5ec088b61a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://images.unsplash.com/photo-1523839699072-5ec088b61a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://images.unsplash.com/photo-1523839699072-5ec088b61a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://images.unsplash.com/photo-1523839699072-5ec088b61a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://images.unsplash.com/photo-1523839699072-5ec088b61a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
