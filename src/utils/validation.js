export const validateRegistrationForm = (formData) => {
    const errors = {};
  
    if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
    if (!formData.registrationNo.trim()) errors.registrationNo = "Registration number is required.";
    if (!formData.state) errors.state = "Please select a state.";
    if (!formData.address.trim()) errors.address = "Address is required.";
  
    return errors;
  };
  