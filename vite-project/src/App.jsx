import  { useState } from 'react';
import './App.css'; // Create App.css for styling

function App() {
  const [formData, setFormData] = useState({
    name: '',
    numbers: [{ number: '' }],
    password: '',
  });

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const numbers = [...formData.numbers];
    numbers[index][name] = value;
    setFormData({ ...formData, numbers });
  };

  const handleAddNumber = () => {
    if (formData.numbers.length < 5) {
      setFormData({
        ...formData,
        numbers: [...formData.numbers, { number: '' }],
      });
    }
  };

  const handleRemoveNumber = (index) => {
    const numbers = [...formData.numbers];
    numbers.splice(index, 1);
    setFormData({ ...formData, numbers });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App flex">
      <div className='me-5 border-slate-700 rounded-xl shadow-xl p-20'>
      <form onSubmit={handleSubmit}>
        <div className="phoneNumber">
          {formData.numbers.map((number, index) => (
            <div key={index} className="phoneNumber">
              <input
              className='mb-5'
                type="text"
                name="number"
                placeholder="Enter phone number"
                value={number.number}
                onChange={(e) => handleInputChange(index, e)}
              />
              {formData.numbers.length > 1 && (
                <button className='btn btn-primary bg-red-600'
                  type="button"
                  onClick={() => handleRemoveNumber(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
        <button className='btn btn-primary bg-lime-500' type="button" onClick={handleAddNumber}>
          Add Phone Number
        </button>
        <br />
        <br />
        <div>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        </div>
        <div className='mt-10'>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        </div>
  
        <button className='btn btn-primary bg-lime-500 mt-5 mb-10' type="submit">Submit</button>
      </form>
      </div>

      <div className="border-red-600 rounded-xl shadow-xl p-20">
        <h2 className='text-2xl font-bold mb-7'>Submitted Data</h2>
        <div className="">
          <p className='font-semibold text-xl mb-5'>Name: {formData.name}</p>
          <p className='font-semibold text-xl mb-5'>Phone Numbers</p>
          <ul>
            {formData.numbers.map((phone, index) => (
              <li key={index}>{phone.number}</li>
            ))}
          </ul>
          <p className='font-semibold text-xl mb-5'>Password: {formData.password}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
