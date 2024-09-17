import Card from "./Card";
import Title from "./Title";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactSection() {
    return (
      <section id="contact" >
        <div class="w-full flex justify-center items-center h-screen">
          <Card>
          <Title><FontAwesomeIcon icon={faEnvelope} className="text-gray-700" /> Contact Us</Title>
          <ContactForm />
          </Card>
        </div>

      </section>
    );
  }
  