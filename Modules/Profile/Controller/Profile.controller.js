const profile = require("../../../DB/models/profile.model");
const skills = require("../../../DB/models/Skills.model");

const Postdetails = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "please provide the id" });
    }
    const {
      phoneNumber,
      cv,
      age,
      minimumSalary,
      jobSearchStatus,
      jobTitle,
      jobCategory,
      jobType,
      skillName,
      workExperience,
      education,
    } = req.body;
    const newprofile = await profile.create({
      phoneNumber,
      cv,
      age,
      minimumSalary,
      jobSearchStatus,
      jobTitle,
      jobCategory,
      jobType,
      workExperience,
      education,
    });
    const skill = await skills.create({ skillName });
    return res
      .status(200)
      .json({
        message: "details added successfully",
        data: newprofile,
        skill,
      });
  } catch (err) {
    return res
      .status(401)
      .json({ message: "something went wrong", err: err.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "please provide the id" });
    }
    const idSkill = req.params.idSkill;
    if (!idSkill) {
      return res.status(400).json({ message: "please provide the id" });
    }
    const foundProfile = await profile.findById(id).populate({
      path: "personalInfo",
      select: {
        CompanyName: 1,
        email: 1,
        role: 1,
      },
    });
    const foundSkill = await skills.findById(idSkill);
    return res.status(200).json({message: "Profile found successfully", data: foundProfile , skill: foundSkill,});
  } catch (err) {
    return res
      .status(401)
      .json({ message: "something went wrong", err: err.message });
  }
};

const updateDetails = async (req, res) => {
  try {
    const profileId = req.params.id;
    if (!profileId) {
      return res.status(400).json({ message: "Please provide the profile ID" });
    }
    const {
      phoneNumber,
      cv,
      age,
      minimumSalary,
      jobSearchStatus,
      jobTitle,
      jobCategory,
      jobType,
      skillName,
      workExperience,
      education,
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
        workExperience,
        education,
      },
      { new: true }
    );
    const updatedSkill = await skills.findOneAndUpdate({ skillName });

    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    return res
      .status(200)
      .json({
        message: "Profile updated successfully",
        data: updatedProfile,
        updatedSkill,
      });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong", err: err.message });
  }
};

module.exports = { Postdetails, getProfile, updateDetails };
