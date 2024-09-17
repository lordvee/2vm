import Card from "./Card";
import Title from "./Title";

export default function ServicesSection() {
    return (
        <section id="services"  className="pt-20 px-4" >
            <div class="flex justify-center items-center h-full">
                <Card>
                    <Title>Our Services</Title>
                    <ul>
                        <li>IT Consultancy</li>
                        <li>Software Development</li>
                        <li>Cloud Solutions</li>
                        <li>Infrastructure Management</li>
                    </ul>
                </Card>
            </div>


        </section>
    );
}
