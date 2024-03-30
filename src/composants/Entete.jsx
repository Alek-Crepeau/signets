import './Entete.scss';
import avatarImg from '../images/avatar.png';
import Avatar  from '@mui/material/Avatar';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="utilisateur">
        Paul Thomas
        <Avatar className='avatar' alt="Paul Thomas" src={avatarImg} />
      </div>
    </header>
  );
}