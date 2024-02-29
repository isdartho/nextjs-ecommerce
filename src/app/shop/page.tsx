
import Cards from "../components/ui/cards/cards";

export default function shop() {
    return (
        <main className="container flex justify-center mx-auto p-5 mt-12">
            <div className="shop-sidebar w-1/4 h-screen p-5">
                sidebar
            </div>
            <div className="shop-body w-3/4 h-screen p-5">
                <Cards />
            </div>
        </main>
    );

}