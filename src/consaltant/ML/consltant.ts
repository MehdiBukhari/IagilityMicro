import {Schema, model} from "mongoose"
import { Iconsaltants } from "../DL/consaltants";
const ConsltantSchema = new Schema({
  C_Picture_URL:{type:String},
  C_First_Name:{type:String,required:true},
  C_Last_Name:{type:String,required:true},
  C_Profile_Title:{type:String},
  C_Career_Level:{type:String},
  Summary:{type:String},
  Email:{type:String,index: { unique: true },required:true},
  Work_Authorization:{
    work_auth_main_type:{type:String},
    wor_auth_sub_type:{type:String},
    wor_auth_sub_type_other:{type:String}
},
  iAgility_Personality_Type:{type:String},
  Bussniess_Skill:[
    {
        Bussniess_Skill_ID:{type:Schema.Types.ObjectId, ref: "cbussniessskills"}
    }
  ],
  
  Current_Location:{
      address:{type:String},
      Country:{type:String},
      Zip_Postal_Code:{type:String}
  },
  Contact_Information:{
      cell:{type:String,required:true},
      Adress:{type:String},
      LinkedIn_URL:{type:String},
      Facebook_URL:{type:String},
      Twitter_URL:{type:String}
  },

  Availability:{
      availability_date:{type:String},
      status:{type:String} 
  },
  Personal_Assessment:{
      Dealing_with_Pressure_Stress:{
          Self_Control:{type:String},
          Competitive:{type:String},
          Stress_Tolerance:{type:String}
      },
      Energy_Drive:{
          Energy:{type:String},
          Ambition:{type:String},
          Leadership_Potential:{type:String},
          Social_Confidence:{type:String},
          Persuasion:{type:String},
          Flexibility:{type:String}
      },
      Working_with_others:{
          Outgoing:{type:String},
          Teamwork:{type:String},
          Concern_for_others:{type:String},
          Democratic:{type:String}
      },
      Work_Style:{
          Dependability:{type:String},
          Persistence:{type:String},
          Attention_to_Detail:{type:String},
          Rule_Following:{type:String},
          Planning:{type:String},
          Cooperative:{type:String},
          Courteous:{type:String},
          Calm:{type:String},
          Creative:{type:String},
          Efficient:{type:String},
          Technological:{type:String}
      },
      Problem_Solving:{
          Innovation:{type:String},
          Analytical_Thinking:{type:String}
      }
  },

  Employment_History:[
      {
          Emp_Job_Title:{type:String},
          Company_Name:{type:String},
          Emp_Location:{type:String},
          Emp_Experience_Duration:{
              Emp_DateFrom:{type:String},
              Emp_DateTo:{type:String},
              Emp_Current_Job_check:{type:String}
              
          },
          Emp_Description:{type:String},
      }
  ],
  Education:[
      {
          E_Degree_Level:{type:String},
          E_Majors:{type:String},
          E_School:{type:String},
          E_Completion_Year:{type:String}
      }

  ],
  Ceritifications:[
      {
          Cert_Name:{type:String},
          Cert_Expiry:{type:String},
          Life_Time_Check:{type:String},
          Cert_Completion_Year:{type:String}

      }
  ],
  Resumes:[
      {
          Resume_Title:{type:String},
          Resume_File_URL:{type:String}
      }
  ],
  Portfolos:[
      {
      Portfolio_Title:{type:String},
      Portfolio_File_URL:{type:String}
      }
  ],
  Technical_Skills:[
      {
          Tech_skill_type:{type:String},
          Tech_skill_id_if_type_defulat:{type: Schema.Types.ObjectId, ref: "CTechSkill" },
          Tech_skill_name_other:{type:String}
      }
  ],
  COTS:[
      {
          cots_skill_type:{type:String},
          cots_skill_id_if_type_defulat:{type: Schema.Types.ObjectId, ref: "cots" },
          cots_skill_name_other:{type:String}
      }
  ],

  userId: { type: Schema.Types.ObjectId, ref: "User",required:true },
  updateby: { type: Schema.Types.ObjectId, ref: "User" },
  createdby: { type: Schema.Types.ObjectId, ref: "User" }
},
{
  timestamps:true
});
export const ConsultantsSchema= model<Iconsaltants>("consultant", ConsltantSchema);
