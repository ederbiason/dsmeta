import axios from 'axios';
import icon from '../assets/images/notification-icon.svg'
import { BASE_URL } from '../utils/request';

interface IProps {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then((response) => {
            console.log("YEAH")
        })
}

export const NotificationButton = ({ saleId }: IProps) => {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="Notificação" />
    </div>
  )
}