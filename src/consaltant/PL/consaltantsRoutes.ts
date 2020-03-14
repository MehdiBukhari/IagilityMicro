import express from 'express';
import { ConsaltantBuss } from '../BL/consaltant.buss';
import { Iconsaltants } from '../DL/consaltants';
import { Filters } from '../../utills/Filters';
export class ConsaltantsRoutes {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.post('/GCP', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'No user Exists',
                });
            } else {
                res.status(200).json({
                    meesage: 'Data Recived',
                    consaltant,
                });
            }
        });
        this.router.post('/GCID', async (req, res) => {
            let id = req.body.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantById(id);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'No user Exists',
                });
            } else {
                res.status(200).json({
                    meesage: 'Data Recived',
                    consaltant,
                });
            }
        });
        this.router.post('/UcPI', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let ConsaltanUpdate: Iconsaltants = JSON.parse(req.body.personalInfo);
                ConsaltanUpdate._id = consaltant._id;
                if (req.files != null) {
                    let consaltant_pic = req.files.profile_picture;
                    ConsaltanUpdate.C_Picture_URL = Date.now() + consaltant_pic.name;
                    if (new Filters().ImageFilter(consaltant_pic.mimetype)) {
                        consaltant_pic.mv('./uploads/' + consaltant.C_Picture_URL);
                    }
                }
                let ConsaltantAfterUpdate = await new ConsaltantBuss().UpdateConsaltant(ConsaltanUpdate);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Consaltant Not Updated',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'New Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/UPCC', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let ConsaltanUpdate: Iconsaltants = req.body.contactInfo;
                ConsaltanUpdate._id = consaltant._id;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().UpdateConsaltant(ConsaltanUpdate);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Consaltant Not Updated',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'New Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/UPCS', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let ConsaltanUpdate: Iconsaltants = req.body.summary;
                ConsaltanUpdate._id = consaltant._id;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().UpdateConsaltant(ConsaltanUpdate);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Consaltant Not Updated',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'New Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/UPCPT', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let ConsaltanUpdate: Iconsaltants = req.body.Personality_Type;
                ConsaltanUpdate._id = consaltant._id;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().UpdateConsaltant(ConsaltanUpdate);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Consaltant Not Updated',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'New Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/UPCPA', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let ConsaltanUpdate: Iconsaltants = req.body.Personal_assment;
                ConsaltanUpdate._id = consaltant._id;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().UpdateConsaltant(ConsaltanUpdate);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Consaltant Not Updated',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'New Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/ACBK', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let BID = req.body.BID;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().AddBuniessSkill(consaltant._id, BID);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Bussniess Skill Added',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/RCBSK', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let BID = req.body.BID;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().RemoveBuniessSkill(consaltant._id, BID);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Bussniess Skill Added',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/ACEDU', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let Education: Iconsaltants['Education'] = req.body.Education;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().AddEducation(consaltant._id, Education);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Education not Added',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/UCEDU', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let Education: Iconsaltants['Education'] = req.body.Education;

                let ConsaltantAfterUpdate = await new ConsaltantBuss().UpdateEducation(consaltant._id, Education);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Education not Added',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/RCEDU', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let Education_ID = req.body.Education_ID;

                let ConsaltantAfterUpdate = await new ConsaltantBuss().RemoveEducation(consaltant._id, Education_ID);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Education not Removed',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/ACCER', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let Certification = req.body.Certification;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().AddCeritifications(
                    consaltant._id,
                    Certification
                );
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Certification not Added',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/UCCER', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let Certification = req.body.Certification;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().UpdateCeritifications(
                    consaltant._id,
                    Certification
                );
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Certification not Added',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/RCCER', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let Certification_ID = req.body.Certification_ID;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().RemoveCeritifications(
                    consaltant._id,
                    Certification_ID
                );
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Certification not Rempved',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/ACEXP', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let Exp: Iconsaltants['Employment_History'] = req.body.Exp;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().AddEmpolymnet(consaltant._id, Exp);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Employment not Added',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/UCEXP', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let Exp: Iconsaltants['Employment_History'] = req.body.Exp;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().updateEmpolymnet(consaltant._id, Exp);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Employment not Added',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/RCEXP', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let Exp_ID = req.body.Exp_ID;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().RemoveEmployment_History(consaltant._id, Exp_ID);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Employment not Removed',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/ACOTS', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let COTS: Iconsaltants['COTS'] = req.body.COTS;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().AddCOTS(consaltant._id, COTS);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'COTS not Added',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/RCOTS', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let COTS_ID = req.body.COTS_ID;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().RemoveCOTS(consaltant._id, COTS_ID);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'COTS not Removed',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/ATEHSK', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let TECHNI: Iconsaltants['Technical_Skills'] = req.body.TECHNI;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().AddTechnical_Skills(consaltant._id, TECHNI);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'COTS not Removed',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/RTEHSK', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let TECHNI_ID = req.body.TECHNI_ID;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().RemoveTechnical_Skills(
                    consaltant._id,
                    TECHNI_ID
                );
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Technical Skills not Removed',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/ARESUME', async (req, res) => {
            let userid = req.authData.authData.id;
            let Resume_Title = req.body.Resume_Title;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let consultant_resume = req.files.consultant_resume;
                let resume: string = Date.now() + consultant_resume.name + '';
                let Resume: Iconsaltants['Resumes'] = [
                    {
                        Resume_Title: Resume_Title,
                        Resume_File_URL: resume,
                    },
                ];
                if (new Filters().ResumeFilter(consultant_resume.mimetype)) {
                    consultant_resume.mv('./Resumeuploads/' + resume);
                }
                let ConsaltantAfterUpdate = await new ConsaltantBuss().AddResumes(consaltant._id, Resume);

                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Technical Skills not Removed',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/RRESUME', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let Resmue_ID = req.body.Resume_ID;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().RemoveResumes(consaltant._id, Resmue_ID);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Resume not Removed',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/URESUME', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let Resume: Iconsaltants['Resumes'] = req.body.Resume;

                let ConsaltantAfterUpdate = await new ConsaltantBuss().UpdateResumes(consaltant._id, Resume);

                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Resume not updated',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Resume  Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/APROC', async (req, res) => {
            let userid = req.authData.authData.id;
            let PortFolio_Title = req.body.Portfolio_Title;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let consultant_profile = req.files.consultant_profile;
                let resume: string = Date.now() + consultant_profile.name + '';
                let Portfoloio: Iconsaltants['Portfolos'] = [
                    {
                        Portfolio_Title: PortFolio_Title,
                        Portfolio_File_URL: resume,
                    },
                ];
                // if (new Filters().ResumeFilter(consultant_profile.mimetype)) {

                consultant_profile.mv('./Resumeuploads/' + resume);
                //   }
                let ConsaltantAfterUpdate = await new ConsaltantBuss().AddPortfolos(consaltant._id, Portfoloio);

                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Portfolio not Removed',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/UPROC', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let Portfoloio: Iconsaltants['Portfolos'] = req.body.Portfolio;

                let ConsaltantAfterUpdate = await new ConsaltantBuss().UpdatePortfolos(consaltant._id, Portfoloio);

                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Portfolio not Removed',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/RPROC', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let portfolio_ID = req.body.portfolio_ID;
                let ConsaltantAfterUpdate = await new ConsaltantBuss().RemovePortfolos(consaltant._id, portfolio_ID);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Resume not Removed',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });
        this.router.post('/ProfilePicUpdate', async (req, res) => {
            let userid = req.authData.authData.id;
            let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(userid);
            if (consaltant == null) {
                res.status(200).json({
                    meesage: 'consaltant not available',
                });
            } else {
                let ConsaltanUpdate: Iconsaltants = consaltant;
                if (req.files != null) {
                    let consaltant_pic = req.files.profile_picture;
                    ConsaltanUpdate.C_Picture_URL = Date.now() + consaltant_pic.name;
                    if (new Filters().ImageFilter(consaltant_pic.mimetype)) {
                        consaltant_pic.mv('./uploads/' + consaltant.C_Picture_URL);
                    }
                }
                let ConsaltantAfterUpdate = await new ConsaltantBuss().UpdateConsaltant(ConsaltanUpdate);
                if (ConsaltantAfterUpdate == null) {
                    res.status(200).json({
                        meesage: 'Consaltant Not Updated',
                    });
                } else {
                    res.status(200).json({
                        meesage: 'Consaltant Updated',
                        ConsaltantAfterUpdate,
                    });
                }
            }
        });

        this.router.post('/CPROPERCENTAGE', async (req, res) => {});
    }
}
export const consultantRoutes = new ConsaltantsRoutes().router;
