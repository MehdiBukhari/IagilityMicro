import EventManager from "rabbitmq-event-manager";
import {RxStomp} from "@stomp/rx-stomp";
let manager: EventManager | null = null
export function initEventManager(): EventManager {
    manager = new EventManager({
        url: 'amqp://localhost',
        application: 'iaglity',
    }) 
    return manager;
}
export function getEventManager(): EventManager {
    if (manager) {
        return manager;
    }
    throw new Error('EventManager have not been initialized')
}
export function SetupQues():any{
    QueGenratorOnExchange('login','login Que Setup');
    QueGenratorOnExchange('ConsaltantSignup','ConsaltantSignup Qur');
    QueGenratorOnExchange('ChangePassword','Change Password Que');
    QueGenratorOnExchange('ConsaltantActivation','Consaltant Activation Que');
    QueGenratorOnExchange('regenrateCode','regenrate Code');
    QueGenratorOnExchange('forgetPassword','forget Password');
    QueGenratorOnExchange('changePasswordFromToken','change Password From Token Que');
    QueGenratorOnExchange('getActivity','get Activity Que');
    QueGenratorOnExchange('saveActivity','save Activity Que');
    QueGenratorOnExchange('updateActivity','update Activity Que');
    QueGenratorOnExchange('deletActivity','delete Activity Que');
    QueGenratorOnExchange('getAdmin','get Admin Que');
    QueGenratorOnExchange('saveAdmin','save Admin Que');
    QueGenratorOnExchange('updateAdmin','update Admin Que');
    QueGenratorOnExchange('deletAdmin',' delete Admin Que');
    QueGenratorOnExchange('getAdminslist',' get Admin List Que');
    QueGenratorOnExchange('getApplication','get Application Que');
    QueGenratorOnExchange('saveApplication','save Application  Que');
    QueGenratorOnExchange('updateApplication','update Application Que');
    QueGenratorOnExchange('deletApplication','delete Application Que');
    QueGenratorOnExchange('getApplicationlist','get Application List Que');
    QueGenratorOnExchange('getApplicationByJobID','get Application by JobID Que');
    QueGenratorOnExchange('getBuniessSkill','get BussinessSkill Que');
    QueGenratorOnExchange('saveBussniessSkill','save BussiessSkill Que');
    QueGenratorOnExchange('updateBussniessSkill','update BussniessSkill Que');
    QueGenratorOnExchange('deleteBussniessSkill','delete BussniessSkill Que');
    QueGenratorOnExchange('getBussniesskillList','get Bussniesskill List Que');
    QueGenratorOnExchange('getCleint','get Cleint Que');
    QueGenratorOnExchange('saveClient','saveClient Que');
    QueGenratorOnExchange('updateClient','update Client Que');
    QueGenratorOnExchange('deletcleint','delet cleint Que');
    QueGenratorOnExchange('getclientlist','get client list Que');
    QueGenratorOnExchange('getComment','get Comment Que');
    QueGenratorOnExchange('saveComment','save Comment Que');
    QueGenratorOnExchange('updateComment','update Comment Que');
    QueGenratorOnExchange('deleteComment','delete Comment Que');
    QueGenratorOnExchange('getcotsCommentlist','get cots Comment list Que');
    QueGenratorOnExchange('getcotsCommentlistByJob','get cots Comment list By Job Que');
    QueGenratorOnExchange('getOneConsaltantDoucment','get One Consaltant Doucment Que');
    QueGenratorOnExchange('getOneConsaltantByUserId','get OneConsaltant By UserId Que');
    QueGenratorOnExchange('SaveOneConsaltantInformation','Save One Consaltant Information Que');
    QueGenratorOnExchange('UpdatOneConsaltantInformation','Updat One Consaltant Information Que');
    QueGenratorOnExchange('RemoveOneConsaltantInformation','Remove One Consaltant Information Que');
    QueGenratorOnExchange('AddBussnissSkill','Add BussnissSkill Que');
    QueGenratorOnExchange('RemoveBussnissSkill','Remove BussnissSkill Que');
    QueGenratorOnExchange('AddEducation','Add Education Que');
    QueGenratorOnExchange('UpdateEducation','Update Education Que');
    QueGenratorOnExchange('RemoveEducation','Remove Education Que');
    QueGenratorOnExchange('AddEmpolymnet','Add Empolymnet Que');
    QueGenratorOnExchange('UpdateEmpolymnet','Update Empolymnet Que');
    QueGenratorOnExchange('RemoveEmployment_History','Remove Employment History Que');
    QueGenratorOnExchange('AddCeritifications','Add Ceritifications Que');
    QueGenratorOnExchange('UpdateCeritifications','Update Ceritifications Que');
    QueGenratorOnExchange('RemoveCeritifications','Remove Ceritifications Que');
    QueGenratorOnExchange('AddPortfolos','Add Portfolos Que');
    QueGenratorOnExchange('UpdatePortfolos','Update Portfolos Que');
    QueGenratorOnExchange('RemovePortfolos','Remove Portfolos Que');
    QueGenratorOnExchange('AddResumes','Add Resumes Que');
    QueGenratorOnExchange('UpdateResumes','Update Resumes Que');
    QueGenratorOnExchange('RemoveResumes','Remove Resumes Que');
    QueGenratorOnExchange('AddTechnical_Skills','Add Technical Skills Que');
    QueGenratorOnExchange('RemoveTechnical_Skills','Remove Technical Skills Que');
    QueGenratorOnExchange('AddCOTS','Add COTS Que');
    QueGenratorOnExchange('RemoveCOTS','Remove COTS Que'); 
    QueGenratorOnExchange('getContract','get Contract Que'); 
    QueGenratorOnExchange('saveCOntract','save COntract Que'); 
    QueGenratorOnExchange('updateContract','update Contract Que'); 
    QueGenratorOnExchange('deletContractPrefrnces','delet Contract Prefrnces Que'); 
    QueGenratorOnExchange('getContractList','get Contract List Que'); 
    QueGenratorOnExchange('getcots','get cots Que'); 
    QueGenratorOnExchange('savecots','save cots Que'); 
    QueGenratorOnExchange('updatecots','update cots Que'); 
    QueGenratorOnExchange('deletcots','delet cots Que'); 
    QueGenratorOnExchange('getcotsskilllist','get cots skill list Que');
    QueGenratorOnExchange('getcotsskilllistByName','get cots skill list By Name Que'); 
    QueGenratorOnExchange('getJob','get Job Que'); 
    QueGenratorOnExchange('saveJOb','save JOb Que'); 
    QueGenratorOnExchange('updateJob','update Job Que'); 
    QueGenratorOnExchange('deletjob','delet job Que'); 
    QueGenratorOnExchange('getjoblist','get job list Que'); 
    QueGenratorOnExchange('getClientsJob','get Clients Job Que'); 
    QueGenratorOnExchange('getNotes','get Notes Que');
    QueGenratorOnExchange('saveNotes','save Notes Que'); 
    QueGenratorOnExchange('updatenotes','update Notes Que');
    QueGenratorOnExchange('deleteNotes','delete Notes Que');
    QueGenratorOnExchange('getNotesList','get Notes List Que');
    QueGenratorOnExchange('getNotesByName','get Notes By Name Que');
    QueGenratorOnExchange('getSubmission','get Submission Que');
    QueGenratorOnExchange('saveSubmission','save Submission Que');
    QueGenratorOnExchange('updateSubmission','update Submission Que');
    QueGenratorOnExchange('deletSubmission','delet Submission Que');
    QueGenratorOnExchange('getSubmissionSKill','get Submission SKill Que');
    QueGenratorOnExchange('getSubmissionSKillbyjob','get Submission SKill by job Que');
    QueGenratorOnExchange('getTechnicalSkill','get Technical Skill Que');
    QueGenratorOnExchange('savetechnicalSkill','save technical Skill Que');
    QueGenratorOnExchange('updateTechnicalSkills','update Technical Skills Que');
    QueGenratorOnExchange('deletTechnicalSKill','delet Technical SKill Que');
    QueGenratorOnExchange('getTechnicalSkillList','get Technical Skill List Que');
    QueGenratorOnExchange('getTechnicalSkillByName','get Technical Skill By Name Que');
    QueGenratorOnExchange('getUser','get User Que');
    QueGenratorOnExchange('Saveuser','Save user Que');
    QueGenratorOnExchange('Updateuser','Update user Que');
    QueGenratorOnExchange('getOneUser','get One User Que');
    QueGenratorOnExchange('updatepassword','updatepassword Que');
    QueGenratorOnExchange('consaltantActivation','consaltantActivation Que');
    QueGenratorOnExchange('consaltantNewCode','consaltant New Code Que');
    QueGenratorOnExchange('forget Password','forget Password Que');
    QueGenratorOnExchange('IncreementLogin','Increement Login Que');
    







    



}
export function RoboConnecter():RxStomp{
    let rxStomp = new RxStomp();
    const stompConfig = {
   connectHeaders: {
        login: "guest",
        passcode: "guest"
      },
      // Broker URL, should start with ws:// or wss:// - adjust for your broker setup
      brokerURL: "ws://127.0.0.1:15674/ws",
      reconnectDelay: 200,
    };
    rxStomp.configure(stompConfig);
     try {
        rxStomp.activate(); 
    } catch (error) {
        return error;
    }
    return rxStomp;
}
export function QueGenratorOnExchange(eventName:string,message:string){
    getEventManager().emit(eventName,{"message":message})
    getEventManager().on(eventName,async (playload:any)=>{
        console.log(playload);
});
}
