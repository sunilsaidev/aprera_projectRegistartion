// validations.js - Comprehensive validation utilities

export const validationPatterns = {
  // Account Holder Name: Only alphabets and spaces, min 3 characters
  accountHolder: /^[A-Za-z\s]{3,}$/,
  
  // IFSC Code: 4 letters + 0 + 6 alphanumeric (e.g., SBIN0001234)
  ifsc: /^[A-Z]{4}0[A-Z0-9]{6}$/,
  
  // PAN Card: 5 letters + 4 digits + 1 letter (e.g., ODZPS3189E)
  pan: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
  
  // Aadhaar: Exactly 12 digits
  aadhaar: /^\d{12}$/,
  
  // Mobile: 10 digits starting with 6-9
  mobile: /^[6-9]\d{9}$/,
  
  // Email: Standard email format
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  
  // GST: 2 digits + 10 chars (PAN pattern) + 1 digit + 1 alpha + 1 alphanumeric
  gst: /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d[A-Z\d]{2}$/,
  
  // Name fields: Only alphabets and spaces, min 3 characters
  name: /^[A-Za-z\s]{3,}$/,
  
  // Account Number: Exactly 18 digits
  accountNo: /^\d{18}$/,
};

export const validateField = (fieldName, value) => {
  const errors = {};

  switch (fieldName) {
    case 'accountHolder':
      if (!value.trim()) {
        errors.accountHolder = 'Account Holder Name is required';
      } else if (value.trim().length < 3) {
        errors.accountHolder = 'Account Holder Name must be at least 3 characters';
      } else if (!validationPatterns.accountHolder.test(value)) {
        errors.accountHolder = 'Account Holder Name should contain only alphabets and spaces';
      }
      break;

    case 'ifsc':
      if (!value.trim()) {
        errors.ifsc = 'IFSC Code is required';
      } else if (!validationPatterns.ifsc.test(value.toUpperCase())) {
        errors.ifsc = 'Invalid IFSC Code format (e.g., SBIN0001234)';
      }
      break;

    case 'accountNo':
      if (!value.trim()) {
        errors.accountNo = 'Account Number is required';
      } else if (!validationPatterns.accountNo.test(value)) {
        errors.accountNo = 'Account Number must be exactly 18 digits';
      }
      break;

    case 'panNumber':
      if (!value.trim()) {
        errors.panNumber = 'PAN Card Number is required';
      } else if (!validationPatterns.pan.test(value.toUpperCase())) {
        errors.panNumber = 'Invalid PAN format (e.g., ABCDE1234F)';
      }
      break;

    case 'aadhaar':
      if (!value.trim()) {
        errors.aadhaar = 'Aadhaar Number is required';
      } else if (!validationPatterns.aadhaar.test(value)) {
        errors.aadhaar = 'Aadhaar Number must be exactly 12 digits';
      }
      break;

    case 'mobile':
      if (!value.trim()) {
        errors.mobile = 'Mobile Number is required';
      } else if (!validationPatterns.mobile.test(value)) {
        errors.mobile = 'Mobile Number must be 10 digits and start with 6-9';
      }
      break;

    case 'email':
      if (!value.trim()) {
        errors.email = 'Email ID is required';
      } else if (!validationPatterns.email.test(value)) {
        errors.email = 'Invalid email format';
      }
      break;

    case 'gstNum':
      // GST is optional, but if provided must be valid
      if (value.trim() && !validationPatterns.gst.test(value.toUpperCase())) {
        errors.gstNum = 'Invalid GST Number format (15 characters)';
      }
      break;

    case 'name':
    case 'fatherName':
      if (!value.trim()) {
        errors[fieldName] = `${fieldName === 'name' ? 'Name' : 'Father Name'} is required`;
      } else if (value.trim().length < 3) {
        errors[fieldName] = `${fieldName === 'name' ? 'Name' : 'Father Name'} must be at least 3 characters`;
      } else if (!validationPatterns.name.test(value)) {
        errors[fieldName] = `${fieldName === 'name' ? 'Name' : 'Father Name'} should contain only alphabets and spaces`;
      }
      break;

    default:
      break;
  }

  return errors;
};

export const validateFileUpload = (file, fieldName) => {
  const errors = {};
  
  if (!file) {
    errors[fieldName] = `${fieldName} is required`;
    return errors;
  }

  const allowedTypes = {
    bankStatement: ['application/pdf'],
    panCard: ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'],
    aadhaar: ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'],
    photograph: ['image/jpeg', 'image/jpg', 'image/png'],
    gstDocument: ['application/pdf'],
  };

  const maxSizes = {
    bankStatement: 5 * 1024 * 1024, // 5MB
    panCard: 2 * 1024 * 1024, // 2MB
    aadhaar: 2 * 1024 * 1024, // 2MB
    photograph: 200 * 1024, // 200KB
    gstDocument: 2 * 1024 * 1024, // 2MB
  };

  if (allowedTypes[fieldName] && !allowedTypes[fieldName].includes(file.type)) {
    errors[fieldName] = `Invalid file format. Allowed: ${allowedTypes[fieldName].join(', ')}`;
  }

  if (maxSizes[fieldName] && file.size > maxSizes[fieldName]) {
    errors[fieldName] = `File size must be less than ${maxSizes[fieldName] / (1024 * 1024)}MB`;
  }

  // Special validation for photograph dimensions (should be done with FileReader in component)
  if (fieldName === 'photograph') {
    // This will be handled in the component with FileReader
  }

  return errors;
};

export const validateAllFields = (formData) => {
  const errors = {};
  
  // Required field validations
  const requiredFields = [
    'bankState',
    'bankName',
    'branchName',
    'accountNo',
    'accountHolder',
    'ifsc',
    'name',
    'fatherName',
    'panNumber',
    'aadhaar',
    'mobile',
    'email',
    'stateUT',
    'district',
  ];

  requiredFields.forEach(field => {
    if (!formData[field] || !formData[field].trim()) {
      errors[field] = `This field is required`;
    } else {
      // Apply specific validation rules
      const fieldErrors = validateField(field, formData[field]);
      Object.assign(errors, fieldErrors);
    }
  });

  return errors;
};