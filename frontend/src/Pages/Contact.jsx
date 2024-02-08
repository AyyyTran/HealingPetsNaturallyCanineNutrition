import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 text-white">
      <div className="text-darkblue text-3xl p-4">Contact Us</div>
      <form className="lg:grid lg:grid-cols-2 bg-primary p-2 rounded-xl">
        <div className="text-lg mt-2">Personal Information</div>
        <div className="flex flex-col w-4/5 mx-auto">
          <label for="name" className="text-start px-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-xl text-darkblue outline-none p-2"
            required
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col w-4/5 mx-auto">
          <label for="address" className="text-start px-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="rounded-xl text-darkblue outline-none p-2"
            required
            placeholder="123 Main St, City"
          />
        </div>
        <div className="flex flex-col w-4/5 mx-auto">
          <label for="email" className="text-start px-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-xl text-darkblue outline-none p-2"
            required
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="flex flex-col w-4/5 mx-auto">
          <label for="phone" className="text-start px-2">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="rounded-xl text-darkblue outline-none p-2"
            required
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
          />
        </div>

        <div className="text-lg mt-4">Pet Information</div>
        <div className="flex flex-col w-4/5 mx-auto">
          <label for="pname" className="text-start px-2">
            Pet Name:
          </label>
          <input
            type="text"
            id="pname"
            name="pname"
            className="rounded-xl text-darkblue outline-none p-2"
            required
            placeholder="Rusty"
          />
        </div>
        <div className="flex flex-col w-4/5 mx-auto">
          <label for="breed" className="text-start px-2">
            Pet Breed:
          </label>
          <input
            type="text"
            id="breed"
            name="breed"
            className="rounded-xl text-darkblue outline-none p-2"
            required
            placeholder="Labrador"
          />
        </div>
        <div className="flex flex-col w-4/5 mx-auto">
          <label for="allergies" className="text-start px-2 py-4">
            Please list/describe any allergies/intolerance's your pet has. Food
            and supplements it has taken and is currently taking.
          </label>
          <textarea
            name="allergies"
            id="allergies"
            cols="30"
            rows="10"
            className="rounded-xl text-darkblue outline-none p-2"
            required
            placeholder="Ex: Allergic to fish, chicken and has troubles digesting seeds. Currently being fed dog food and no supplements."
          ></textarea>
        </div>
        <div className="flex flex-col w-4/5 mx-auto">
          <label for="weight" className="text-start px-2 py-4">
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
          ></textarea>
        </div>
        <div className="w-4/5 mx-auto pt-4">
          <label for="foods" className="px-2">
            Are you open to Raw or Homemade foods?
          </label>
          <input type="radio" id="yes" name="raw" value="yes" />
          <label for="yes" className="pr-2">
            Yes
          </label>
          <input type="radio" id="no" name="raw" value="no" />
          <label for="no">No</label>
        </div>
        <div className="flex flex-col w-4/5 mx-auto">
          <label for="qa" className="px-2 py-4">
            Any Questions or Concerns?
          </label>
          <textarea
            name="qa"
            id="qa"
            cols="30"
            rows="10"
            className="rounded-xl text-darkblue outline-none p-2"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-white text-darkblue px-2 rounded-lg my-2"
        />
      </form>
    </div>
  );
};

export default Contact;
