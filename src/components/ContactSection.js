import Card from "./Card";
import Title from "./Title";
import ContactForm from "./ContactForm";
import A from "./A";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 pt-20">
      <div class="flex justify-center items-center h-full">
        <Card>
          <Title><FontAwesomeIcon icon={faEnvelope} className="text-gray-700" /> Contact Us</Title>
          <p className="my-4">
            Get in touch for any query or call us at <A href="tel:+441604664179">+44-1604-664-179</A> to book an appointment with one of our representatives.
          </p>
          <ContactForm />
        </Card>
      </div>

    </section>
  );
}
