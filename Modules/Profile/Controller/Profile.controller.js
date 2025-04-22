const profile = require("../../../DB/models/profile.model")


const Postdetails = async (req, res) => {
    try {
        const id = req.params.id;
        const { 
            phoneNumber,
            cv, 
            age, 
            minimumSalary, 
            jobSearchStatus, 
            jobTitle,
            jobCategory,
            jobType,
            skils,
            workExperience,
            education } = req.body;
        const newprofile = await profile.create({
            personalInfo: id,
            phoneNumber,
            cv, 
            age, 
            minimumSalary, 
            jobSearchStatus, 
            jobTitle,
            jobCategory,
            jobType,
            skils,
            workExperience,
            education 
        });
        const foundProfile = await profile.findById(newprofile._id).populate({
            path: "personalInfo",
            select: {
              CompanyName: 1,
              email: 1,
              role: 1
            }
          });
        return res.status(200).json({ message: "details added successfully", data: foundProfile });
    } catch (err) {
        return res.status(401).json({ message: "something went wrong", err: err.message });
    }
}

const updateDetails = async (req, res) => {
    try {
      const profileId = req.params.id;
      const { 
        phoneNumber, 
        cv, 
        age, 
        minimumSalary, 
        jobSearchStatus, 
        jobTitle, 
        jobCategory, 
        jobType, 
        skils, 
        workExperience, 
        education 
      } = req.body;
  
      const updatedProfile = await profile.findByIdAndUpdate(
        profileId,
        { 
          phoneNumber, 
          cv, 
          age, 
          minimumSalary, 
          jobSearchStatus, 
          jobTitle, 
          jobCategory, 
          jobType, 
          skils, 
          workExperience, 
          education 
        },
        { new: true }
      ).populate({path: "personalInfo", select: {CompanyName: 1,email: 1}});
  
      if (!updatedProfile) {
        return res.status(404).json({ message: "Profile not found" });
      }
      return res.status(200).json({message: "Profile updated successfully",data: updatedProfile});
  
    } catch (err) {
      return res.status(500).json({ message: "Something went wrong", err: err.message });
    }
  };
  
module.exports = { Postdetails , updateDetails };