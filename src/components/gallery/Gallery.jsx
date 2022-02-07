import './gallery.scss';
import { useEffect, useState } from 'react';

import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import Masonry from 'react-masonry-css';

const images = [
  { id: '1', url: './assets/gallery/img01.jpg', title: 'First Image', tag: 'free' },
  { id: '2', url: './assets/gallery/img02.jpg', title: 'Second Image', tag: 'new' },
  { id: '3', url: './assets/gallery/img03.jpg', title: 'Third Image', tag: 'pro' },
  { id: '4', url: './assets/gallery/img04.jpg', title: 'Fourth Image', tag: 'pro' },
  { id: '5', url: './assets/gallery/img05.jpg', title: 'Fifth Image', tag: 'free' },
  { id: '6', url: './assets/gallery/img06.jpg', title: 'Sixth Image', tag: 'new' },
  { id: '7', url: './assets/gallery/img07.jpg', title: 'Seventh Image', tag: 'pro' },
  { id: '8', url: './assets/gallery/img08.jpg', title: 'Eighth Image', tag: 'free' },
  { id: '9', url: './assets/gallery/img09.jpg', title: 'Ninth Image', tag: 'new' },
  { id: '10', url: './assets/gallery/img10.jpg', title: 'Tenth Image', tag: 'new' },
  { id: '11', url: './assets/gallery/img11.jpg', title: 'Eleventh Image', tag: 'new' },
  { id: '12', url: './assets/gallery/img12.jpg', title: 'Twelveth Image', tag: 'new' },
];

function App() {
  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === 'all'
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className='App'>
      <div className='tags'>
        <TagButton name='all' handleSetTag={setTag} tag={tag} />
        <TagButton name='new' handleSetTag={setTag} tag={tag} />
        <TagButton name='free' handleSetTag={setTag} tag={tag} />
        <TagButton name='pro' handleSetTag={setTag} tag={tag} />
      </div>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className='container'>
            <Masonry
              breakpointCols={{ default: 4, 800: 2 }}
              className='my-masonry-grid'
              columnClassName='my-masonry-grid_column'
            >
              {filteredImages.map((image) => (
                <div key={image.id} className='image-card'>
                  <img className='image' src={image.url} alt={image.title} />
                </div>
              ))}
            </Masonry>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tag }) => {
  return (
    <button
      className={`tag ${tag === name ? 'active' : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default App;
