import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            Logo
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+88-01973-238664</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>voboghure.dev@gmail.com</span>
          </div>
        </div>
        <div className='right'>right content</div>
      </div>
    </div>
  );
}
