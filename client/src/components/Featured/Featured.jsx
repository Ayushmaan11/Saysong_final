import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Featured.scss';

const Featured = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = () => {
    if(search) {
      navigate(`/api/gigs?search=${search}`);
    }
  }

  return (
    <div className='featured'>
      <div className="container">

        <div className="left">
          <h1>Craft the perfect <span>song</span> for yourself and your loved ones</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./media/search.png" alt="search" />
              <input type="search" placeholder='Search for artists and genres' onChange={(({ target: { value } }) => setSearch(value))} />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Country music</button>
            <button>Hip-hop</button>
            <button>Lyric Writing</button>
            <button>Tune production</button>
          </div>
        </div>

        <div className="right">
          <img src="./media/Group 1.jpg" alt="hero" />
        </div>
        
      </div>
    </div>
  )
}

export default Featured