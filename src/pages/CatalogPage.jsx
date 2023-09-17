import Container from "components/Shared/Container";
import { getCars } from "../redux/fetch";
import CardSet from "../components/CardSet/CardSet";
import { useEffect, useState } from "react";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";

const CatalogPage = () => {
  // const [status, setStatus] = useState("idle");
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // if (query === '') {
    //   return;
    // }
    const fetchData = async () => {
      try {
        // setStatus("pending");
        const  cars = await getCars(page);
        // setStatus("resolved");
        
        setCars(i => [...i, ...cars]);
        console.log(cars)

        // if (data.hits.length === 0) {
        //   toast.error('Sorry, but nothing found');
        //   setStatus('rejected');
        // }
        // if (data.hits.length > 0) {
        //   setStatus('resolved');
        // }

        // setImages(i => [...i, ...data.hits]);
      } catch (error) {
        console.log(error);
        // toast.error(error.message);
        // setStatus("rejected");
      }
    };
    fetchData();
  }, [page]);

  return (
    <Container>
      <div>🚗This is Catalog page🚗</div>
      <CardSet cars={cars} />
      <LoadMoreBtn/>
    </Container>
  );
};

export default CatalogPage;
