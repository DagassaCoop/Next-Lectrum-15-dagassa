// Mock
import { contactInfo as contacts } from "@/src/mock";

export const dynamicParams = false;

const Contact = async () => {
  return (
    <div className="max-auto md:px-6 py-[50px]">
      <section className="md-32">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full shrink-0 grow-0 basis-auto">
            <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
            <p className="text-sm font-roboto text-gray-600 text-left my-4 leading-6">
              We would love to hear from you! Whether you have a question about
              our services, need support, or just want to share your feedback,
              feel free to reach out to us.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="mb-10 w-full">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600">Email: {contacts.email}</p>
            <p className="text-gray-600">
              Support email: {contacts.supportEmail}
            </p>
            <p className="text-gray-600">Phone: {contacts.phone}</p>
            <p className="text-gray-600">Address: {contacts.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
