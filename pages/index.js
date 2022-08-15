import AddServices from '../components/AddServices';
import { services } from './api/services';
export default function Home() {
  return (
    <div style={{ padding: 50, background: '#eeeeee' }}>
      <AddServices services={services} />
    </div>
  );
}
