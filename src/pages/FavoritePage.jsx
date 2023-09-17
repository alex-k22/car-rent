import Container from "components/Shared/Container";
import CardSet from "../components/CardSet/CardSet";
import NoFavorites from "../components/NoFavorites/NoFavorites";

const FavoritePage = () => {
    const storage = JSON.parse(localStorage.getItem("favorite")) || []
    return (
        <Container>
        {storage.length > 0 && <CardSet cars={storage} />}
        {storage.length === 0 && <NoFavorites/>}
        </Container>
        
    )
}

export default FavoritePage;