import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../assets/images/notification-icon.svg'
import { BASE_URL } from '../utils/request';

interface IProps {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then((response) => {
            toast.info("SMS enviado com sucesso")
        })
}

export const NotificationButton = ({ saleId }: IProps) => {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="Notificação" />
    </div>
  )
}