import Card from "./Card";
import Title from "./Title";

export default function ProductSection() {
    return (
        <section id="products" className="pt-20 px-4 lg:h-4/5 md:h-4/5">
            <div className="h-full overflow-y-auto">
            <div className="flex flex-col justify-center items-center">
                <Card>
                    <Title>Our products</Title>
                    <p className="text-gray-600 mb-6">
                        In today’s fast-paced business environment, efficient HR and time management solutions
                        are essential for small to medium enterprises (SMEs). At <strong>2VM Consulting</strong>, we are
                        proud to introduce two innovative products designed to simplify and enhance your workforce
                        management: <strong>Punch-In</strong> and <strong>JobScanner</strong>.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Punch-In: Revolutionizing Time Management</h2>
                    <p className="text-gray-600 mb-4">
                        <strong>Punch-In</strong> is an advanced HR and time management tool that leverages cutting-edge
                        face recognition technology. Designed specifically for SMEs, Punch-In offers a
                        seamless way to track employee attendance and manage working hours with unparalleled
                        accuracy and security.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside mb-6 text-gray-600">
                        <li><strong>Face Recognition Technology</strong>: Ensure accurate and fraud-proof employee
                            clock-ins and clock-outs with our state-of-the-art face recognition system.</li>
                        <li><strong>User-Friendly Interface</strong>: Our intuitive platform makes it easy
                            for employees to log their hours and for managers to track attendance.</li>
                        <li><strong>Real-Time Insights</strong>: Access comprehensive reports and analytics to
                            monitor employee attendance and productivity in real time.</li>
                        <li><strong>Customizable Settings</strong>: Tailor the system to meet the unique needs
                            of your business, including different shifts and attendance policies.</li>
                    </ul>

                    <p className="text-gray-600 mb-6">
                        Punch-In not only saves time but also reduces administrative burdens,
                        allowing HR teams to focus on what truly matters: building a positive
                        work environment.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">JobScanner: Your Gateway to Talent</h2>
                    <p className="text-gray-600 mb-4">
                        Finding the right talent in the UK and Ireland can be a daunting task,
                        but with <strong>JobScanner</strong>, we make it easier than ever.
                        JobScanner is a powerful job search engine that aggregates listings
                        from all the major job boards, giving you access to a vast pool of
                        candidates in one convenient location.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside mb-6 text-gray-600">
                        <li><strong>Comprehensive Job Listings</strong>: Search across the leading
                            job boards in the UK and Ireland to find the best candidates for your
                            open positions.</li>
                        <li><strong>Smart Filters</strong>: Narrow down your search with
                            advanced filtering options, including job type, location, and
                            experience level.</li>
                        <li><strong>Real-Time Updates</strong>: Stay ahead of the competition
                            with real-time job postings, ensuring you never miss out on top talent.</li>
                        <li><strong>User-Friendly Experience</strong>: JobScanner’s simple
                            interface allows hiring managers to quickly find and connect with
                            potential candidates.</li>
                    </ul>

                    <p className="text-gray-600 mb-6">
                        With JobScanner, your recruitment process becomes streamlined
                        and efficient, enabling you to focus on attracting and retaining
                        the best talent in your industry.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                    <p className="text-gray-600 mb-4">
                        At <strong>[Your Company Name]</strong>, we understand the challenges
                        that SMEs face in managing their workforce and finding the right talent.
                        Our commitment to innovation and user-centric design ensures that
                        Punch-In and JobScanner not only meet but exceed your expectations.
                    </p>

                    <p className="text-gray-600 mb-6">
                        Investing in Punch-In and JobScanner means investing in the future
                        of your business. Enhance your HR processes, optimize your
                        time management, and simplify your recruitment strategy with our
                        tailored solutions.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Started Today!</h3>
                    <p className="text-gray-600">
                        Ready to transform your workforce management? Contact us to learn
                        more about how Punch-In and JobScanner can benefit your business,
                        or request a demo today!
                    </p>
                </Card>
            </div>
            </div>


        </section>
    );
}
