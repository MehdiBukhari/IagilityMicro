import { MainConsaltant } from "../DC/consaltantController";
import { Iconsaltants } from "../DL/consaltants";
export class ConsaltantBuss {
    constructor() {

    }
    async getOneConsaltantByUserId(userId: string): Promise<Iconsaltants> {
        let consaltant = await new MainConsaltant().getOneConsaltantByUserId(userId)
        if (consaltant == null) {
            throw "wrong user id"
        }
        return consaltant;
    }
    async getOneConsaltantById(_Id: string): Promise<Iconsaltants> {
        let consaltant = await new MainConsaltant().getOneConsaltantDoucment(_Id)
        if (consaltant == null) {
            throw "wrong user id"
        }
        return consaltant;
    }
    async UpdateConsaltant(consaltant: Iconsaltants): Promise<Iconsaltants> {
        let response = await new MainConsaltant().UpdatOneConsaltantInformation(consaltant)
        if (response == null) {
            throw "wrong user id"
        }
        return response;
    }
    async AddBuniessSkill(_id: string, skill_id: string) {
        let response = await new MainConsaltant().AddBussnissSkill(_id, skill_id)
        if (response == null) {
            throw "wrong "
        }
        return response;
    }
    async RemoveBuniessSkill(_id: string, skill_id: string) {
        let response = await new MainConsaltant().RemoveBussnissSkill(_id, skill_id)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async AddEducation(_id: string, Education: Iconsaltants['Education']) {
        let response = await new MainConsaltant().AddEducation(_id, Education)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async UpdateEducation(_id: string, Education: Iconsaltants['Education']) {
        let response = await new MainConsaltant().UpdateEducation(_id, Education)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async RemoveEducation(_id: string, Education_ID: string) {
        let response = await new MainConsaltant().RemoveEducation(_id, Education_ID)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async AddEmpolymnet(_id: string, Employment_History: Iconsaltants['Employment_History']) {
        let response = await new MainConsaltant().AddEmpolymnet(_id, Employment_History)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async updateEmpolymnet(_id: string, Employment_History: Iconsaltants['Employment_History']) {
        let response = await new MainConsaltant().UpdateEmpolymnet(_id, Employment_History)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async RemoveEmployment_History(_id: string, Employment_History_ID: string) {
        let response = await new MainConsaltant().RemoveEmployment_History(_id, Employment_History_ID)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async AddCeritifications(_id: string, Ceritifications: Iconsaltants['Ceritifications']) {
        let response = await new MainConsaltant().AddCeritifications(_id, Ceritifications)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async UpdateCeritifications(_id: string, Ceritifications: Iconsaltants['Ceritifications']) {
        let response = await new MainConsaltant().UpdateCeritifications(_id, Ceritifications)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async RemoveCeritifications(_id: string, Ceritifications_ID: string) {
        let response = await new MainConsaltant().RemoveCeritifications(_id, Ceritifications_ID)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async AddPortfolos(_id: string, Portfolos: Iconsaltants['Portfolos']) {
        let response = await new MainConsaltant().AddPortfolos(_id, Portfolos)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async UpdatePortfolos(_id: string, Portfolos: Iconsaltants['Portfolos']) {
        let response = await new MainConsaltant().UpdatePortfolos(_id, Portfolos)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async RemovePortfolos(_id: string, Portfolos_ID: string) {
        let response = await new MainConsaltant().RemovePortfolos(_id, Portfolos_ID)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async AddResumes(_id: string, Resumes: Iconsaltants['Resumes']) {
        let response = await new MainConsaltant().AddResumes(_id, Resumes)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async RemoveResumes(_id: string, Resumes_ID: string) {
        let response = await new MainConsaltant().RemoveResumes(_id, Resumes_ID)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async UpdateResumes(_id: string, Resumes: Iconsaltants['Resumes']) {
        let response = await new MainConsaltant().UpdateResumes(_id, Resumes)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async AddTechnical_Skills(_id: string, Technical_Skills: Iconsaltants['Technical_Skills']) {
        let response = await new MainConsaltant().AddTechnical_Skills(_id, Technical_Skills)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async RemoveTechnical_Skills(_id: string, Technical_Skills_ID: string) {
        let response = await new MainConsaltant().RemoveTechnical_Skills(_id, Technical_Skills_ID)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async AddCOTS(_id: string, COTS: Iconsaltants['COTS']) {
        let response = await new MainConsaltant().AddCOTS(_id, COTS)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
    async RemoveCOTS(_id: string, COTS_ID: string) {
        let response = await new MainConsaltant().RemoveCOTS(_id, COTS_ID)
        if (response == null) {
            throw "wrong"
        }
        return response;
    }
}