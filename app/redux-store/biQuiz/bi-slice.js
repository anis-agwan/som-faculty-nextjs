import { BI_SECTION } from "@/app/enums/bi_section_enums";

const { createSlice } = require("@reduxjs/toolkit");


const biSlice = createSlice({
    name: "behavioral-interview",
    initialState: {
        //Sim
        simulation1Data: [
            {
              Q: "IDEALIZED INFLUENCE (B) (LS1-II)",
              questions: [
                {
                  question:
                    "1. Talked to me (us) about his/her most important values and beliefs.",
                },
                {
                  question:
                    "2.  Specified the importance of a strong sense of purpose.",
                },
                {
                  question:
                    "3.  Considered the moral and ethical consequences of his/her decisions.",
                },
                {
                  question:
                    "4.  Emphasized the importance of a collective sense of mission.",
                },
              ],
        
              O1: [
                {
                  idx: "1",
                  value: "Displayed a cyncial disregrad for values, or said nothing",
                },
                {
                  idx: "2",
                  value: "Discussed briefly his/her values and believes",
                },
                {
                  idx: "3",
                  value: "Emphasized the critical importance of values and beliefs",
                },
              ],
        
              O2: [
                {
                  idx: "1",
                  value:
                    "talked disparagingly of a sense of purpose, or didn't mention it",
                },
                {
                  idx: "2",
                  value: "discussed briefly",
                },
                {
                  idx: "3",
                  value: "evidently it was a central concern",
                },
              ],
        
              O3: [
                {
                  idx: "1",
                  value:
                    "demonstrated a contempt for the moral consequences, or did not discuss moral consequences",
                },
                {
                  idx: "2",
                  value: "showed a mild interest in moral consequences",
                },
                {
                  idx: "3",
                  value:
                    "moral and ethical considerations were a primary consideration",
                },
              ],
        
              O4: [
                {
                  idx: "1",
                  value:
                    "dismissed or downplayed a collective sense of mission, or did not mention it",
                },
                {
                  idx: "2",
                  value: "mentioned it briefly",
                },
                {
                  idx: "3",
                  value:
                    "talked at length about a collective sense of mission, or collective sense of mission was the main theme of the interaction",
                },
              ],
              Observation: "Observations",
            },
            {
              Q: "INSPIRATIONAL MOTIVATION (LS1-IM)",
              questions: [
                {
                  question: "5.  Talked optimistically about the future.",
                },
                {
                  question:
                    "6.  Expressed his/her confidence that we will reach our goals.",
                },
                {
                  question:
                    "7.  Talked enthusiastically about what needs to be accomplished.",
                },
                {
                  question: "8.  Articulated a compelling vision of the future.",
                },
              ],
        
              O1: [
                {
                  idx: "1",
                  value:
                    "talked pessimistically about the future, did not mention the future",
                },
                {
                  idx: "2",
                  value: "made some positive comments about the future",
                },
                {
                  idx: "3",
                  value: "discussed the future positively",
                },
              ],
        
              O2: [
                {
                  idx: "1",
                  value:
                    "expressed doubt that we would reach our goals, emphasized obstacles in the way of success, or did not discuss goals",
                },
                {
                  idx: "2",
                  value:
                    "showed some degree of confidence that we would meet our goals",
                },
                {
                  idx: "3",
                  value: "expressed strong confidence we would meet our goals",
                },
              ],
        
              O3: [
                {
                  idx: "1",
                  value:
                    "showed no enthusiasm for what needs to be done, or emphasized the onerous nature of what has to be done",
                },
                {
                  idx: "2",
                  value: "expressed some enthusiasm for what needs to be done",
                },
                {
                  idx: "3",
                  value:
                    "demonstrated a great deal of enthusiasm and excitement about what needs to be done",
                },
              ],
        
              O4: [
                {
                  idx: "1",
                  value:
                    "painted a grim picture of the future, or did not discuss the future",
                },
                {
                  idx: "2",
                  value: "mentioned the future in somewhat positive terms",
                },
                {
                  idx: "3",
                  value: "articulated a positive and compelling vision of the future",
                },
              ],
              Observation: "Observations",
            },
            {
              Q: "INTELLECTUAL STIMULATION (LS1-IS)",
              questions: [
                {
                  question:
                    "9.  Reexamined critical assumptions to question whether they were appropriate.",
                },
                {
                  question: "10.  Sought differing perspectives when solving problems.",
                },
                {
                  question:
                    "11.  Suggested new ways of looking at how I (we) do my (our) job(s).",
                },
                {
                  question:
                    "12.  Got me (us) to look at problems from many different angles.",
                },
              ],
        
              O1: [
                {
                  idx: "1",
                  value:
                    "refused to reconsider critical assumptions, expressed impatience with my (our) proposal to reconsider them, or did not mention critical assumptions",
                },
                {
                  idx: "2",
                  value: "briefly noted critical assumptions and commented on them",
                },
                {
                  idx: "3",
                  value:
                    "reexamined critical assumptions, or forcefully argued that we need to reconsider critical assumptions",
                },
              ],
        
              O2: [
                {
                  idx: "1",
                  value:
                    "refused to consider or discuss alternative perspectives, cut me off when I (we) suggested a different perspective, or did not seek new perspectives",
                },
                {
                  idx: "2",
                  value:
                    "made some effort to get a different perspective on problems to be solved",
                },
                {
                  idx: "3",
                  value:
                    "strongly urged me (us) to provide insight and alternatives on problems we face",
                },
              ],
        
              O3: [
                {
                  idx: "1",
                  value:
                    "refused to look at new ways of doing my job, emphasized sticking to the standard ways, berated me (us) for suggesting alternatives, or did not suggest any new ways of doing my work",
                },
                {
                  idx: "2",
                  value:
                    "made some brief comments or suggestions about ways to do my (our) work",
                },
                {
                  idx: "3",
                  value:
                    "emphasized new ways to do my (our) job and encouraged me (us) to consider them",
                },
              ],
        
              O4: [
                {
                  idx: "1",
                  value:
                    "berated me (us) for trying to look at problems from different angles, showed impatience when I (we) tried to discuss problems, did not make any effort to get me (us) to look at problems for different angles",
                },
                {
                  idx: "2",
                  value:
                    "made some effort to get me (us) to look at problems for different angles",
                },
                {
                  idx: "3",
                  value:
                    "made an energetic effort to get me (us) to look at problems from different angles",
                },
              ],
              Observation: "Observations",
            },
            {
              Q: "INDIVIDUALIZED CONSIDERATION (LS1-IC)",
              questions: [
                {
                  question:
                    "13.  Treated me (us) as an individual rather than just a member of the group.",
                },
                {
                  question: "14.  Focused me on developing my strengths.",
                },
                {
                  question: "15.  Spent time teaching and coaching.",
                },
                {
                  question:
                    "16.  Treated me (us) as an individual(s) with different needs, abilities and aspirations.",
                },
              ],
        
              O1: [
                {
                  idx: "1",
                  value:
                    "referred to the group rather than to me (us), refused to consider me (us) as an individual, de-emphasized any individual differences on my (our) part, cut me (us) off when I mentioned myself",
                },
                {
                  idx: "2",
                  value: "made some effort to treat me (us) distinctly from the group",
                },
                {
                  idx: "3",
                  value:
                    "showed a great interest in me (us) as an individual with distinct needs and interests",
                },
              ],
        
              O2: [
                {
                  idx: "1",
                  value:
                    "showed contempt for my (our) self development, indicated I (we) was (were) incapable of development, said I (we) did not have any strengths, or did not make any mention of my (us) developing my (our) strengths",
                },
                {
                  idx: "2",
                  value: "encouraged me (us) somewhat to develop my (our) strengths",
                },
                {
                  idx: "3",
                  value:
                    "vigorously encouraged me (us) to develop my (our) strengths, made many suggestions and proposals and plans for developing my (our) strengths",
                },
              ],
        
              O3: [
                {
                  idx: "1",
                  value:
                    "gave me (us) orders, refused my (our) requests for learning my (our) job, told me (us) I (we) should do as I (we) was (were) told, or did not spend any time teaching me (us) the job or giving me (us) advice on how to do the job better",
                },
                {
                  idx: "2",
                  value:
                    "explained some aspects of my (our) job, made some helpful suggestions about my (our) job",
                },
                {
                  idx: "3",
                  value:
                    "spent most of his/her time helping me (us) to understand and do my (our) job better",
                },
              ],
        
              O4: [
                {
                  idx: "1",
                  value:
                    "denigrated or downplayed my (our) interests and aspirations, told me (us) that my (our) job was to work and get paid, did not show any recognition of my (our) unique abilities and needs",
                },
                {
                  idx: "2",
                  value: "showed some awareness of my (our) unique qualities",
                },
                {
                  idx: "3",
                  value: "made me (us) feel like a special and unique person(s)",
                },
              ],
              Observation: "Observations",
            },
            {
              Q: "CONTINGENT REWARD (Transactional Leadership) (LS1-CR)",
              questions: [
                {
                  question:
                    "17.  Made clear what I (we) could expect to receive if my (our) performance met designated standards.",
                },
                {
                  question:
                    "18.  Provided his assistance in exchange for my (our) effort.",
                },
                {
                  question:
                    "19.  Made sure I (we) would receive appropriate rewards for achieving performance targets.",
                },
                {
                  question:
                    "20.  Expressed his/her satisfaction whe I (we) did a good job.",
                },
              ],
              O1: [
                {
                  idx: "1",
                  value:
                    "emphasized that I was supposed to work hard but did not mention any rewards or relate performance and rewards, gave me the impression there were no standards or set standards that were arbitrary and/or impossible",
                },
                {
                  idx: "2",
                  value:
                    "discussed briefly the relationship between my (our) performance and what I (we) could expect in return",
                },
                {
                  idx: "3",
                  value:
                    "emphasized the relationship between my (our performance and what I (we) could expect in return",
                },
              ],
        
              O2: [
                {
                  idx: "1",
                  value:
                    "made it clear that he/she was note going to help me regardless of my (our) level of effort, argued that I (we) should maintain a high level of effort regardless of any assistance, emphasized punishment for failure to perform",
                },
                {
                  idx: "2",
                  value:
                    "indicated that I (we) could expect assistance in exchange for effort",
                },
                {
                  idx: "3",
                  value:
                    "emphasized the relationship between my (our) level of effort and his/her assistance",
                },
              ],
        
              O3: [
                {
                  idx: "1",
                  value:
                    "emphasized punishment for not meeting targets rather than rewards for meeting targets, said that I (we) was getting a paycheck and that was enough, told me (us) I was lucky to have a job, or did not mention that meeting targets would result in some reward",
                },
                {
                  idx: "2",
                  value:
                    "suggested briefly that I (we) would expect some reward for meeting targets",
                },
                {
                  idx: "3",
                  value:
                    "emphasized the strong relationship between meeting performance targets and rewards that would be forthcoming",
                },
              ],
        
              O4: [
                {
                  idx: "1",
                  value:
                    "emphasized my (our) failures rather than my (our) successes, refused to recognize that I (we) had done a good job, talked about rewards in the future rather than for past performance, or showed no reaction to my (our) success",
                },
                {
                  idx: "2",
                  value: "expressed mild satisfaction with my (our) success",
                },
                {
                  idx: "3",
                  value:
                    "expressed great and sincere satisfaction for my (our) good work",
                },
              ],
              Observation: "Observations",
            },
        ],
        sim1Options: {},
        sim1Answers: {},

        sim1QuestionIdxStatus: [],
        sim1CompleteStatus: false,

        sim2Answers: {},
        sim2QuestionIdxStatus: [],
        sim2CompleteStatus: false,

        //Eval
        evaluation1Data: [
            {
              Q: "ADAPTING TO CHANGE EVALUATION - Assessor A",
              questions: [
                {
                  question: "Q1-Open to change",
                },
                {
                  question: "Q2-Effectively addapts to change",
                },
              ],
        
              O1: [
                {
                  idx: "1",
                  value:
                    "1 : Unwilling to consider alternative approaches or ways of doing things.  Prefers to stick with what has worked in the past rather than try new ideas.",
                },
                {
                  idx: "2",
                  value:
                    "2 : Unwilling to consider alternative approaches or ways of doing things.  Prefers to stick with what has worked in the past rather than try new ideas.",
                },
                {
                  idx: "3",
                  value:
                    "3 : Unwilling to consider alternative approaches or ways of doing things.  Prefers to stick with what has worked in the past rather than try new ideas.",
                },
                {
                  idx: "4",
                  value:
                    "4 : Expressed an interest in trying new things.  Considers alternative approaches to or ways of doing things.",
                },
                {
                  idx: "5",
                  value:
                    "5 : Expressed an interest in trying new things.  Considers alternative approaches to or ways of doing things.",
                },
                {
                  idx: "6",
                  value:
                    "6 : Expressed an interest in trying new things.  Considers alternative approaches to or ways of doing things.",
                },
                {
                  idx: "7",
                  value:
                    "7 : Expressed an interest in trying new things.  Considers alternative approaches to or ways of doing things.",
                },
                {
                  idx: "8",
                  value:
                    "8 : Clearly enjoys change.  Solicits new ideas from others and acts on them to help produce change.",
                },
                {
                  idx: "9",
                  value:
                    "9 : Clearly enjoys change.  Solicits new ideas from others and acts on them to help produce change.",
                },
                {
                  idx: "10",
                  value:
                    "10 : Clearly enjoys change.  Solicits new ideas from others and acts on them to help produce change.",
                },
              ],
        
              O2: [
                {
                  idx: "1",
                  value:
                    "1 : Demonstrated a low level of flexibility.  Strongly prefers structured tasks and stable routine.  Showed almost no willingness or ability to change.",
                },
                {
                  idx: "2",
                  value:
                    "2 : Demonstrated a low level of flexibility.  Strongly prefers structured tasks and stable routine.  Showed almost no willingness or ability to change.",
                },
                {
                  idx: "3",
                  value:
                    "3 : Demonstrated a low level of flexibility.  Strongly prefers structured tasks and stable routine.  Showed almost no willingness or ability to change.",
                },
                {
                  idx: "4",
                  value:
                    "4 : Demonstrated a willingness and ability to accept and adapt to change.  Effectively modified behavior/attitudes in response to changing demands/expectations.",
                },
                {
                  idx: "5",
                  value:
                    "5 : Demonstrated a willingness and ability to accept and adapt to change.  Effectively modified behavior/attitudes in response to changing demands/expectations.",
                },
                {
                  idx: "6",
                  value:
                    "6 : Demonstrated a willingness and ability to accept and adapt to change.  Effectively modified behavior/attitudes in response to changing demands/expectations.",
                },
                {
                  idx: "7",
                  value:
                    "7 : Demonstrated a willingness and ability to accept and adapt to change.  Effectively modified behavior/attitudes in response to changing demands/expectations.",
                },
                {
                  idx: "8",
                  value:
                    "8 : Demonstrated extreme flexibility and the ability to adapt quickly to a variety of changes.  Provided examples of facilitating change or helping others to adapt to change.",
                },
                {
                  idx: "9",
                  value:
                    "9 : Demonstrated extreme flexibility and the ability to adapt quickly to a variety of changes.  Provided examples of facilitating change or helping others to adapt to change.",
                },
                {
                  idx: "10",
                  value:
                    "10 : Demonstrated extreme flexibility and the ability to adapt quickly to a variety of changes.  Provided examples of facilitating change or helping others to adapt to change.",
                },
              ],
        
              Observation: "Observations",
              SeekingMoreInfo: "Seeking More Information",
              SharingResponsibility: "Sharing Responsibility",
            },
        ],

        
        eval1QuestionIdxStatus: [],
        eval1CompleteStatus: false,

        eval2QuestionIdxStatus: [],
        eval2CompleteStatus: false,


        
    },
    reducers: {
        rdsxSetBIQuestions(state, action) {
            const biq = action.payload.biQuestions;
            // console.log(biq)
            const qSize = biq.length;
            state.sim1Options = biq;
            state.sim1QuestionLength = qSize;
            console.log("Inside Redux", state.sim1Options);

            let innerArr = Array(5).fill(0);
            let outerArr = Array(5).fill(innerArr);

            console.log(outerArr);
            state.sim1QuestionIdxStatus = outerArr.slice()
            state.sim2QuestionIdxStatus = outerArr.slice()

            state.eval1QuestionIdxStatus = Array(5).fill(0)
            state.eval2QuestionIdxStatus = Array(5).fill(0)

        },

        rdxChangeBISim1IdxStatus(state, action) {
          const currTopic = action.payload.currTopic;
          const idx = action.payload.idx;
          const value = action.payload.value;
          if(action.payload.section === BI_SECTION.SIMULTAION1) {
            let prev = state.sim1QuestionIdxStatus.slice();
            prev[currTopic][idx] = value;
            console.log(currTopic, idx);
            console.log(prev);
            state.sim1QuestionIdxStatus = prev.slice();
            
            for(var i=0;i<state.sim1QuestionIdxStatus.length;i++) {
              for(var j=0;j<state.sim1QuestionIdxStatus[i].length;j++) {
                if(state.sim1QuestionIdxStatus[i][j] != 0) {
                  state.sim1CompleteStatus = true;
                } else {
                  state.sim1CompleteStatus = false;
                }
              }
            }

            console.log(state.sim1CompleteStatus)

          } else if (action.payload.section === BI_SECTION.SIMULATION2) {
            let prev = state.sim2QuestionIdxStatus.slice();
            prev[currTopic][idx] = value;
            console.log(currTopic, idx);
            console.log(prev);
            state.sim2QuestionIdxStatus = prev.slice();
            
            for(var i=0;i<state.sim2QuestionIdxStatus.length;i++) {
              for(var j=0;j<state.sim2QuestionIdxStatus[i].length;j++) {
                if(state.sim2QuestionIdxStatus[i][j] != 0) {
                  state.sim2CompleteStatus = true;
                } else {
                  state.sim2CompleteStatus = false;
                }
              }
            }

            console.log(state.sim2CompleteStatus)
          }
        },

        rdxChangeBIEvalIdxStatus(state, action) {
          const idx = action.payload.idx;
          console.log(idx)
          
          if(action.payload.section === BI_SECTION.EVALUATION1) {
            let prev = state.eval1QuestionIdxStatus.slice()
            prev[idx] = 1
            console.log(prev)

            if(!state.eval1QuestionIdxStatus.includes(0)) {
              state.eval1CompleteStatus = true;
            }

            state.eval1QuestionIdxStatus = prev.slice();

          } else if(action.payload.section === BI_SECTION.EVALUATION2) {
            let prev = state.eval2QuestionIdxStatus.slice()
            prev[idx] = 1
            console.log(prev)

            if(!state.eval2QuestionIdxStatus.includes(0)) {
              state.eval2CompleteStatus = true;
            }

            state.eval2QuestionIdxStatus = prev.slice();
            if(!state.eval2QuestionIdxStatus.includes(0)) {
              state.eval2CompleteStatus = true;
            }
          }

        },

        rdxUpdateSim1Answers(state, action) {
          let prevSim1 = {...state.sim1Answers}
          let prevSim2 = {...state.sim2Answers}
          const section = action.payload.section;
          const qidx = action.payload.qidx
          const idx = action.payload.idx
          const value = action.payload.value;
          if(section === BI_SECTION.SIMULTAION1) {
            if (qidx === 0) {
              prevSim1[`idealizedInfluence1Score${idx}`] = value;
              console.log(prevSim1);
            } else if (qidx === 1) {
              prevSim1[`inspirationalMotivation1Score${idx}`] = value;
              console.log(prevSim1);
            } else if (qidx === 2) {
              prevSim1[`intellectualStimulation1Score${idx}`] = value;
              console.log(prevSim1);
            } else if (qidx === 3) {
              prevSim1[`individualizedConsideration1Score${idx}`] = value;
              console.log(prevSim1);
            } else if (qidx === 4) {
              prevSim1[`contingentReward1Score${idx}`] = value;
              console.log(prevSim1);
            }
          } else if (section === BI_SECTION.SIMULATION2) {
            if (qidx === 0) {
              prevSim2[`idealizedInfluence2Score${idx}`] = value;
              console.log(prevSim2);
            } else if (qidx === 1) {
              prevSim2[`inspirationalMotivation2Score${idx}`] = value;
              console.log(prevSim2);
            } else if (qidx === 2) {
              prevSim2[`intellectualStimulation2Score${idx}`] = value;
              console.log(prevSim2);
            } else if (qidx === 3) {
              prevSim2[`individualizedConsideration2Score${idx}`] = value;
              console.log(prevSim2);
            } else if (qidx === 4) {
              prevSim2[`contingentReward2Score${idx}`] = value;
              console.log(prevSim2);
            }
          }

          state.sim1Answers = {...prevSim1}
          state.sim2Answers = {...prevSim2}
        },

        rdxUpdateEval1Answers(state, action) {
          let prevSim1 = {...state.sim1Answers}
          let prevSim2 = {...state.sim2Answers}
          const section = action.payload.section;
          const qidx = action.payload.qidx
          const idx = action.payload.idx
          const value = action.payload.value;

          console.log(idx)

          if (section === BI_SECTION.EVALUATION1) {
            prevSim1[`adaptToChange1Score${qidx + 1}`] = value;
            console.log(prevSim1);
          } else if (section === BI_SECTION.EVALUATION2) {
            prevSim2[`adaptToChange2Score${qidx + 1}`] = value;
            console.log(prevSim2);
          }

          state.sim1Answers = {...prevSim1}
          state.sim2Answers = {...prevSim2}
        },

        rdxUpdateSim1Observations(state, action) {
          let prevSim1 = {...state.sim1Answers}
          let prevSim2 = {...state.sim2Answers}

          const section = action.payload.section;
          const idx = action.payload.idx
          const value = action.payload.value;

          if (section === BI_SECTION.SIMULTAION1) {
            console.log("S1");
            if (idx === 0) {
              prevSim1["idealizedInfluence1observation"] = value;
              console.log(prevSim1);
            } else if (idx === 1) {
              prevSim1[`inspirationalMotivation1Observation`] = value;
              console.log(prevSim1);
            } else if (idx === 2) {
              prevSim1[`intellectualStimulation1Observation`] = value;
              console.log(prevSim1);
            } else if (idx === 3) {
              prevSim1[`individualizedConsideration1Observation`] = value;
              console.log(prevSim1);
            } else if (idx === 4) {
              prevSim1[`contingentReward1Observation`] = value;
              console.log(prevSim1);
            }
          } else if (section === BI_SECTION.SIMULATION2) {
            if (idx === 0) {
              prevSim2["idealizedInfluence2observation"] = value;
              console.log(prevSim2);
            } else if (idx === 1) {
              prevSim2[`inspirationalMotivation2Observation`] = value;
              console.log(prevSim2);
            } else if (idx === 2) {
              prevSim2[`intellectualStimulation2Observation`] = value;
              console.log(prevSim2);
            } else if (idx === 3) {
              prevSim2[`individualizedConsideration2Observation`] = value;
              console.log(prevSim2);
            } else if (idx === 4) {
              prevSim2[`contingentReward2Observation`] = value;
              console.log(prevSim2);
            }
          }
          
          state.sim1Answers = {...prevSim1}
          state.sim2Answers = {...prevSim2}
          
        },

        rdxUpdateEval1Observations(state, action) {
          let prevSim1 = {...state.sim1Answers}
          let prevSim2 = {...state.sim2Answers}
          const section = action.payload.section;
          const idx = action.payload.idx
          const value = action.payload.value;

          console.log(idx)


          if (section === BI_SECTION.EVALUATION1) {
            if (idx === 2) {
              prevSim1[`adaptToChange1Observation`] = value;
              console.log(prevSim1);
            } else if (idx === 3) {
              prevSim1[`adaptToChange1SeekingMoreInformation`] = Number(value);
              console.log(prevSim1);
            } else if (idx === 4) {
              prevSim1[`adaptToChange1SharingResponsibility`] = Number(value);
              console.log(prevSim1);
            }
            console.log(prevSim1);
          } else if (section === BI_SECTION.EVALUATION2) {
            if (idx === 2) {
              prevSim2[`adaptToChange1Observation`] = value;
              console.log(prevSim2);
            } else if (idx === 3) {
              prevSim2[`adaptToChange2SeekingMoreInformation`] = parseInt(value, 10);
              console.log(prevSim2);
            } else if (idx === 4) {
              prevSim2[`adaptToChange2SharingResponsibility`] = value;
              console.log(prevSim2);
            }
            console.log(prevSim2);
          }

          state.sim1Answers = {...prevSim1}
          state.sim2Answers = {...prevSim2}
        },

        rdxClearSim1Answers(state) {
          state.sim1Answers = {}
          state.sim1CompleteStatus = false
          state.sim1QuestionIdxStatus = []
          state.eval1CompleteStatus = false
          state.eval1QuestionIdxStatus = []
        },

        rdxClearSim2Answers(state) {
          state.sim2Answers = {}
          state.sim2CompleteStatus = false
          state.sim2QuestionIdxStatus = []
          state.eval2CompleteStatus = false
          state.eval2QuestionIdxStatus = []
        }
    }
})

export const biActions = biSlice.actions;

export default biSlice;