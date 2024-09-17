import Card from "./Card";
import Title from "./Title";

export default function AboutSection() {
    return (
        <section id="about">
            <div class="flex justify-center items-center h-screen">
                <Card>
                    <Title>About Us</Title>
                    <p>2VM Consulting Limited is an IT consultancy and software development company specializing in custom software solutions. We help businesses modernize their infrastructure and provide cutting-edge technology solutions.</p>

                </Card>
            </div>

        </section>
    );
}
