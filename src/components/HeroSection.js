import Card from "./Card";
import Title from "./Title";

export default function HeroSection() {
    return (
        <section id="home">
            <div class="flex justify-center items-center h-screen">
                <Card>
                    <Title>Welcome to 2VM Consulting Limited</Title> 
                    <p>
                        Your trusted partner in IT consultancy and software solutions. We specialize in a wide range of services, including
                        <strong> inventory management</strong>, <strong>networking</strong>, <strong>workflow design</strong>,
                        <strong> middleware</strong>, <strong>integrations</strong>, and <strong>custom software development</strong>.
                    </p>
                    <p class="mt-4">
                        With deep expertise across the <strong>Financial</strong>, <strong>Insurance</strong>, <strong>Banking</strong>,
                        and <strong>Telecom</strong> sectors, we deliver innovative and scalable IT solutions tailored to your business needs.
                        </p>

                </Card>

            </div>
        </section >
    );
}
