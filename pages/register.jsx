import React, { useState } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  console.log(firstName);

  const handleSubmit = async (req, res) => {
    //
  };

  return (
    <section>
      <div className="h-screen w-full">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="px-2 py-1 border-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
