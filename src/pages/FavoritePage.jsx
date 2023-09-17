import Container from "components/Shared/Container";
import CardSet from "../components/CardSet/CardSet";

const FavoritePage = () => {
    const storage = JSON.parse(localStorage.getItem("favorite")) || []
    return (
        <Container><div>🌟This is Favorite Page🌟</div>
        {storage.length > 0 && <CardSet cars={storage} />}
        </Container>
        
    )
}

export default FavoritePage;