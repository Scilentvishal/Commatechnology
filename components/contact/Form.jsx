import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/contact', form);
      console.log(response.data);

      setResponse(response.data);
      setError(null);
      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setTimeout(() => {
        router.push('/');
      }, 5000);
    } catch (err) {
      setError('something wend wrong please contact us through whatsapp');
      console.log(err);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Contact{' '}
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Get in touch with us for Web Development services by filling out the
        form below.{' '}
      </p>
      <form action="" onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            value={form.name}
            onChange={handleInputChange}
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            value={form.email}
            onChange={handleInputChange}
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="number" className="leading-7 text-sm text-gray-600">
            Phone No.
          </label>
          <input
            value={form.phone}
            onChange={handleInputChange}
            type="number"
            id="number"
            name="phone"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            value={form.message}
            onChange={handleInputChange}
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            required
          ></textarea>
        </div>

        {error && <p className="error">{error}</p>}
        {response && <p className="response">{response}</p>}
        <button className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 text-lg">
          Contact Now
        </button>
      </form>
    </>
  );
};

export default Form;
