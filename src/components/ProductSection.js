import Card from "./Card";
import Title from "./Title";

export default function ProductSection() {
    return (
        <section id="services" >
            <div class="flex justify-center items-center h-screen">
                <Card>
                    <Title>Our Products</Title>
                    <ul>
                        <li>JobSecanner</li>
                        <li>Punch-in</li>

                    </ul>
                </Card>
            </div>


        </section>
    );
}
