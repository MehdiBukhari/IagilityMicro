import { ConsultantsSchema } from "../ML/consltant";
import { Iconsaltants } from "../DL/consaltants";
export class MainConsaltant {
    constructor() {

    }
    getOneConsaltantDoucment(_id: string) {
        return ConsultantsSchema.findById(_id);
    }
    getOneConsaltantByUserId(userId: string) {
        return ConsultantsSchema.findOne({ userId: userId });
    }
    SaveOneConsaltantInformation(consaltant: Iconsaltants) {
        return new ConsultantsSchema(consaltant).save();
    }
    UpdatOneConsaltantInformation(consaltant: Iconsaltants) {
        return ConsultantsSchema.findByIdAndUpdate(consaltant._id, consaltant, { new: true })
    }
    RemoveOneConsaltantInformation(_id: string) {
        return ConsultantsSchema.findByIdAndRemove(_id);
    }
    AddBussnissSkill(_id: string, skill_id: string) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $push: { 'Bussniess_Skill': { 'Bussniess_Skill_ID': skill_id } } })
    }
    RemoveBussnissSkill(_id: string, skill_id: string) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $pull: { 'Bussniess_Skill': { '_id': skill_id } } })
    }
    
    AddEducation(_id: string, Education: Iconsaltants["Education"]) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $push: { 'Education': Education } })
    }
    UpdateEducation(_id: string, Eduation:any) {
        return ConsultantsSchema.updateOne({ "_id": _id,"Education._id":Eduation._id}, { $set: {'Education.$': Eduation } })
    }
    RemoveEducation(_id: string, Education_ID: string) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $pull: { 'Education': { '_id': Education_ID } } })
    }
    AddEmpolymnet(_id: string, Employment_History: Iconsaltants["Employment_History"]) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $push: { 'Employment_History': Employment_History } })
    }
    UpdateEmpolymnet(_id: string, Employment_History: any) {
        return ConsultantsSchema.updateOne({ _id: _id,"Employment_History._id":Employment_History._id }, { $set: { 'Employment_History.$': Employment_History } })
    }
    RemoveEmployment_History(_id: string, Employment_History_ID: string) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $pull: { 'Employment_History': { '_id': Employment_History_ID } } })
    }
    AddCeritifications(_id: string, Ceritifications: Iconsaltants["Ceritifications"]) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $push: { 'Ceritifications': Ceritifications } })
    }
    UpdateCeritifications(_id: string, Ceritifications:any) {
        return ConsultantsSchema.updateOne({ _id: _id ,"Ceritifications._id":Ceritifications._id}, { $set: { 'Ceritifications.$': Ceritifications } })
    }
    RemoveCeritifications(_id: string, Ceritifications_ID: string) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $pull: { 'Ceritifications': { '_id': Ceritifications_ID } } })
    }
    AddPortfolos(_id: string, Portfolos: Iconsaltants["Portfolos"]) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $push: { 'Portfolos': Portfolos } })
    }
    UpdatePortfolos(_id: string, Portfolos: any) {
        return ConsultantsSchema.updateOne({ _id: _id,"Portfolos._id":Portfolos._id }, { $set: { 'Portfolos.$.Portfolio_Title': Portfolos.Portfolio_Title } })
    }
    RemovePortfolos(_id: string, Portfolos_ID: string) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $pull: { 'Portfolos': { '_id': Portfolos_ID } } })
    }
    AddResumes(_id: string, Resumes: Iconsaltants["Resumes"]) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $push: { 'Resumes': Resumes } })
    }
    UpdateResumes(_id: string, Resumes:any) {
        return ConsultantsSchema.updateOne({ _id: _id,"Resumes._id": Resumes._id}, { $set: { 'Resumes.$.Resume_Title': Resumes.Resume_Title } })
    }
    RemoveResumes(_id: string, Resumes_ID: string) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $pull: { 'Resumes': { '_id': Resumes_ID } } })
    }
    AddTechnical_Skills(_id: string, Technical_Skills: Iconsaltants["Technical_Skills"]) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $push: { 'Technical_Skills': Technical_Skills } })
    }
    RemoveTechnical_Skills(_id: string, Technical_Skills_ID: string) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $pull: { 'Technical_Skills': { '_id': Technical_Skills_ID } } })
    }
    AddCOTS(_id: string, COTS: Iconsaltants["COTS"]) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $push: { 'COTS': COTS } })
    }
    RemoveCOTS(_id: string, COTS_ID: string) {
        return ConsultantsSchema.updateOne({ _id: _id }, { $pull: { 'COTS': { '_id': COTS_ID } } })
    }
}