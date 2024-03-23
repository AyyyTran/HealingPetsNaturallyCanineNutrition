import React, {useState} from 'react';
import InputMask from 'react-input-mask';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    pname: '',
    breed: '',
    allergies: '',
    weight: '',
    issues: '',
    raw: '',
    qa: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validation rules
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const notifySuccesful = () => toast.success('Email Sent Successfully! ');
  const notifyFail = () =>
    toast.error('Something Went Wrong. Try Again Later! ');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('formData:', formData);
    if (validateForm()) {
      try {
        // Assuming your backend endpoint is /api/send-email
        const response = await fetch(
          'https://healing-pets-backend-4102006eeea7.herokuapp.com/api/send-email',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          notifySuccesful();
          console.log('Email sent successfully!');
        } else {
          notifyFail();
          console.error('Error sending email:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <div className="p-8 text-white contact">
      <div className="text-darkblue text-3xl p-4">Contact Us</div>
      <form
        className=" bg-primary p-2 rounded-xl lg:w-3/5 mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="text-lg mt-2">Personal Information</div>
          <div className="flex flex-col w-4/5 mx-auto">
            <label htmlFor="name" className="text-start px-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-xl text-darkblue outline-none p-2"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-4/5 mx-auto">
            <label htmlFor="address" className="text-start px-2">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="rounded-xl text-darkblue outline-none p-2"
              required
              placeholder="123 Main St, City"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-4/5 mx-auto">
            <label htmlFor="email" className="text-start px-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-xl text-darkblue outline-none p-2"
              required
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col w-4/5 mx-auto">
            <label htmlFor="phone" className="text-start px-2">
              Phone:
            </label>
            <InputMask
              mask="999-999-9999"
              maskChar="_"
              alwaysShowMask
              id="phone"
              name="phone"
              className="rounded-xl text-darkblue outline-none p-2"
              placeholder="123-456-7890"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
            )}
          </div>
        </div>
        <div>
          <div className="text-lg mt-4">Pet Information</div>
          <div className="flex flex-col w-4/5 mx-auto">
            <label htmlFor="pname" className="text-start px-2">
              Pet Name:
            </label>
            <input
              type="text"
              id="pname"
              name="pname"
              className="rounded-xl text-darkblue outline-none p-2"
              required
              placeholder="Rusty"
              value={formData.pname}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-4/5 mx-auto">
            <label htmlFor="breed" className="text-start px-2">
              Pet Breed:
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              className="rounded-xl text-darkblue outline-none p-2"
              required
              placeholder="Labrador"
              value={formData.breed}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col w-4/5 mx-auto">
            <label htmlFor="allergies" className="text-start px-2 py-4">
              Please list/describe any allergies/intolerance's your pet has.
              Food and supplements it has taken and is currently taking.
            </label>
            <textarea
              name="allergies"
              id="allergies"
              cols="30"
              rows="10"
              className="rounded-xl text-darkblue outline-none p-2"
              required
              placeholder="Ex: Allergic to fish, chicken and has troubles digesting seeds. Currently being fed dog food and no supplements."
              value={formData.allergies}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex flex-col w-4/5 mx-auto">
            <label htmlFor="weight" className="text-start px-2 py-4">
              Please describe how active your pet is. What is the current weight
              and ideal weight of your pet. How much food do you feed it?
            </label>
            <textarea
              name="weight"
              id="weight"
              cols="30"
              rows="10"
              className="rounded-xl text-darkblue outline-none p-2"
              required
              placeholder="Ex: Rusty is not very active. Only an hour of outside time daily. Currently weighs 150lbs but want him to be a healthier weight. Currently fed 3 meals a day plus dog treats and dental stick."
              value={formData.weight}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex flex-col w-4/5 mx-auto">
            <label htmlFor="issues" className="text-start px-2 py-4">
              Please describe all previous or current health issues of your pet.
            </label>
            <textarea
              name="issues"
              id="issues"
              cols="30"
              rows="10"
              className="rounded-xl text-darkblue outline-none p-2"
              required
              placeholder="Ex: Rusty used to have obesity and now is struggling with arthritis."
              value={formData.issues}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex flex-col w-4/5 mx-auto">
            <label htmlFor="raw" className="text-start px-2 py-4">
              Are you open to Raw or Homemade foods?
            </label>
            <textarea
              id="raw"
              name="raw"
              cols="30"
              rows="10"
              placeholder="Ex: Yes, we are open to including some raw or homemade foods into the diet."
              value={formData.raw}
              className="rounded-xl text-darkblue outline-none p-2"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-4/5 mx-auto">
            <label htmlFor="qa" className="px-2 py-4">
              Any Questions or Concerns?
            </label>
            <textarea
              name="qa"
              id="qa"
              cols="30"
              rows="10"
              className="rounded-xl text-darkblue outline-none p-2"
              value={formData.qa}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="font-bold bg-white text-darkblue w-32 p-2 rounded-lg my-8 lg:transition lg:ease-in-out lg:hover:-translate-y-0.5 lg:hover:scale-105"
        />
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;
