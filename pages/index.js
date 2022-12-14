import AddServices from '../components/AddServices';
import { useDispatch, useSelector } from 'react-redux';
export default function Home() {
  const services = useSelector((state) => state.service.services);
  const dispatch = useDispatch();
  return (
    <div>
      <AddServices services={services} dispatch={dispatch} />
    </div>
  );
}
