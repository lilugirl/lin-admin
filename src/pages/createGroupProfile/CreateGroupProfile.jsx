import React, { useState } from 'react';
import './CreateGroupProfile.css';

const CreateGroupProfile = () => {
  const [formData, setFormData] = useState({
    profilePhoto: null,
    groupName: '',
    fieldOfActivity: '',
    subscription: '',
    subscriptionValue: '',
    email: '',
    phoneNumber: '',
    website: '',
    biography: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePhoto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className="create-group-profile">
      <h2>Create Group Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Profile Photo</label>
          <input type="file" name="profilePhoto" onChange={handleFileChange} />
        </div>

        <div className="form-section">
          <label>Group Name*</label>
          <input type="text" name="groupName" value={formData.groupName} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Field of Activity*</label>
          <input type="text" name="fieldOfActivity" value={formData.fieldOfActivity} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Subscription (define if the group will be paid or not)</label>
          <input type="text" name="subscription" value={formData.subscription} onChange={handleChange} />
          {formData.subscription && (
            <div className="form-section">
              <label>Define the Subscription Value</label>
              <input type="text" name="subscriptionValue" value={formData.subscriptionValue} onChange={handleChange} />
            </div>
          )}
        </div>

        <div className="form-section">
          <label>Email*</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Phone Number</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>

        <div className="form-section">
          <label>Website</label>
          <input type="text" name="website" value={formData.website} onChange={handleChange} />
        </div>

        <div className="form-section">
          <label>Biography</label>
          <textarea name="biography" value={formData.biography} onChange={handleChange}></textarea>
        </div>

        <button type="submit">Create Group Profile</button>
      </form>
    </div>
  );
}

export default CreateGroupProfile;
