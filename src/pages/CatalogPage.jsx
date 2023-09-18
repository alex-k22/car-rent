import Container from "components/Shared/Container";
import { getCars } from "../API/fetch";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import CardSet from "../components/CardSet/CardSet";
import { useEffect, useState } from "react";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../components/Loader/Loader";

const CatalogPage = () => {
  const [status, setStatus] = useState("idle");
  const [allCars, setAllCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState();
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    if (allCars.length === filteredCars.length) {
      return Notify.failure("There is no more cards");
    }
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const cars = await getCars();

        if (cars.length === 0) {
          Notify.failure("Sorry, but nothing found");
          setStatus("rejected");
        }
        if (cars.length > 0) {
          setStatus("resolved");
        }

        setAllCars(cars);
      } catch (error) {
        console.log(error);
        Notify.failure(error.message);
        setStatus("rejected");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredCars(allCars.slice(0, page * 8));
  }, [allCars, page])

  return (
    <Container>
      {filteredCars && <CardSet cars={filteredCars} />}
      {status === "resolved" && <LoadMoreBtn onClick={handleLoadMore} />}
      {status === "pending" && <Loader />}
    </Container>
  );
};

export default CatalogPage;
