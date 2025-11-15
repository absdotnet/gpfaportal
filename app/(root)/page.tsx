
import ProductionList from '@/components/shared/production/productionList';
import  { getLatestProductions } from '@/lib/actions/production.actions';

const HomePage = async () => {
  const latestProductions = await getLatestProductions();
  return (
    <>
    <ProductionList title='Latest Production' data={latestProductions} />
    </>
  );
};

export default HomePage;