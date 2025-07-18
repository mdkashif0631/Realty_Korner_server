import Enquiry from '../models/EnquiryForm.js';

// Signup Controller
export const addEnquiry = async (req, res) => {
    try {
        const formData = req.body;

        const enquiry = new Enquiry({
            Project_Name: formData.Project_Name,
            fullName: formData.fullName,
            email: formData.email,
            phone_number: formData.phone_number,
            message: formData.message,
        });

        await enquiry.save();
        res.status(201).json({ message: 'Enquiry submit successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit enquiry' });
    }
};

export const getAllEnquiry = async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.json(enquiries);
  } catch (err) {
    console.error("Error fetching enquiries:", err);
    res.status(500).json({ error: 'Failed to fetch enquiries' });
  }
};