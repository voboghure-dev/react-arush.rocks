import './topbar.scss';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>Logo</a>
        </div>
        <div className='right'>
          right content
        </div>
      </div>
    </div>
  );
}
